import React from 'react';
import {View, Pressable, Text} from 'react-native';

import * as S from './styles';

export const ModalPlan = props => {
  return (
    <View>
      <S.ModalView
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}>
        <S.CenteredView>
          <S.ViewModal>
            <S.TextModal>Hello World!</S.TextModal>
            <Pressable
              onPress={() => props.setModalVisible(!props.modalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </S.ViewModal>
        </S.CenteredView>
      </S.ModalView>
    </View>
  );
};
