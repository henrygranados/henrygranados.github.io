// import styled from "styled-components";

// export const Chip = styled.span(({ theme }) => ({
//   padding: "0.5rem 1rem",
//   background: theme.color.background,
//   borderRadius: "10px",
//   border: `1px solid ${theme.color.primary}`,
//   fontSize: "1.2rem",
//   color: theme.color.text,
//   transition: "all 0.2s",
//   boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
// }));

import styled from "styled-components";
import type { DefaultTheme } from "styled-components";

const variantStyles = {
  primary: (theme: DefaultTheme) => ({
    background: theme.color.primary,
    border: `1px solid ${theme.color.primary}`,
    color: theme.color.onPrimary,
  }),
  primaryLight: (theme: DefaultTheme) => ({
    background: theme.color.primaryLight,
    border: `1px solid ${theme.color.primaryLight}`,
    color: theme.color.onPrimary,
  }),
  react: (theme: DefaultTheme) => ({
    background: theme.color.react,
    border: `1px solid ${theme.color.react}`,
    color: theme.color.onPrimary,
  }),
  success: (theme: DefaultTheme) => ({
    background: theme.color.success,
    border: `1px solid ${theme.color.success}`,
    color: theme.color.onSuccess,
  }),
  warning: (theme: DefaultTheme) => ({
    background: theme.color.warning,
    border: `1px solid ${theme.color.warning}`,
    color: theme.color.onWarning,
  }),
  danger: (theme: DefaultTheme) => ({
    background: theme.color.danger,
    border: `1px solid ${theme.color.danger}`,
    color: theme.color.onDanger,
  }),
};

export const Chip = styled.span<{
  variant?: keyof typeof variantStyles;
  outline?: boolean;
}>(({ theme, variant = "primary", outline = false }) => {
  const colors = variantStyles[variant](theme);

  return {
    padding: "0.5rem 0.5rem",
    borderRadius: "10px",
    fontSize: "1rem",
    transition: "all 0.2s",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "default",

    background: outline ? "transparent" : colors.background,
    border: colors.border,
    color: outline ? colors.border.split(" ")[2] : colors.color,
  };
});
