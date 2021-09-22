import React from 'react';
import {Image} from 'react-native';
import {Button} from '../../components/Button';
import {Plan} from '../../components/Plan';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Fragment>
      <S.Container>
        <S.Header>
          <Image
            source={{uri: 'https://i.imgur.com/UDjaF0G.jpeg'}}
            width={80}
            height={80}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
        </S.Header>

        <S.Text>Escolha o seu serviço</S.Text>

        <S.PlanContainer>
          <Plan
            border="#ea56f2"
            background="#ea56f2"
            text="RESIDENCIAL SIMPLES"
            value="a partir de R$ 69,90"
            innerText={`Este Plano contempla a limpeza simples

* 2 dormitórios

* 1 banheiro

* 1 cozinha

* 1 sala
            `}
          />
          <Plan
            border="#00f9e4"
            background="#00f9e4"
            text="RESIDENCIAL COMPLETA"
            value="a partir de R$ 129,90"
            innerText={`
Plano Indisponível
            `}
          />
          <Plan
            border="#eaf400"
            background="#eaf400"
            text="OUTROS SERVIÇOS DE LIMPEZA"
            value="a partir de R$ 129,90"
            innerText={`Plano Indisponível`}
          />
        </S.PlanContainer>
        <S.ButtonContainer>
          <Button>Login</Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Fragment>
  );
};
