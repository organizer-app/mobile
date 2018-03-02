import React, {Component} from 'react';
import {View, Text} from 'react-native';
import GroupList from '../components/groupList/groupList.component';
import styles from '../styleSheets/stylesheet';

class GroupsPage extends Component {
  render() {
    return (
      <View>
        <Text style={styles.spacing}>Groups</Text>
        <GroupList/>
      </View>
    );
  }
}

export default GroupsPage;