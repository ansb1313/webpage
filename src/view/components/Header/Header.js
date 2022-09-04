import React, {useEffect, useState} from "react";
import styled from "styled-components";

const menuArr = ["HOME", "COMPANY", ""]

const Header = (props) => {

    const [con, setCon] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',function (e){
            const val = window.scrollY
            console.log(`val`, val);
            if(val >= 130){
                setCon(true)
            }else{
                setCon(false)
            }
        })
    },[])

  return(
    <Container
        className={con ? "transformHeader" : ""}
    >
      <Inner

      >
      <Top
          className={con ? "transformHeaderTop" : ""}
      >
        <Logo>
            <Circle>
                <span>Logo</span>
            </Circle>
            <LogoText>
                <h4>Lorem Ipsum ans Ins</h4>
                <h3>lorem Ipsum Lorem dolor sit</h3>
                <p>amet, consectetur elit.</p>
                <h3>lorem Ipsum Lorem dolor sit</h3>
            </LogoText>
        </Logo>
        <TopCont>
            <TopContItem>
                <div className={"circle"}>

                </div>
                <div
                    className={"text"}
                >
                    <h4>Lorem Ipsum Dolor</h4>
                    <p>Lorem Ipsum</p>
                </div>
            </TopContItem>
            <TopContItem>
                <div className={"circle"}>

                </div>
                <div
                    className={"text"}
                >
                    <h4>Ipsum Dolor emit sit</h4>
                    <p>Lorem Ipsum</p>
                </div>
            </TopContItem>
        </TopCont>
      </Top>
      <Menu
          className={con ? "transformHeaderMenu" : ""}
      >

          <MenuItems>
              <BorderLine />
              <MenuText>
                  <div>
                      <span>HOME</span>
                      <p>Lorem ipsum</p>
                  </div>
              </MenuText>
              <div></div>
          </MenuItems>
          <MenuItems>


              <MenuText>
                  <div>
                      <span>ABOUT</span>
                      <p>Lorem ipsum</p>
                  </div>
              </MenuText>
              <div></div>
          </MenuItems>
          <MenuItems>
              <MenuText>
                  <div>
                      <span>CONTACT</span>
                      <p>Lorem ipsum</p>
                  </div>
              </MenuText>
              <div></div>
          </MenuItems>
          <MenuItems>
              <MenuText>
                  <div>
                      <span>INFO</span>
                      <p>Lorem ipsum</p>
                  </div>
              </MenuText>
              <div></div>
          </MenuItems>
          <MenuItems>
              <MenuText>
                  <div>
                      <span>PORTFOLIO</span>
                      <p>Lorem ipsum</p>
                  </div>
              </MenuText>
              <div></div>
          </MenuItems>
          <MenuItems>
              <MenuText>
                  <div>
                      <span>CLIENTS</span>
                      <p>Lorem ipsum</p>
                  </div>
              </MenuText>
              <div></div>
          </MenuItems>
          <MenuItems>
              <MenuText>
                  <div>
                      <span>NEWS</span>
                      <p>Lorem ipsum</p>
                  </div>
              </MenuText>
              <div></div>
          </MenuItems>
      </Menu>
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: center;

  &.transformHeader {
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.20);

  }

`
const Inner = styled.div`
  width: 1100px;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  transition: all 0.5s;
  &.transformHeaderTop{
    height: 0!important;
    padding: 5px;
    div{
      display: none;
    }
  }

`
const Logo = styled.div`
  display: flex;
  align-items: center;
`
const LogoText = styled.div`
  margin-left: 16px;
  color: rgba(255, 255, 255, 0.65);
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 16px;
    letter-spacing: 0.4px;
    color: rgba(255, 255, 255, 0.65);
  }

  h3 {
    font-size: 12px;
    letter-spacing: 0.2px;
  }

  p {
    
  }
`
const Circle = styled.div`
  border-left: solid 3px #fff;
  border-bottom: solid 2px #fff;
  opacity: 0.7;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: lighter;
  span{
    color: #fff;
    font-size: 32px;
  }
`
const TopCont = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  
`
const TopContItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  h4 {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }

  p {
    color: rgba(255, 255, 255, 0.2);
    font-size: 12px;
  }

  .circle {
    border: solid 2px #fff;
    margin-right: 10px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    opacity: 0.3;
  }
  .text{
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
const Menu = styled.div`
  display: flex;  
  justify-content: space-between;
  &.transformHeaderMenu{
    span{
      color: #222!important;

    }
    p{
      opacity: 0;
    }
  }
  
`
const MenuItems = styled.div`
  position: relative;
  border-top: solid 1.5px rgba(255, 255, 255, 0.30);
  height: 65px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: calc(100% / 7);
  align-items: center;
  color: #222!important;
  &:last-child {
    div{
      border-right: none!important;
    }
  }

  span {
    font-weight: bold;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.65);
    display: flex;
    margin-bottom: 4px;
  }

  p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.55);
  }
`
const MenuText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: solid 1px rgba(255, 255, 255, 0.20);
`
const BorderLine = styled.div`
  position: absolute;
  left: 0;
  top: -2.5px;
  display: flex;
  background: rgb(50,120,232);
  height: 4px;
  width: 100%;
`

export default Header