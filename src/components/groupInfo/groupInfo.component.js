import React, {Component} from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import {Cell} from "react-native-tableview-simple";
import styles from '../../styleSheets/stylesheet';
import {Actions} from 'react-native-router-flux';

class GroupInfo extends Component {

  render() {
    return(
      <View>
        <Text style={styles.spacing}>Group Name</Text>
        <Cell
          cellStyle="Basic"
          title={this.props.group.name}
        />
        <Text style={styles.spacing}>Members</Text>
        <Cell
          cellStyle="Basic"
          title="Add Member"
          onPress={Actions.login}
        />
        <FlatList
          data={this.props.group.members}
          renderItem={
            ({item}) =>
              <Cell
                style={styles.container}
                cellStyle="Basic"
                title={item.key} />
            }
        />
        <Button
          title="Delete Group"
          onPress={Actions.login}
        />
      </View>
    );
  }
}

export default GroupInfo;