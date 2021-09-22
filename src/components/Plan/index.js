import React, {useState} from 'react';
import {ModalPlan} from './components/ModalPlan';

import * as S from './styles';

export const Plan = props => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  return (
    <S.Container
      border={props.border}
      background={props.background}
      onPress={() => setModalIsVisible(!modalIsVisible)}>
      <S.Title>{props.text}</S.Title>
      <S.Value>{props.value}</S.Value>
      <ModalPlan
        modalVisible={modalIsVisible}
        setModalVisible={setModalIsVisible}
      />
    </S.Container>
  );
};
