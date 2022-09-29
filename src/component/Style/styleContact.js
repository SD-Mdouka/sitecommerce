import styled from "styled-components";
/*
    ===============================
            Socail Styles
    ===============================
*/

export const SocialMedi = styled.div`
  height: auto;
  overflow: hidden;
`;
export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background: #3b5998;
  background: ${(props) => (props.item === 1 ? "#4267b2" : "")};
  background: ${(props) => (props.item === 2 ? "#1da1f2" : "")};
  background: ${(props) => (props.item === 3 ? "rgb(239, 46, 65)" : "")};
  background: ${(props) => (props.item === 4 ? "#25d366" : "")};
  background: ${(props) => (props.item === 5 ? "#f56040" : "")};
  background: ${(props) => (props.item === 6 ? "#000000" : "")};
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const Icon = styled.span`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
`;

export const TextInfo = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;

export const Info = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const Info2 = styled.span`
  font-weight: normal;
`;
