import styled from "styled-components";

const MedalsContainer = styled.div({
  position: "relative",
  display: "inline-block",
});

const MedalsImage = styled.img({
  display: "block",
  height: "50px",
  width: "auto",
});

const MedalCount = styled.span<{ position: "gold" | "silver" | "bronze" }>(
  ({ position, theme }) => ({
    position: "absolute",
    top: "50%",
    left:
      position === "gold" ? "16.5%" : position === "silver" ? "50%" : "83.5%",
    transform: "translate(-50%, -50%)",
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.color.white,
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  }),
);

interface MedalsProps {
  image: string;
  gold: number;
  silver: number;
  bronze: number;
}

export default function Medals({ image, gold, silver, bronze }: MedalsProps) {
  return (
    <MedalsContainer>
      <MedalsImage src={image} alt="Medals" />
      <MedalCount position="gold">{gold}</MedalCount>
      <MedalCount position="silver">{silver}</MedalCount>
      <MedalCount position="bronze">{bronze}</MedalCount>
    </MedalsContainer>
  );
}
