import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  border-radius: 50px;
  border: 1px solid ${props => props.border};
  background-color: ${props => props.background};
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const Value = styled.Text`
  color: #000;
  font-size: 12px;
  font-weight: 700;
`;
