import React from 'react';
import {
  AsyncStorage,
  StyleSheet
} from 'react-native';

import {
  Container,
  Content,
  Text,
  Header,
  Item, Input, Icon, Button, Left
} from 'native-base';

export default class RestaurantList extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <Container>
        <Header searchBar rounded>
        <Left>
          <Button>
            <Icon name="ios-people" />
          </Button>
        </Left>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
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
  