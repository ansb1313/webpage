import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {RiShieldCrossLine} from "react-icons/all";

const arr = [
  {
    icon:<RiShieldCrossLine/>,
    title:"Lorem Ipsum",
    contents:"Lorem ipsum dolor sit amet, consectetur  elit. Aperiam consequatur debitis."
  },
  {
    icon:<RiShieldCrossLine/>,
    title:"Lorem",
    contents:"Lorem ipsum dolor sit amet, consectetur  elit. Aperiam debitis."
  },
  {
    icon:<RiShieldCrossLine/>,
    title:"Lorem Ipsum Title",
    contents:"Lorem ipsum dolor sit amet, consectetur  elit. Aperiam cumque debitis."
  },
  {
    icon:<RiShieldCrossLine/>,
    title:"Title Lorem",
    contents:"Lorem ipsum dolor sit amet, consectetur  elit. Aperiam consequatur cumque debitis."
  },
]

const Section2 = (props) => {

  const [con, setCon] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',function (e){
      const val = window.scrollY
      console.log(`val`, val);
      if(val >= 1600){
        setCon(true)
      }else{
        setCon(false)
      }
    })
  },[])

  return(
    <Container>
      <Inner>
        <Title
            className={con ? "activeTxt" : ""}
        >
          <p>WE HELP WITH LOREM</p>

          <h2>Building<br/>better<br/>solutions</h2>
          <span>
          Get Started
        </span>
        </Title>
        <Contents
            className={con ? "activeCon" : ""}
        >
          {
            arr.map((item)=>{
              return(
                  <ContentsItem >
                    {item.icon}
                    <h1>{item.title}</h1>
                    <p>{item.contents}</p>
                  </ContentsItem>
              )
            })
          }

        </Contents>
      </Inner>

    </Container>
  )
}

const Container = styled.div`

  width: 100%;
  background: rgb(53, 48, 98);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Inner = styled.div`
  width: 1100px;  
 
  padding-top: 140px;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  width: 30%;
  transition: all 0.6s;
  transform: translateY(180px);
  opacity: 0;
  &.activeTxt{
    transform: none;
    opacity: 1;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    letter-spacing: 2px;
  }

  h2 {
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 54px;
    line-height: 1.2;
    letter-spacing: 1px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 40px;
    color: rgba(255, 255, 255, 0.8);
    border: solid 2px rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    cursor: pointer;
  }
`
const Contents = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all 0.6s;
  transform: translateY(80px);
  opacity: 0;
  &.activeCon{
    transform: none;
    opacity: 1;
  }
`
const ContentsItem = styled.div`
  width: 48%;
  margin-bottom: 28px;
  border-radius: 4px;
  height: 200px;
  color: #fff;
  padding: 20px;
  transition: all 0.5s;
  background: rgb(42,36,81);
  
  svg{
    width: 60px;
    height: 60px;
    opacity: 0.7;
  }
  h1{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    opacity: 0.9;
  }
  p{
    opacity: 0.6;
  }
`

export default Section2