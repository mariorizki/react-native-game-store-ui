import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';

import Text from '../Text';
import games from '../../data/games';

const LiveScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text large bold>
          Streaming
        </Text>
        <SearchContainer>
          <Search
            placeholder="Search live streams..."
            placeholderTextColor="#838383"
          />

          <SearchIcon>
            <Entypo name="magnifying-glass" size={24} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>

      <SectionContainer>
        <Text medium bold>
          Popular Games
        </Text>

        <PopularGames horizontal={true} showHorizontalScrollIndicator={false}>
          {games.map((game, index) => {
            return game.id % 2 === 1 ? (
              <PopularGameContainer
                onPress={() => navigation.navigate('GameScreen', { game })}
                key={index}
              >
                <PopularGame source={game.cover}></PopularGame>
              </PopularGameContainer>
            ) : null;
          })}
        </PopularGames>
      </SectionContainer>

      <SectionContainer>
        <LiveGamesTitle>
          <Text medium bold>
            Live Now
          </Text>
          <ViewAllText bold>View all</ViewAllText>
        </LiveGamesTitle>
      </SectionContainer>

      <LiveGames
        data={games}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle>
                <Text small bold>
                  {item.title}
                </Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )}
      />
    </Container>
  );
};

export default LiveScreen;

const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;

const Header = styled.View`
  margin: 32px 16px 0 16px;
`;

const SearchContainer = styled.View`
  position: relative;
  margin: 32px 0;
  background-color: #484848;
  border-radius: 180px;
  justify-content: center;
`;

const Search = styled.TextInput`
  padding: 16px 64px 16px 32px;
  color: #c6c6c6;
`;

const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

const SectionContainer = styled.View`
  margin: 0 16px;
`;

const PopularGames = styled.ScrollView`
  margin: 16px 0 16px -16px;
`;

const PopularGameContainer = styled.TouchableOpacity`
  width: 80px;
  margin: 0 13px;
`;

const PopularGame = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

const LiveGamesTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewAllText = styled(Text)`
  color: #819ee5;
`;

const LiveGames = styled.FlatList`
  flex: 1;
  margin: 16px 16px 0 16px;
`;

const LiveGameContainer = styled.View`
  position: relative;
`;

const LiveGame = styled.Image`
  height: 275px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 12px;
`;

const LiveGameOver = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: 8px;
  left: 16px;
`;

const LiveGameTitle = styled.View`
  background-color: #819ee5;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 4px;
`;

const LiveGameBadge = styled.View`
  background-color: #e54949;
  border-radius: 4px;
  padding: 2px 8px;
`;
