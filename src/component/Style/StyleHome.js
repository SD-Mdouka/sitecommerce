import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(to top, #200016, transparent);
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const ImgMoon = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  mix-blend-mode: screen;
  transform: translateY(80px);
  -webkit-transform: translateY(80px);
  -moz-transform: translateY(80px);
  -ms-transform: translateY(80px);
  -o-transform: translateY(80px);
`;

export const Titel = styled.h2`
  color: #fff;
  font-size: 25px;
  text-transform: uppercase;
  transform: translateY(-140px);
  -webkit-transform: translateY(-140px);
  -moz-transform: translateY(-140px);
  -ms-transform: translateY(-140px);
  -o-transform: translateY(-140px);
`;

export const LayoutContent = styled.div`
  color: #fff;
  padding: 30px;
  margin-top: 10px;
`;

export const TextContent = styled.p`
  margin: 20px;
  font-size: 25px;
`;

export const TitelContent = styled.h2`
  margin: 20px;
  padding: 15px;
  font-size: 30px;
  color: #333;
  border-radius: 20px;
  background: linear-gradient(#5a819c, #541d86);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
`;
