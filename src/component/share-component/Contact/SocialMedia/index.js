import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  SocialMedi,
  Social,
  Icon,
  TextInfo,
  Info,
  Info2,
} from "../../../Style/styleContact";

import Facbook from "./svgs/Facbook";
import Twitter from "./svgs/Twitter";
import Youtuob from "./svgs/Youtuob";
import Watsappe from "./svgs/Watsappe";
import Instagrame from "./svgs/Instagrame";
import Telegrame from "./svgs/Telegrame";
// funcion component

const SocialMedia = () => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);
  const ListSocial = social.map((itemSocail) => {
    return (
      <Social item={itemSocail.id} key={itemSocail.id}>
        <Icon className={itemSocail.icon}>
          {itemSocail.icon === "facebook" && <Facbook />}
          {itemSocail.icon === "twitter" && <Twitter />}
          {itemSocail.icon === "youtuob" && <Youtuob />}
          {itemSocail.icon === "Watsappe" && <Watsappe />}
          {itemSocail.icon === "Instagrame" && <Instagrame />}
          {itemSocail.icon === "Telegrame" && <Telegrame />}
        </Icon>
        <TextInfo>
          <Info>{itemSocail.title}</Info>
          <Info2>{itemSocail.body}</Info2>
        </TextInfo>
      </Social>
    );
  });
  return <SocialMedi>{ListSocial}</SocialMedi>;
};
export default SocialMedia;
