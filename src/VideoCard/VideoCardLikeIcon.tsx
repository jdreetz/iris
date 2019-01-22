import React, { SFC, HTMLProps } from 'react';
import styled from 'styled-components';
import * as COLORS from '../Color/Color';
import HeartIcon from '../Icons/heart-filled.svg';

const VideoCardLikeIconStyled = styled.span`
    svg {
        * {
            fill: ${COLORS.SunsetOrange};
        }
    }
`;

export const VideoCardLikeIcon: SFC<HTMLProps<HTMLSpanElement>> = ({
    ref: _,
    ...props
}) => (
    <VideoCardLikeIconStyled {...props}>
        <HeartIcon />
    </VideoCardLikeIconStyled>
);
