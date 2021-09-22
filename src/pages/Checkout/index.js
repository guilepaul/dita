import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Button} from '../../components/Button';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import * as S from './styles';

export const Checkout = () => {
  const [selectedDate, setSelectedDate] = useState();
  const today = moment();
  const minDate = today.add(1, 'days');

  const onDateChange = (date, type) => {
    if (type === 'START_DATE') {
      setSelectedDate(date);
    }
  };

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
        <S.Content>
          <S.Title>Escolha o dia da Dita</S.Title>
          <S.CalendarWrapper>
            <CalendarPicker
              minDate={minDate}
              weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
              previousTitle="Anterior"
              nextTitle="Próximo"
              todayBackgroundColor="#e6ffe6"
              selectedDayColor="#00f9e4"
              selectedDayTextColor="#000000"
              scaleFactor={375}
              textStyle={{
                color: 'purple',
              }}
              onDateChange={onDateChange}
            />

            <S.WrapperDate>
              <S.TextDate>
                Sua Dita chegará no dia:{' '}
                {moment(selectedDate).format('DD/MM/YYYY')}
              </S.TextDate>
              <S.Value>
                <S.TextValue>Total: R$ 69,90</S.TextValue>
              </S.Value>
            </S.WrapperDate>
          </S.CalendarWrapper>
        </S.Content>
        <S.ButtonContainer>
          <Button>Confirmar</Button>
        </S.ButtonContainer>
      </S.Container>
    </S.Fragment>
  );
};
