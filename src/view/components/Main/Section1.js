import React, {useEffect, useState} from "react";
import section1_1 from '../../../images/section1_1.jpg'
import section1_2 from '../../../images/img12.jpg'

import styled from "styled-components";

const Section1 = (props) => {

  const [con1, setCon1] = useState(false);
  const [con1Text, setCon1Text] = useState(false);
  const [con2, setCon2] = useState(false);
  const [con2Text, setCon2Text] = useState(false);
  
  useEffect(()=>{
      window.addEventListener('scroll',function (e){
          const val = window.scrollY
          console.log(`val`, val);
          if(val > 450){
                
              setTimeout(()=>{
                  setCon1(true)
                  setTimeout(()=>{
                      setCon1Text(true)
                  },700)
              },100)
          }else{
              setTimeout(()=>{
                  setCon1(false)
                  setTimeout(()=>{
                      setCon1Text(false)
                  },700)
              },100)

          }

          if(val >= 890){
              setTimeout(()=>{
                  setCon2(true)
                  setTimeout(()=>{
                      setCon2Text(true)
                  },700)
              },0)
          }else{
              setTimeout(()=>{
                  setCon2(false)
                  setTimeout(()=>{
                      setCon2Text(false)
                  },700)
              },0)          }
      })
  },[])

  return(
    <Container>
      <Inner>
        <Contents1>
            <ImgBox>
                <div className="imgBoxBackground contents1">

                </div>
                <img src={section1_1} alt=""/>
                <div className={`whiteBlock contents1`}>
                    <div className={`whiteCont contents1 ${con1 ? "activeCon1": ""}`}>

                    </div>
                </div>
            </ImgBox>
            <TextArea
                className={`contents1 ${con1Text ? "activeCon1Text": ""}`}
            >
                <h1>Design Solutions <br/>to improve prudocts</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis distinctio doloribus earum, eius et illo inventore ipsa iste laboriosam
                    repellendus voluptas! Natus saepe vel voluptatum.</p>

                <span>Read More </span>
            </TextArea>
        </Contents1>

        <Contents2>

              <TextArea
                className={`contents2 ${con2Text ? "activeCon2Text": ""}`}

              >
                  <h1>Development Powerful Apps <br/>for your business</h1>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis distinctio doloribus earum, eius et illo inventore ipsa iste laboriosam
                      repellendus voluptas! Natus saepe vel voluptatum.</p>

                  <span
                      className={"contents2"}
                  >Read More </span>
              </TextArea>
            <ImgBox
                className={"contents2"}
            >
                <div className="imgBoxBackground contents2">

                </div>
                <img src={section1_1} alt=""/>
                <div className="whiteBlock contents2">
                    <div className={`whiteCont contents2 ${con2 ? "activeCon2": ""}`}>


                    </div>
                </div>
            </ImgBox>
        </Contents2>
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 270px;
  overflow-x: hidden;
`
const Inner = styled.div`
    width: 1100px;
  height: 1000px;
`
const Contents1 = styled.div`
  display: flex;  
  align-items : center;
  justify-content: space-between;
`
const Contents2 = styled.div`
  display: flex;
  align-items : center;
  justify-content: space-between;
  margin-top: 170px;
`

const TextArea = styled.div`
  width: 45%;
  opacity: 0;
  transform: translateY(42px);
  transition: all 0.5s;
  &.contents1{
    &.activeCon1Text{
      opacity: 1;
      transform: none;
    }
  }
  &.contents2{
    width: 50%;
    &.activeCon2Text{
      opacity: 1;
      transform: none;
    }
  }
  h1 {
    font-weight: 800;
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 10px;
    color: #222;
  }

  p {
    line-height: 1.2;
    color: #a4a4a4;
    width: 90%;
    font-size: 18px;
  }
  span{
    
    &.contents2{
      background: #fff;
      border: solid 1px rgb(48, 110, 240);
      color: rgb(48, 110, 240);
    }
    display: flex;
    margin-top: 20px;
    background: rgb(48, 110, 240);
    width: 140px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    height: 40px;
    color: #fff;
  }
`
const ImgBox = styled.div`
  width: 45%;
  height: 360px;
  position: relative;
  &.contents2{
    width: 40%;
  
  }
  .imgBoxBackground {

    position: absolute;
    width: 200%;
    height: 115%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    border-radius: 3px;

    &.contents1 {
      background: rgba(93, 132, 211, 0.95);
      right: -50px;
    }

    &.contents2 {
      background: rgba(76, 164, 166, 0.95);
      left: -50px;
    }
  }
  
  .whiteBlock {
    position: absolute;
    width: 200%;
    height: 115%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    border-radius: 3px;
    overflow: hidden;
    
    &.contents1 {
      right: -50px;
    }

    &.contents2 {
      left: -50px;
    }
  }

  .whiteCont {
    transition: left 0.9s, right 0.9s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    background: #fff;

    //left: 0;
    border-radius: 3px;

    &.contents1 {
      left: 0%;
    }
    
    &.activeCon1{
      left: 100%;
    }

    &.contents2 {
      right: 0%;

    }
    
    &.activeCon2{
      right: 100%;
    }
  }

  img {
    border-radius: 8px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default Section1