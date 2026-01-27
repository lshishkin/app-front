import styled from "styled-components";
import { Item } from "./item";
import { HomePage } from "../../pages/home";
import { Blog } from "../../pages/blog";
import { AboutUs } from "../../pages/aboutUs";
import { Contacts } from "../../pages/contacts";
import { COLORS } from "../../lib/constant";

export const Components = {
  home: <HomePage />,
  blog: <Blog />,
  about_us: <AboutUs />,
  contacts: <Contacts />,
};

export const Palitra = () => {
  return (
    <Container>
      {COLORS.map(({ color, id }) => (
        <Item background={color} key={id} id={id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
`;
