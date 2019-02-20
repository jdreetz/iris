import React, { SFC } from 'react';
import { InputCheckboxProps } from './InputCheckboxTypes';
import {
  InputCheckboxWrapperStyled,
  InputCheckboxStyled,
  InputCheckboxLabelStyled,
  OverlayStyled,
  HiddenLabelStyled,
} from './InputCheckboxStyled';
import { CheckboxFocusOutline } from './InputCheckboxFocus';
import { InputWrapperInline } from '../InputWrapperInline/InputWrapperInline';

export const InputCheckbox: SFC<InputCheckboxProps> = ({
  checkedStyle = 'default',
  disabled,
  errorMsg,
  format = 'neutral',
  helperMsg,
  hideLabel,
  id,
  label,
  theme = 'default',
  ...props
}) => (
  <InputWrapperInline
    errorMsg={errorMsg}
    helperMsg={helperMsg}
    theme={theme}
  >
    <InputCheckboxWrapperStyled>
      <InputCheckboxLabelStyled
        htmlFor={id}
        format={format}
        disabled={disabled}
        fieldLevelErrors
        hideLabel={hideLabel}
        theme={theme}
      >
        <InputCheckboxStyled
          {...props}
          aria-label={hideLabel ? label : null}
          type="checkbox"
          id={id}
          disabled={disabled}
          theme={theme}
        />

        <OverlayStyled theme={theme} checkedStyle={checkedStyle}>
          <CheckboxFocusOutline theme={theme} />
        </OverlayStyled>

        <HiddenLabelStyled hideLabel={hideLabel}>
          {label}
        </HiddenLabelStyled>
      </InputCheckboxLabelStyled>
    </InputCheckboxWrapperStyled>
  </InputWrapperInline>
);
