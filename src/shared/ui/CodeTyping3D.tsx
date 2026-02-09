import { useEffect, useState } from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
        <Description>{about.main}</Description>
        <Description>{about.outro}</Description>
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
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {code.slice(0, count)}
        </SyntaxHighlighter>
      </CodeCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  perspective: 1200px;
  display: flex;
  justify-content: center;
  margin-left: 30px;
`;

const CodeCard = styled.div`
  background: #1e1e1e;
  padding: 24px 28px;
  border-radius: 16px;

  transform: rotateX(12deg) rotateY(20deg);
  transform-style: preserve-3d;

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);

  font-size: 14px;
  line-height: 1.6;
  width: 550px;
  height: 500px;
  overflow: hidden;
`;
