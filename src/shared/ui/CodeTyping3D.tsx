import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { styleConstant } from "../config/styleConstant";
import { styled } from "@mui/material";

const code = `
export const About = () => {
  const theme = useTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Root>
      {!isMobile && (
        <ImageSide>
          <CodeTyping3D />
        </ImageSide>
      )}
      <TextSide>
        <Title>Обо мне</Title>
        <Text>{about.main}</Text>
        <Text>{about.outro}</Text>
      </TextSide>
    </Root>
  );
};
`;

export const CodeTyping3D = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= code.length) {
          return prev + 5;
        } else {
          return 0;
        }
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);
  return (
    <Wrapper>
      <CodeCard>
        <SyntaxHighlighter
          language="javascript"
          style={{ ...vscDarkPlus, overflow: "hidden" }}
        >
          {code.slice(0, count)}
        </SyntaxHighlighter>
      </CodeCard>
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  perspective: 1200,
  display: "flex",
  justifyContent: "center",
  marginLeft: "30px",
  [theme.breakpoints.down("sm")]: {
    perspective: 800,
  },
}));

const CodeCard = styled("div")(({ theme }) => ({
  background: "#1e1e1e",
  padding: "24px 28px",
  borderRadius: "16px",

  transform: "rotateX(12deg) rotateY(20deg)",
  transformStyle: "preserve-3d",

  boxShadow: styleConstant.boxShadow.main,

  fontSize: "14px",
  lineHeight: 1.6,
  width: "550px",
  height: "500px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: 250,
    height: 300,
    fontSize: 5,
    padding: 0,
    "& .language-javascript": {
      fontSize: "6px!important",
    },
    "& pre": {
      overflow: "hidden!important",
      lineHeight: "1!important",
    },
  },
}));
