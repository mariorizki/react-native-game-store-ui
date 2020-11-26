import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import Text from '../Text';

import { Ionicons } from '@expo/vector-icons';

const GameScreen = ({ route, navigation }) => {
  const { game } = route.params;

  const renderStars = () => {
    let stars = [];

    for (let star = 1; star <= 5; star++) {
      stars.push(
        <Ionicons
          key={star}
          name="ios-star"
          size={16}
          style={{ marginRight: 5 }}
          color={Math.floor(game.rating) >= star ? '#819ee5' : '#434958'}
        />
      );
    }

    return <Stars>{stars}</Stars>;
  };

  return (
    <GameContainer showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" />
      <GameArtContainer>
        <GameArt source={game.cover} />
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name="ios-close" size={48} color="#ffffff" />
        </BackButton>
      </GameArtContainer>

      <GameInfoContainer>
        <GameThumbContainer>
          <GameThumb source={game.cover} />
        </GameThumbContainer>
        <GameInfo>
          <Text heavy medium>
            {game.title}
          </Text>
          <Text color="#9a9a9a">{game.teaser}</Text>
        </GameInfo>
        <Download>
          <Ionicons name="md-cloud-download" size={24} color="#ffffff" />
        </Download>
      </GameInfoContainer>

      <GameStatsContainer>
        {renderStars()}
        <Text heavy color="#9a9a9a">
          {game.rating}
        </Text>
        <Text bold color="#9a9a9a">
          {game.category[0]}
        </Text>
        <Text bold color="#9a9a9a">
          {game.age}
        </Text>
        {/* <Text bold color="#9a9a9a">
          Game of the day
        </Text> */}
      </GameStatsContainer>

      <ScreenShotsContainer>
        <ScreenShots horizontal={true} showHorizontalScrollIndicator={false}>
          {game.screenshots.map((screenshot, index) => {
            return (
              <ScreenShotContainer key={index}>
                <ScreenShot source={screenshot} />
              </ScreenShotContainer>
            );
          })}
        </ScreenShots>
      </ScreenShotsContainer>

      <DescriptionContainer>
        <Description medium color="#9a9a9a">
          {game.description}
        </Description>
      </DescriptionContainer>
    </GameContainer>
  );
};

export default GameScreen;

const GameContainer = styled.ScrollView`
  background-color: #343434;
  flex: 1;
`;

const GameArtContainer = styled.View`
  position: relative;
`;

const GameArt = styled.Image`
  height: 350px;
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 28px;
  left: 16px;

  background-color: #819ee5;

  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;

const GameThumbContainer = styled.View`
  elevation: 3;
`;

const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;

const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

const Stars = styled.View`
  flex-direction: row;
`;

const ScreenShotsContainer = styled.View`
  margin: 8px 0;
`;

const ScreenShots = styled.ScrollView``;

const ScreenShotContainer = styled.View`
  padding: 16px;
`;

const ScreenShot = styled.Image`
  height: 200px;
  width: 300px;
  border-radius: 12px;
  background-color: #000;
`;

const DescriptionContainer = styled.View`
  padding-bottom: 32px;
  margin: 0 8px;
`;

const Description = styled(Text)`
  margin: 0 16px;
  line-height: 22px;
`;
