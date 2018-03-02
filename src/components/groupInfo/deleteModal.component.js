import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {modalStyles} from "../../styleSheets/modal.style";

class DeleteModal extends Component {

  state = {
    isModalVisible: false
  }

  _toggleModal = () =>
     this.setState({isModalVisible: !this.state.isModalVisible});

  render() {
    return (
      <View>
        <Button
          style={modalStyles.deleteText}
          title="Delete Group"
          onPress={()=>this._toggleModal()}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible: false})}
        >
          <View style={modalStyles.modalContent}>
            <View style={modalStyles.modalText}>
              <Text>Are you sure you want to delete this group?</Text>
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


export default DeleteModal;