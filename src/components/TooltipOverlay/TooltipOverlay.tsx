import React, {
  Component,
  ReactNode,
  MouseEventHandler,
} from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { Manager, Target, Popper } from 'react-popper';
import { Tooltip } from '../Tooltip/Tooltip';

const TOOLTIP_SPEED = 50;

export interface TooltipOverlayProps {
  /**
   * Sets word-break: break-all on tooltip text.
   */
  breakWords?: boolean;
  /**
   * The triggering Element
   */
  children: React.ReactNode;
  /**
   * Added to triggering Element
   */
  className?: string;
  /**
   * Tooltip direction
   */
  attachment?: 'top' | 'right' | 'left' | 'bottom';
  /**
   * set to true to disable the tooltip.
   */
  isDisabled?: boolean;
  /**
   * Event Callback
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * Toggle display block on span wrapping the tooltip, centers tooltip to parent container
   */
  makeWrapperBlock?: boolean;
  /**
   * Event Callback
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * Event Callback
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * Pointer events toggles the CSS pointer events property
   */
  pointerEvents?: boolean;
  /**
   * Toggle popper events enabled (default is false). See [React Popper docs](https://github.com/FezVrasta/react-popper)
   */
  popperEventsEnabled?: boolean;
  /**
   * A translated string of text for the tooltip.
   */
  tooltipText: ReactNode;
  /**
   *  Should the tootlip trigger on click instead of hover?
   */
  triggerOnClick?: boolean;
  /**
   *  Override the default Z-index
   */
  zIndexOverride?: number;
  href?: string;
}

export interface TooltipOverlayState {
  isShowing: boolean;
  isHovered: boolean;
}

// filter out zIndexOverride prop because styled() is failing to do so
const ManagerFiltered = ({ zIndexOverride, ...props }) => (
  <Manager {...props} />
);

const ManagerStyled = styled(ManagerFiltered)`
  z-index: ${props => props.zIndexOverride || 600};
`;

const PopperFiltered = ({ zIndexOverride, ...props }) => (
  <Popper {...props} />
);

const PopperStyled = styled(PopperFiltered)`
  z-index: ${props => props.zIndexOverride || 600};
  pointer-events: ${props => (props.pointerEvents ? 'none' : 'auto')};
`;

export const TargetStyled = styled(Target)`
  display: inline;
`;

const SpanWrapper = styled.span<{
  'aria-label'?: string;
  'data-tooltip-trigger'?: boolean;
  className?: string;
  makeWrapperBlock?: boolean;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}>`
  display: ${props => (props.makeWrapperBlock ? 'block' : null)};
`;

const TooltipWrapperStyled = styled.div`
  opacity: 0;
  transition: opacity ${TOOLTIP_SPEED}ms ease-in;
`;

const transitionStyles = {
  entering: {
    opacity: 0.1,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
};
export class TooltipOverlay extends Component<
  TooltipOverlayProps,
  TooltipOverlayState
> {
  static defaultProps = {
    attachment: 'top',
  };

  constructor(props: TooltipOverlayProps) {
    super(props);
    this.state = {
      isShowing: false,
      isHovered: false,
    };
  }

  state: TooltipOverlayState;
  props: TooltipOverlayProps;
  overlay: any;
  menu: any;

  // Functions

  showTooltip = () => {
    if (!this.props.isDisabled) {
      // iOS won't bubble clicks to the body unless it has cursor pointer
      // we listen for a body click to close the tooltip
      if (document.body) {
        document.body.style.cursor = 'pointer';
      }
      this.setState({
        isShowing: true,
      });

      this.listenForClose();
    }
  };

  hideTooltip = () => {
    // unset iOS hack
    if (document.body) {
      document.body.style.cursor = '';
    }

    this.setState({
      isShowing: false,
    });

    this.stopListeningForClose();
  };

  toggleTooltip = () => {
    this.setState({
      isShowing: this.props.isDisabled
        ? false
        : !this.state.isShowing,
    });
  };

  // Event Handlers
  handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(event);
    }

    if (this.props.triggerOnClick) {
      this.toggleTooltip();
    }
  };

  handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    this.setState({
      isHovered: true,
    });

    if (typeof this.props.onMouseEnter === 'function') {
      this.props.onMouseEnter(event);
    }

    if (!this.props.triggerOnClick) {
      this.showTooltip();
    }
  };

  handleMouseLeave = (event: React.MouseEvent<HTMLSpanElement>) => {
    this.setState({
      isHovered: false,
    });

    if (typeof this.props.onMouseLeave === 'function') {
      this.props.onMouseLeave(event);
    }

    if (!this.props.triggerOnClick) {
      if (this.state.isShowing) {
        this.hideTooltip();
      }
    }
  };

  listenForClose = () => {
    if (document.body) {
      document.body.addEventListener('click', this.hideTooltip);
    }
  };
  stopListeningForClose = () => {
    if (document.body) {
      document.body.removeEventListener('click', this.hideTooltip);
    }
  };

  render() {
    const {
      breakWords,
      children,
      className,
      attachment,
      isDisabled,
      onClick,
      onMouseEnter,
      onMouseLeave,
      pointerEvents,
      popperEventsEnabled = false,
      tooltipText,
      triggerOnClick,
      zIndexOverride,
      ...props
    } = this.props;

    const offsetMap = {
      top: '0, 12',
      right: '0, 4',
      bottom: '0, 50% + 4',
      left: '0, 4',
    };

    const tooltipComponent = (
      <Transition
        in={this.state.isShowing}
        timeout={TOOLTIP_SPEED}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <TooltipWrapperStyled
            style={{
              ...transitionStyles[state],
            }}
            ref={overlay => {
              this.overlay = overlay;
            }}
          >
            <Tooltip breakWords={breakWords}>
              {tooltipText as string}
            </Tooltip>
          </TooltipWrapperStyled>
        )}
      </Transition>
    );

    return (
      <ManagerStyled zIndexOverride={zIndexOverride}>
        <TargetStyled>
          <SpanWrapper
            {...props}
            onClick={this.handleClick}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            data-tooltip-trigger
            aria-label={tooltipText as string}
            className={className}
          >
            {children}
          </SpanWrapper>
        </TargetStyled>
        <PopperStyled
          eventsEnabled={popperEventsEnabled}
          modifiers={{
            offset: {
              offset: offsetMap[attachment],
            },
            positionFixed: true,
          }}
          pointerEvents={pointerEvents}
          placement={attachment}
          zIndexOverride={zIndexOverride}
        >
          {tooltipComponent}
        </PopperStyled>
      </ManagerStyled>
    );
  }
}