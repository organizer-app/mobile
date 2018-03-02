import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Cell, Separator} from "react-native-tableview-simple";
import styles from '../../styleSheets/stylesheet';
import DeleteModal from './deleteModal.component';
import AddModal from './addModal.component';

class GroupInfo extends Component {

  render() {

    return (
      <View>
        <Text style={styles.spacing}>Group Name</Text>

        <Cell
          style={styles.cell}
          cellStyle="Basic"
          title={this.props.group.name}
        />

        <Text style={styles.spacing}>Members</Text>

        <AddModal />

        <FlatList
          data={this.props.group.members}
          renderItem={
            ({item}) =>
              <Cell
                style={styles.container}
                cellStyle="Basic"
                title={item.key}/>
          }
          ItemSeparatorComponent={({highlighted}) =>
            <Separator isHidden={highlighted}/>}
        />

        <DeleteModal/>

      </View>
    );
  }
}

export default GroupInfo;