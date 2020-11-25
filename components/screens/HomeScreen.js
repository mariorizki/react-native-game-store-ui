import React, { useState, useRef } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import Text from '../Text';
import categoryList from '../../data/categories';
import games from '../../data/games';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const gameRef = useRef();
  const changeCategory = category => {
    gameRef.current.scrollToOffset({ x: 0, y: 0 });
    setSelectedCategory(category);
  };

  const GameItem = game => {
    return (
      <Game>
        <GameCover source={game.cover} />
        <GameInfo backgroundColor={game.backgroundColor}>
          <GameImage source={game.cover} />
          <GameTitle>
            <Text medium heavy>
              {game.title}
            </Text>
            <Text small>{game.teaser}</Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <Text large>
          Hello{' '}
          <Text large heavy>
            User,
          </Text>
          {`\n`}
          <Text large heavy>
            Best games for today
          </Text>
        </Text>
        <Avatar source={require('../../assets/avatar.png')} />
      </Header>

      <Categories horizontal={true} showHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => {
          return (
            <Category key={index} onPress={() => changeCategory(category)}>
              <CategoryName
                selected={selectedCategory === category ? true : false}
              >
                {category}
              </CategoryName>
              {selectedCategory === category && <CategoryDot />}
            </Category>
          );
        })}
      </Categories>

      <Games
        data={games.filter(game => {
          return (
            game.category.includes(selectedCategory) ||
            selectedCategory === 'All'
          );
        })}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={gameRef}
      />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Header = styled.View`
  flex-direction: row;
  margin: 16px 32px 0 32px;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;

const CategoryName = styled(Text)`
  color: ${props => (props.selected ? '#819ee5' : '#9a9a9a')};
  font-weight: ${props => (props.selected ? '700' : '500')};
`;

const CategoryDot = styled.View`
  width: 16px;
  height: 3px;
  border-radius: 3px;
  background-color: #819ee5;
`;

const Games = styled.FlatList`
  margin-top: 32px;
  flex: 1;
`;

const Game = styled.TouchableOpacity`
  margin-bottom: 32px;
`;

const GameCover = styled.Image`
  height: 300px;
  width: 100%;
  border-radius: 8px;
`;

const GameInfo = styled.View`
  margin: -50px 16px 0 16px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

const GameImage = styled.Image`
  width: 50px;
  height: 40px;
  border-radius: 10px;
`;

const GameTitle = styled.View`
  margin: 0 24px;
`;
