
import React from 'react'
import { View, Pressable, Text, Modal, StyleSheet} from 'react-native'
 

export const ModalContainer = ({ isVisible=false,  children, onPress, onClose }) => {
  return (
    isVisible && (
      <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      
    >
         <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Pressable
              style={{ position: "absolute", zIndex:20, right: 20, top: 10, width:25, height:25,  }}
              onPress={() => onClose() }>
              <Text style={{...styles.textStyle, }}>X</Text>
            </Pressable>
          
          {children && children}</View>
      </View>
       
      </Modal>
    )
  )


  
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    width: 320,
      height: "75%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});