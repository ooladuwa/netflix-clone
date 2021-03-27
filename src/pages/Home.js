import React from "react";
import FaqsContainer from "../containers/Faqs";
import JumbotronContainer from "../containers/Jumbotron";
import FooterContainer from "../containers/Footer";
import { HeaderContainer } from "../containers/Header";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Hello</p>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
