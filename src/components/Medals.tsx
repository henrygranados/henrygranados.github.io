import styled from "styled-components";

const MedalsContainer = styled.div({
  position: "relative",
  display: "inline-block",
});

const MedalLabel = styled.div<{ position: "gold" | "silver" | "bronze" }>(
  {
    position: "absolute",
    top: "-20px",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#666",
  },
  ({ position }) => ({
    left:
      position === "gold" ? "16.5%" : position === "silver" ? "50%" : "83.5%",
    transform: "translateX(-50%)",
  }),
);

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
      <MedalLabel position="gold">Gold</MedalLabel>
      <MedalLabel position="silver">Silver</MedalLabel>
      <MedalLabel position="bronze">Bronze</MedalLabel>
      <MedalsImage src={image} alt="Medals" />
      <MedalCount position="gold">{gold}</MedalCount>
      <MedalCount position="silver">{silver}</MedalCount>
      <MedalCount position="bronze">{bronze}</MedalCount>
    </MedalsContainer>
  );
}
