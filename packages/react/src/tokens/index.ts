import colors from './colors.json';
import spacing from './spacing.json';
import typography from './typography.json';
import radius from './radius.json';
import shadows from './shadows.json';

export const tokens = {
  colors: colors.colors,
  spacing: spacing.spacing,
  typography: typography.typography,
  radius: radius.radius,
  shadows: shadows.shadows,
};

export type Tokens = typeof tokens;
export type ColorToken = keyof typeof tokens.colors;
export type SpacingToken = keyof typeof tokens.spacing;
export type TypographyToken = keyof typeof tokens.typography;
export type RadiusToken = keyof typeof tokens.radius;
export type ShadowToken = keyof typeof tokens.shadows;

export { colors, spacing, typography, radius, shadows };
