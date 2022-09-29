import styled from "styled-components";
/*
    ===============================
       Profile + Skills Styles
    ===============================
*/
/*Start Profile global*/

export const ProfileSkills = styled.div`
  color: #fff;
`;
/*Start profil */
/*Grid system */
export const Image = styled.span`
  grid-area: Image;
  text-align: center;
`;
export const ImageProfil = styled.img`
  border: #fff 4px solid;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  width: 100%;
`;
export const Formation = styled.span`
  grid-area: Formation;
`;

export const PareFeu = styled.span`
  grid-area: PareFeu;
`;

export const Stratege = styled.span`
  grid-area: Stratege;
`;

export const JeunesMorocco = styled.span`
  grid-area: JeunesMorocco;
`;

/*end*/
export const Profil = styled.div`
  float: none;
  color: #fff;
  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
`;

export const ListProfile = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-template-areas: "Image Formation PareFeu" "Image Stratege JeunesMorocco";
`;

export const ItemProfile = styled.li`
  margin-left: 20px;
  padding: 10px;
  color: #eee;
`;

export const ItemSpan = styled.span`
  display: block;
  font-weight: bold;
  font-size: 20px;
  background: linear-gradient(#5a819c, #541d86);
`;

export const ItemSpanweb = styled.span`
  font-weight: bold;
  color: #eb5424;
`;
export const ProfileTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 14px;
`;

export const ProfiletitleSpan = styled.span`
  font-weight: normal;
`;
/*End profile */
/*Start Skilles */
export const SkillsDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;
/*Skille in progress */
export const BarProgess = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const TitelProgress = styled.span`
  float: left;
`;

export const Pourcentage = styled.span`
  float: right;
  margin-right: 100px;
  color: #fff;
`;

export const Progress = styled.div`
  height: 14px;
  clear: both;
  background: linear-gradient(#5a819c, #541d86);
  position: relative;
  top: 10px;
`;

export const VolumProgress = styled.div`
  background: #eb5424;
  position: absolute;
  display: block;
  padding: 10px;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => (props.porc === "7,2%" ? "70%" : "")};
  width: ${(props) => (props.porc === "1,5%" ? "40%" : "")};
  width: ${(props) => (props.porc === "1.8%" ? "45%" : "")};
`;

export const ProgOwn = styled.span`
  width: 70%;
`;

export const ProgTow = styled.span`
  width: 90%;
`;
export const ProgThre = styled.span`
  width: 80%;
`;
