import React from 'react';
import {
  AsyncStorage,
  StyleSheet
} from 'react-native';

import {
  Container,
  Content,
  Text
} from 'native-base';

export default class RestaurantList extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <Container>
          <Content>
            <Text>
              Merhaba Dünya
            </Text>
          </Content>
        </Container>
      );
    }
  
    

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  