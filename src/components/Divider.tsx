import styled from "styled-components";

const Divider = styled.hr(({ theme }) => ({
  border: "none",
  borderTop: `1px solid ${theme.color.border}`,
  margin: "2rem 0",
}));

export default Divider;
