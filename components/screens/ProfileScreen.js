import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import Text from '../Text';
import games from '../../data/games';
import { Entypo } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <AvatarContainer>
        <Avatar source={require('../../assets/avatar.png')} />
        <Text large heavy>
          Username
        </Text>
      </AvatarContainer>

      <Badge>
        <Text small heavy>
          Casual Player
        </Text>
      </Badge>

      <Text center large>
        Purchased Games
      </Text>

      <Games
        data={games.filter(item => {
          return item.purchased;
        })}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Game>
            <GameImage source={item.cover} />
            <Info>
              <Text heavy>{item.title}</Text>
              <Text small color="#9a9a9a">
                {Math.floor(Math.random() * 1000) + 1} Sales
              </Text>
            </Info>

            <Price>${Math.floor(Math.random() * 50) + 1}</Price>
          </Game>
        )}
      />

      <Account>
        <Settings>
          <Entypo name="cog" size={24} color="#ffffff" />
        </Settings>
        <LogOut>
          <Text heavy>Logout</Text>
        </LogOut>
      </Account>
    </Container>
  );
};

export default ProfileScreen;

const Container = styled.View`
  flex: 1;
  background-color: #343434;
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin: 64px 0 16px 0;
`;

const Avatar = styled.Image`
  height: 100px;
  width: 100px;
  margin-bottom: 16px;
  border-radius: 50px;
`;

const Badge = styled.View`
  background-color: #819ee5;
  padding: 4px 12px;
  border-radius: 8px;
  align-self: center;
  margin-bottom: 16px;
`;

const Games = styled.FlatList`
  margin: 32px 16px 0 16px;
`;

const Game = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const GameImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 12px;
`;

const Info = styled.View`
  flex: 1;
  margin: 0 16px;
`;

const Price = styled(Text)`
  color: #819ee5;
`;

const Account = styled.View`
  flex-direction: row;
  margin: 32px 16px;
`;

const Settings = styled.TouchableOpacity`
  background-color: #819ee5;
  padding: 12px;
  border-radius: 8px;
`;

const LogOut = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #484848;
  margin-left: 16px;
  flex: 1;
  border-radius: 12px;
`;
