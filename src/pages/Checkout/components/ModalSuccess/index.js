import React from 'react';
import {useNavigation} from '@react-navigation/core';

import * as S from './styles';

export const ModalSuccess = props => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Home');
    handleCloseModal();
  };

  const handleCloseModal = () => {
    props.setModalVisible(!props.modalVisible);
  };

  return (
    <S.Container>
      <S.ModalView
        animationType="fade"
        transparent
        visible={props.modalVisible}
        onRequestClose={handleCloseModal}>
        <S.CenteredView>
          <S.ViewModal>
            <S.Info color="#fafafa">Confirmado Com Sucesso!!</S.Info>
            <S.ButtonCloseModal color="green" onPress={handleNavigate}>
              <S.ButtonText>Fechar</S.ButtonText>
            </S.ButtonCloseModal>
          </S.ViewModal>
        </S.CenteredView>
      </S.ModalView>
    </S.Container>
  );
};
