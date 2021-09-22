import React from 'react';

import * as S from './styles';

export const Button = ({children}) => {
  return (
    <S.Container>
      <S.TextButton>{children}</S.TextButton>
    </S.Container>
  );
};
