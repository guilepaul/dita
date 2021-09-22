import React from 'react';
import {useNavigation} from '@react-navigation/core';

import * as S from './styles';

export const ModalPlan = props => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Checkout');
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
            <S.Info color={props.color}>{props.text}</S.Info>
            <S.InnerContainer>
              <S.Paragraph>{props.innerText}</S.Paragraph>
            </S.InnerContainer>
            <S.Value>{props.value.replace('a partir de', '')}</S.Value>
            <S.ButtonCloseModal color={props.color} onPress={handleNavigate}>
              <S.ButtonText>Confirmar</S.ButtonText>
            </S.ButtonCloseModal>
            <S.ButtonCloseModal
              color="rgba(0, 0, 0, 0.9)"
              onPress={handleCloseModal}>
              <S.ButtonText>Fechar</S.ButtonText>
            </S.ButtonCloseModal>
          </S.ViewModal>
        </S.CenteredView>
      </S.ModalView>
    </S.Container>
  );
};
