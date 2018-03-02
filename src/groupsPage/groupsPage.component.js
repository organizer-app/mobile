import React, {Component} from 'react';
import {View, Text} from 'react-native';
import GroupList from '../components/groupList/groupList.component';

class GroupsPage extends Component {
  render() {
    return (
      <View>
        <Text>Groups</Text>
        <GroupList/>
      </View>
    );
  }
}

export default GroupsPage;