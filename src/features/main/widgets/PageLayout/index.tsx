import { useAtomValue } from "jotai";
import styled from "styled-components";
import { pageAtom } from "../../jotai";

export const PageLayout = ({ title, children, id }) => {
  const page = useAtomValue(pageAtom);
  return (
    <div style={{ position: "relative", height: "calc(100% - 200px)" }}>
      <Title>{title}</Title>
      <div
        style={{
          position: "absolute",
          left: 0,
          height: "100%",
          justifyContent: "flex-end",
          marginTop: 200,
        }}
      >
        {page === id ? children : null}
      </div>
    </div>
  );
};

const Title = styled.p`
  position: absolute;
  margin-top: 12px;
  margin-left: 12px;
  writing-mode: vertical-rl;
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`;
