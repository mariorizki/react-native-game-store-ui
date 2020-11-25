import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import Text from '../Text';
import categoryList from '../../data/categories';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const changeCategory = category => {
    setSelectedCategory(category);
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
            </Category>
          );
        })}
      </Categories>
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
