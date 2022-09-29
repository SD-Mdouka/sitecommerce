import {
  ListProfile,
  ItemProfile,
  ItemSpan,
  ItemSpanweb,
  Image,
  Formation,
  PareFeu,
  Stratege,
  JeunesMorocco,
  ImageProfil,
} from "../../../Style/AboutStyle";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ListProf = () => {
  const [profil, setProfile] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setProfile(res.data.myprofile);
    });
  }, []);
  const MyProfile = profil.map((profilItme) => {
    return (
      <ListProfile key={profilItme.id}>
        <Image>
          <ItemProfile>
            <ImageProfil src={profilItme.image} alt="" />
          </ItemProfile>
          <ItemSpan>
            Website :{" "}
            <ItemSpanweb>
              <a href={profilItme.website}>{profilItme.name}</a>
            </ItemSpanweb>
          </ItemSpan>
        </Image>
        <Formation>
          <ItemProfile>
            <ItemSpan>Formation</ItemSpan>
            {profilItme.Formation}
          </ItemProfile>
        </Formation>
        <PareFeu>
          <ItemProfile>
            <ItemSpan>Pare-feu</ItemSpan>
            {profilItme.PareFeu}
          </ItemProfile>
        </PareFeu>
        <Stratege>
          <ItemProfile>
            <ItemSpan>Stratège</ItemSpan>
            {profilItme.Stratege}
          </ItemProfile>
        </Stratege>
        <JeunesMorocco>
          <ItemProfile>
            <ItemSpan>«#Jeunes Morocco»</ItemSpan>
            {profilItme.JeunesMorocco}
          </ItemProfile>
        </JeunesMorocco>
      </ListProfile>
    );
  });
  return MyProfile;
};
export default ListProf;
