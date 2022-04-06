import { css } from 'styled-components';

export const mixinPositionCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const mixinPositionCenterX = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const mixinPositionCenterY = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
