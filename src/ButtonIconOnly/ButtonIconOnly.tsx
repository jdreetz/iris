import React from 'react';
import {
    ButtonIconOnlyProps,
} from './ButtonIconOnlyTypes';
import {
    ButtonStyled,
    IconWrapperStyled,
    SpanStyled,
} from './ButtonIconOnlyStyled';
import {Omit} from '../globals/js/type-helpers';

const ButtonIconOnly: React.SFC< ButtonIconOnlyProps & Omit < React.HTMLProps<HTMLElement>,
'size' > > = ({
    autoSpacingHorizontal = true,
    format = 'dark',
    icon,
    isButtonElement = true,
    size = 'sm',
    ref: _,
    ...filteredProps
}) => {

    const ButtonElement = isButtonElement
        ? ButtonStyled
        : SpanStyled;

    return (
        <ButtonElement
            {...filteredProps}
            autoSpacingHorizontal={autoSpacingHorizontal}
            format={format}
            size={size}>
            <IconWrapperStyled>{icon}</IconWrapperStyled>
        </ButtonElement>
    );
};

export default ButtonIconOnly;