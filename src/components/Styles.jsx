import styled from "@emotion/styled";

export const Header = styled.h3`
  font-family: sans-serif;
  margin: 4rem 0 10px;
  color: white;
`

export const Section = styled.div`
  font-family: sans-serif;
  width: 100%;
  padding-left: 25px;
  padding-bottom: 5px;
  box-sizing: border-box;
  position: relative;
  
  &::after {
    content: "";
    height: calc(100% - 50px);
    width: 1px;
    background: #e7e7e7;
    position: absolute;
    left: 2px;
    top: 0;
    transform: scaleX(1) translateZ(0);
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.8;
  }
  
  &::before {
    content: "";
    height: 50px;
    width: 1px;
    position: absolute;
    left: 2px;
    bottom: 0;
    background-image: linear-gradient(to bottom, #e7e7e7 20%, rgba(255, 255, 255, 0) 0%);
    background-position: left;
    background-size: 2px 8px;
    background-repeat: repeat-y;
    transform: scaleX(1) translateZ(0);
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.8;
  }
  
  &:hover {
    &::after {
      transform: scaleX(1.5) translateZ(0);
      opacity: 1;
    }
    
    &::before {
       transform: scaleX(1.75) translateZ(0);
       opacity: 1;
    }
  }
`

export const Link = styled.a`
  color: #f3f3f3;
  opacity: 0.8;
  transition: opacity 0.15s ease;
  
  &:hover{
    opacity: 1;
  }
`

export const Source = styled.p`
  font-style: italic;
  margin: 5px 0;
  font-size: 0.9rem;
  color: white;
`

export const Image = styled.img`
  object-fit: contain;
  //max-height: 200px;
  margin: 10px auto;
  width: 100%
`
