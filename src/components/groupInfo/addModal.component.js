import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {Cell} from 'react-native-tableview-simple';
import {modalStyles} from "../../styleSheets/modal.style";

class AddModal extends Component {

  state = {
    isModalVisible: false
  }

  _toggleModal = () =>
    this.setState({isModalVisible: !this.state.isModalVisible});

  render(){
    return(
      <View>
        <Cell
          cellStyle="Basic"
          title="Add Member"
          onPress={()=>this._toggleModal()}
        />

        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible: false})}
        >
          <View style={modalStyles.modalContent}>
            <View style={modalStyles.modalText}>
              <Text>Add New Member</Text>
            </View>
            <View style={modalStyles.container}>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.cancelButton]}
                onPress={this._toggleModal}
              >
                <Text style={modalStyles.blueText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[modalStyles.button, modalStyles.cancelButton]}
                onPress={this._toggleModal}
              >
                <Text style={modalStyles.redText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

export default AddModal;