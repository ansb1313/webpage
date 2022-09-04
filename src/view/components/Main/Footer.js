import React from "react";
import styled from "styled-components";

const Footer = (props) => {

  return(
    <Container>
      Footer Component
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
  height: 200px;
  background: #222;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Footer