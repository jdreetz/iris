import React, { SFC } from 'react';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputMessageArea } from '../InputMessageArea/InputMessageArea';
import { Checkmark, CircleWarning } from '../Icons';
import {
  IconStyled,
  WrapperStyled,
  PositioningWrapperStyled,
  InputFieldWrapperStyled,
} from './InputWrapperStyled';

export interface InputWrapperProps {
  disabled?: boolean;
  errorMsg?: React.ReactNode;
  format?: 'negative' | 'positive' | 'neutral';
  helperMsg?: React.ReactNode;
  label?: React.ReactNode;
  labelForId?: string;
  preMessage?: React.ReactNode;
  showLabel: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark' | 'default';
}

export const InputWrapper: SFC<InputWrapperProps> = ({
  children,
  disabled,
  format = 'neutral',
  labelForId,
  errorMsg,
  helperMsg,
  label,
  preMessage,
  showLabel = true,
  size = 'md',
  theme = 'light',
  ...props
}) => (
  <WrapperStyled
    {...props}
    theme={theme === 'default' ? 'light' : theme}
  >
    {showLabel && (
      <InputLabel
        disabled={disabled}
        htmlFor={labelForId}
        theme={theme === 'default' ? 'light' : theme}
      >
        {label}
      </InputLabel>
    )}

    <PositioningWrapperStyled>
      <InputFieldWrapperStyled>
        {children}
        {format !== 'neutral' && (
          <IconStyled format={format} iconSize={size}>
            {format === 'positive' ? (
              <Checkmark />
            ) : (
              <CircleWarning />
            )}
          </IconStyled>
        )}
      </InputFieldWrapperStyled>

      {preMessage}

      <InputMessageArea
        errorMsg={errorMsg}
        helperMsg={helperMsg}
        theme={theme}
      />
    </PositioningWrapperStyled>
  </WrapperStyled>
);
