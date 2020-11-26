import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';

import Text from '../Text';
import games from '../../data/games';

const LiveScreen = () => {
  return (
    <Container>
      <Text>Live Screen</Text>
    </Container>
  );
};

export default LiveScreen;

const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;
