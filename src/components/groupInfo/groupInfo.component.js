import React, {Component} from 'react';
import {Text, View} from 'react-native';

class GroupInfo extends Component {

  render() {
    return(
      <View>
        <Text>{this.props.group.name}</Text>
      </View>
    );
  }


}

export default GroupInfo;