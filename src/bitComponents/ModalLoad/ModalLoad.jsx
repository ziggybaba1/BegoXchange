import React from 'react';
import { View,Modal, Alert, ActivityIndicatorBase, ActivityIndicator } from 'react-native';
import ModalLoaderStyle from "./modalloadstyle.js";


function ModalLoad(props) {
    return (
        <View style={ModalLoaderStyle.container}>
             <Modal
              animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => props.setModalVisible(props.modalVisible)}>
         <View style={ModalLoaderStyle.centeredView}>
            <View style={ModalLoaderStyle.modalView}>
            <ActivityIndicator size={'large'} color="#4182FE" />
            </View>
         </View>

             </Modal>
        </View>
       
    );
}

export default ModalLoad;