import styled from 'styled-components';
import {
  layout, LayoutProps, space, SpaceProps, flexbox, FlexboxProps, system,
} from 'styled-system';

type GapProps = { gap?: string | number };

const gap = system({
  gap: true,
});

export const Spacer = styled.div<LayoutProps & SpaceProps>`
  display: inline-block;
  ${layout};
  ${space};
`;

export const Flex = styled.div<LayoutProps & FlexboxProps & GapProps & SpaceProps>`
  display: flex;
  ${layout};
  ${flexbox};
  ${space};
  ${gap};
`;

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  flex-basis: 388px;
  flex-shrink: 0;
  margin-left: auto;
  margin-right: auto;
`;
