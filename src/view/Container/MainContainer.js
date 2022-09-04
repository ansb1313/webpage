import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Visual from "../components/Main/Visual";
import Section1 from "../components/Main/Section1";
import Section2 from "../components/Main/Section2";
import Footer from "../components/Main/Footer";

const MainContainer = (props) => {

  return(
    <Container>
      <Header />
      <Visual/>
      <Section1/>
      <Section2/>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
`

export default MainContainer