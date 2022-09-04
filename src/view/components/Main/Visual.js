import React, {useState} from "react";
import BuildImg from '../../../images/building.jpg'
import styled from "styled-components";
import {
    BsMinecartLoaded,
    BsTruck,
    HiOutlineTruck,
    IoAirplaneOutline, IoCartOutline,
    IoTrainOutline,
    RiShip2Line, RiShipLine, TbShip
} from "react-icons/all";

const arr = [
    {
        icon:<IoAirplaneOutline />,
        title:"Airline Lorem Ipsum",
        contents:"United Airline Ual"
    },
    {
        icon:<IoCartOutline />,
        title:"Lorem Ipsum Title",
        contents:"Lorem Airline Ual"
    },
    {
        icon:<IoTrainOutline />,
        title:"Title Lorem Ipsum",
        contents:"Ipsum Airline Ual"
    },
    {
        icon:<RiShipLine />,
        title:"Lorem Ipsum",
        contents:"sit emit Airline Ual"
    },
    {
        icon:<BsTruck />,
        title:"Dolor Lorem Ipsum",
        contents:"United Lorem Ipsum"
    }
]

const Visual = (props) => {

  const [status, setStatus] = useState(false)

  return(
    <Container>
      <img src={BuildImg} />
      <GradientWrap>
          <Block/>
          <Gradient/>
      </GradientWrap>

      <Inner>
      <Items>
        <h2>LOREM ANYTHING</h2>
        <h1>AROUND THE WORLD</h1>
        <span>LOREM</span>
      </Items>
      </Inner>

      <VisualMenu>
          {
              arr.map((item) => {
                  return(
                      <VisualMenuItem>
                          {item.icon}
                          <span>{item.title}</span>
                          <p>{item.contents}</p>
                          <div className={"icon_border"}></div>
                      </VisualMenuItem>
                  )
              })
          }

      </VisualMenu>
    </Container>
  )
}

const Container = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #ddd;
  position: relative;

  img{
    //filter: ;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const GradientWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
`
const Block = styled.div`
  background: rgba(93, 130, 168, 0.45);
  width: 120%;
  height: 140%;
  filter: brightness(1.2);
  //transform: scale(1.5);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

`
const Inner = styled.div`
  width: 1100px;  
  border: solid 1px #111;
`
const Items = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  left: 50%;
  top: 46%;

  h2 {
    color: rgba(255, 255, 255, 0.71);
    font-size: 20px;
    margin-bottom: 5px;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 14px;
  }

  span {
    font-weight: bold;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    width: 140px;
    height: 38px;
    letter-spacing: 1px;
    background: #fff;
    color: rgb(48, 110, 240);
  }
`

const Gradient = styled.div`
  position: absolute;
  width: 145%;
  height: 115%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const VisualMenu = styled.div`
  position: absolute;
  width: 1060px;
  display: flex;
  align-items: center;
  bottom: 0;
  background: #fff;
  left: 50%;
  transform: translate(-50%,50%);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.20);
  z-index: 999;

`
const VisualMenuItem = styled.div`
  cursor: pointer;
  width: calc(1060px / 5);
  min-height: 190px;
  max-height: 190px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: rgb(73, 98, 169);
  padding-bottom: 10px;
  position: relative;
  

  &:last-child {
    .icon_border {
      display: none;
    }
  }

  z-index: 8;

  &:hover {
    transition: transform 0.3s;

    z-index: 9;
    background: rgb(64, 115, 228);
    transform: scale(1.1);
    color: #fff;

    svg {
      display: block;

      path {
        stroke: #fff;
        color: #fff;
      }
    }
  }

  .icon_border {
    z-index: 9;
    position: absolute;
    right: -1.5px;
    width: 3px;
    background: rgba(145, 145, 145, 0.2);
    height: 50px;
  }

  span {
    font-weight: bold;
    display: flex;
    margin-top: 15px;
    margin-bottom: 6px;
    font-size: 15px;
  }

  p {
    font-size: 14px;
    opacity: 0.7;
  }

  &:nth-child(1) {
    svg {
      display: block;
      transform: rotate(-45deg);

      path {
        stroke-width: 24px;
      }
    }
  }

  svg {
    display: block;
    width: 60px;
    height: 60px;

    circle {
      color: rgba(145, 145, 145, 0.4);
    }

    path {
      color: rgba(145, 145, 145, 0.4);
      stroke: rgba(145, 145, 145, 0.4);
      width: 1px;
    }
  }
`

export default Visual