import styled from "styled-components";

const LogoContainer = styled.span({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  background: "linear-gradient(135deg, #b6b2b2 0%, #000 100%)",
  borderRadius: 8,
  fontWeight: 700,
  fontSize: "1.2rem",
  fontFamily: "'Arial Black', sans-serif",
  color: "#fff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  letterSpacing: "-0.05em",
});

export default function Logo() {
  return <LogoContainer>HG</LogoContainer>;
}
