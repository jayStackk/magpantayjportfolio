import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-color: #9dbf9e;

  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: flex-start;
  // text-align: left;
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: #f6f6f6;
    margin-bottom: 1rem;
    text-align: center;
    
    // margin-left : 7rem;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
    text-align: center;
  }

  @media screen and (max-width: 390px) {
    
    margin-bottom: 2rem;
    margin-left : 7rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  // animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;
  margin-bottom: 6rem;

  @media screen and (max-width: 860px) {
    justify-content: center;


    img {
      height: 35px;
      width: 35px;
      margin-left: 6px;
    }


    h1 {

      martin-top: 6px;
    }
  }

`;
