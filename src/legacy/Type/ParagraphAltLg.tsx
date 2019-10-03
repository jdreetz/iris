import React, { SFC } from 'react';
import { TypeBase } from './TypeBase';
import { TypeProps } from './TypeTypes';

export const ParagraphAltLg: SFC<
  TypeProps &
    Omit<
      React.HTMLProps<HTMLParagraphElement>,
      'size' | 'type' | 'onChange'
    >
> = ({ element = 'p', format = 'alternative', ...props }) => (
  <TypeBase element={element} size="lg" format={format} {...props} />
);