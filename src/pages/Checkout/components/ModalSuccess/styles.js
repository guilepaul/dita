import styled from 'styled-components/native';

export const Container = styled.View``;

export const ModalView = styled.Modal``;

export const CenteredView = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ViewModal = styled.View`
  margin: 20px;
  background-color: #3a3b3c;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  width: 95%;
  height: 30%;
  justify-content: space-between;
`;

export const TextModal = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
  background-color: ${props => props.color};
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 4px;
  width: 100%;
  margin: 5px 0;
`;

export const ButtonText = styled.Text`
  color: #fafafa;
  font-weight: bold;
`;

export const Info = styled.Text`
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 500;
`;

export const InnerContainer = styled.View`
  margin-top: 10px;
  flex: 1;
  /* border: 1px solid #fff; */
`;

export const Paragraph = styled.Text`
  color: #fafafa;
  font-size: 15px;
`;

export const Value = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fafafa;
  margin: 8px 0;
`;
