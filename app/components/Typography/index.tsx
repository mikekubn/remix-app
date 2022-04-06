/* stylelint-disable property-disallowed-list */
import styled, { css } from 'styled-components';
import {
  color, ColorProps, space, SpaceProps, system, typography, TypographyProps,
} from 'styled-system';
import { mixinTextOverflow } from '~/mixins/textOverflow';

type Variant = keyof typeof styles;
type ExtraTypographyProps = {
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none' | 'full-width' | 'full-size-kana';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
};
type Props = {
  ellipsis?: boolean;
};

const extraTypography = system({
  textTransform: true,
  whiteSpace: true,
});

/**
 * Please consider the order of custom mixins when adding a new one.
 */
const Typography = styled.p.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['whiteSpace', 'textTransform'].includes(prop) && defaultValidatorFn(prop),
})<{ variant?: Variant } & ColorProps & SpaceProps & TypographyProps & ExtraTypographyProps & Props>`
  line-height: 1.5;
  ${color};
  ${space};
  ${typography};
  ${({ ellipsis }) => (ellipsis ? mixinTextOverflow : null)};
  ${extraTypography};
`;

const styles = {
  /* default */
  inherit: css`
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  `,

  /* Regular headlines */
  Headline1: css`
    font-size: 24px;
    font-weight: normal;
  `,
  Headline2: css`
    font-size: 24px;
    font-weight: normal;
  `,
  Headline3: css`
    font-size: 24px;
    font-weight: normal;
  `,
  Headline4: css`
    font-size: 24px;
    font-weight: normal;
  `,
  Headline5: css`
    font-size: 22px;
    font-weight: normal;
  `,
  Headline6: css`
    font-size: 18px;
    font-weight: normal;
  `,

  /* Regular body */
  BodyBase: css`
    font-size: 15px;
    font-weight: normal;
  `,
  BodyMedium: css`
    font-size: 13px;
    font-weight: normal;
  `,
  BodySmall: css`
    font-size: 12px;
    font-weight: normal;
  `,

  /* Bold headlines */
  BoldHeadline1: css`
    font-size: 24px;
    font-weight: bold;
  `,
  BoldHeadline2: css`
    font-size: 24px;
    font-weight: bold;
  `,
  BoldHeadline3: css`
    font-size: 24px;
    font-weight: bold;
  `,
  BoldHeadline4: css`
    font-size: 24px;
    font-weight: bold;
  `,
  BoldHeadline5: css`
    font-size: 22px;
    font-weight: bold;
  `,
  BoldHeadline6: css`
    font-size: 18px;
    font-weight: bold;
  `,

  /* Bold body */
  BoldBodyBase: css`
    font-size: 15px;
    font-weight: bold;
  `,
  BoldBodyMedium: css`
    font-size: 13px;
    font-weight: bold;
  `,
  BoldBodySmall: css`
    font-size: 12px;
    font-weight: bold;
  `,

  /* Brand headlines */
  BrandHeadline1: css`
    font-size: 24px;
    line-height: 32px;
    padding-top: 3px; 
    font-weight: normal;
    font-family: ASAP;
  `,
  BrandHeadline2: css`
    font-size: 24px;
    line-height: 32px;
    padding-top: 3px; 
    font-weight: normal;
    font-family: ASAP;
  `,
  BrandHeadline3: css`
    font-size: 24px;
    line-height: 32px;
    padding-top: 3px; 
    font-weight: normal;
    font-family: ASAP;
  `,
  BrandHeadline4: css`
    font-size: 24px;
    line-height: 30px;
    padding-top: 3px; 
    font-weight: normal;
    font-family: ASAP;
  `,
  BrandHeadline5: css`
    font-size: 22px;
    line-height: 28px;
    padding-top: 3px;
    font-weight: normal;
    font-family: ASAP;
  `,
  BrandHeadline6: css`
    font-size: 18px;
    line-height: 24px;
    padding-top: 3px; 
    font-weight: normal;
    font-family: ASAP;
  `,

  /* Brand body */
  BrandBodyBase: css`
    font-size: 15px;
    line-height: 22px;
    padding-top: 3px;
    font-weight: normal;
    font-family: ASAP;
  `,

  /* buttons */
  ButtonBig: css`
    font-size: 22px;
    font-weight: bold;
  `,
  ButtonSmall: css`
    font-size: 14px;
    font-weight: bold;
  `,

  /* links */
  LinkPrimary: css`
    font-size: 15px;
    font-weight: normal;
    text-decoration: underline;
  `,
  LinkSecondary: css`
    font-size: 13px;
    font-weight: normal;
    text-decoration: underline;
  `,

  /* menu */
  Menu: css`
    font-size: 14px;
    font-weight: bold;
  `,

  /* caption */
  Caption: css`
    font-size: 13px;
    font-weight: bold;
  `,
};

export { Typography };
