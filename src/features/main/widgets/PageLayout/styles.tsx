import { styled } from "@mui/material/styles";

export const Title = styled("p")(({ color }: { color: string }) => ({
  marginTop: 18,
  marginLeft: 12,
  writingMode: "vertical-rl",
  fontSize: 24,
  color,
  textTransform: "uppercase",
  cursor: "pointer",
}));

export const Root = styled("div")({
  position: "relative",
  display: "flex",
  height: "100%",
});

export const TitleContainer = styled("div")({
  position: "absolute",
});

export const PageContainer = styled("div")(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: "absolute",
    left: 0,
    height: "100%",
    justifyContent: "flex-end",
    marginTop: isMobile ? 12 : 24,
    marginLeft: isMobile ? 0 : 48,
  }),
);
