import styled from "styled-components";

export const Chip = styled.span(({ theme }) => ({
  padding: "0.5rem 1rem",
  background: theme.color.background,
  borderRadius: "10px",
  border: `1px solid ${theme.color.primary}`,
  fontSize: "1.2rem",
  color: theme.color.text,
  transition: "all 0.2s",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
}));
