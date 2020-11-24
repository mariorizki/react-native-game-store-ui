import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import Text from '../Text';

const HomeScreen = () => {
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
