import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { ParagraphSm } from '../Type';
import * as COLORS from '../Color/Color';

export interface VideoCardPropertyBadge
  extends React.HTMLProps<HTMLInputElement> {
  /*
   * The Property Badge Label
   */
  label: string;
}

const VideoCardPropertyBadgeStyled = styled.div<any>`
  align-items: center;
  background: ${rgba(COLORS.Paste, 0.9)};
  border-radius: ${rem(2)};
  display: inline-flex;
  padding: ${rem(4)} ${rem(8)};
  text-transform: uppercase;
`;

const VideoCardPropertyBadgeTextStyled = styled(ParagraphSm)`
  align-items: center;
  display: inline-flex;
  font-weight: 600;
  letter-spacing: ${rem(1.25)};
  margin-bottom: 0;
`;

export const VideoCardPropertyBadge: SFC<VideoCardPropertyBadge> = ({
  label,
}) => (
  <VideoCardPropertyBadgeStyled>
    <VideoCardPropertyBadgeTextStyled>
      {label}
    </VideoCardPropertyBadgeTextStyled>
  </VideoCardPropertyBadgeStyled>
);
