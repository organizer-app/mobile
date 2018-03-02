import React, {Component} from 'react';
import {Cell, Separator} from 'react-native-tableview-simple';
import {FlatList, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../../styleSheets/stylesheet';


class GroupList extends Component {


  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              key: 1,
              name: 'GroupOne',
              members: [
                {key: "Jack"},
                {key: "Betty"},
                {key: "Amy"},
                {key: "Kevin"}
              ]
            },
            {
              key: 2,
              name: 'GroupTwo',
              members: [
                {key: "James"},
                {key: "Bella"},
                {key: "Amy"},
                {key: "Kevin"}
              ]
            },
          ]}

          renderItem={
            ({item}) =>
              <Cell
                style={styles.cell}
                cellStyle="Basic"
                title={item.name}
                accessory="DisclosureIndicator"
                onPress={()=>Actions.groupInfo({group: item})}
              />
          }
          ItemSeparatorComponent={({ highlighted }) =>
            <Separator isHidden={highlighted} />}
        />
      </View>
    );
  }
}

export default GroupList;