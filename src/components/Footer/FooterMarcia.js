import React from "react";
import styled from "styled-components";
import instragram from "../img/instagram.svg";
import logo from "../img/logo.png";

const DivFooter = styled.div`
  background-color: ;
  height: ;
  padding: ;
  @media (min-device-width:320px ) and (max-device-width:420px) {
    flex-direction: column;
    padding: ;
    height: ;
  }
`;
const DivImg = styled.div`
  display: flex;
  align-items: center;
  padding: ;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 0;
  }
`;

const DivText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 0 0px 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
    font-size: 0px;
  }
`;

const Img = styled.img`
  width: 5%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100%;
  }
`;

const ImgLogo = styled.img`
  width: 5%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100%;
  }
`;

const SectionMedias = styled.section`
  display: flex;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 2em 0 0 2em;
  }
`;

const SectionLogo = styled.section`
  display: flex;
  justify-content: flex-end;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    justify-content: center;
  }
`;

const P = styled.p`
 font-weight: bold;
`
const Copyright = styled.p`
  text-align: center;
  font-weight: bold;
  padding-top: 0px;
`
const A = styled.a`
  text-decoration: none;
  color: ;
  &:hover{
    text-decoration: none;
    color: ;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <DivFooter>
        <DivImg>
          <SectionMedias>
            <a href="https://www.instagram.com/" target="_blank">
              <Img src=" " alt="Logotipo instagram" />
            </a>
            <a href="https://facebook.com/" target="_blank">
              <Img
                src="https://.svg"
                alt="Logotipo Facebook"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Img
                src="https://.svg"
                alt="Logotipo Twitter"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <Img
                src="https://.svg"
                alt="Logotipo Linkedin"
              />
            </a>
          </SectionMedias>
          <SectionLogo>
            <ImgLogo src={logo} />
          </SectionLogo>
        </DivImg>

        <DivText>
          <section>
            <P>Atendimento: </P>
            <p>atendimento@futurecar.com </p>
            
            <P>Sugestões: </P>
            <p>sugestoes@futurecar.com</p>
          </section>

          <section>
            <P>Future car:</P>
              <p>
                <A href="https://github.com" target="_blank">Name1</A><br /> <A href="https://github.com" target="_blank">Name1</A><br /> <A href="https://github.com" target="_blank">Name1</A>
              <br /> <A href="https://github.com" target="_blank">Name2</A> <br /> <A href="https://github.com" target="_blank">Name2</A>
              </p>
          </section>
        </DivText>
        <Copyright>Copyright © Future car2021</Copyright>
      </DivFooter>
    );
  }
}

export default Footer;