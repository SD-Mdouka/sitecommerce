import React from "react";
import {
  Profil,
  ProfiletitleSpan,
  ProfileTitle,
  SkillsDesc,
} from "../../../Style/AboutStyle";
import Listskilles from "./ViewSkilles";

const Skilles = () => {
  return (
    <>
      {/* Start skille in profile */}
      <Profil>
        <ProfileTitle>
          <ProfiletitleSpan>
            PUBLICATIONS CONJONCTURE ENTREPRISE
          </ProfiletitleSpan>
        </ProfileTitle>
        <SkillsDesc>
          Résultats des enquêtes trimestrielles de conjoncture auprès des
          entreprises, 3ème trimestre 2022 26/09/2022 La présente note relate
          les principales appréciations des chefs d’entreprises telles qu’elles
          ressortent des enquêtes de conjoncture réalisées par le HCP au titre
          du 3èmetrimestre 2022 auprès des entreprises opérant dans les secteurs
          des industries manufacturières, de l’extraction, de l’énergie, de
          l’environnement ainsi que dans celui de la construction. Ces
          appréciations portent sur l’évolution de l’activité au cours du 2ème
          trimestre 2022 et les anticipations pour le 3ème trimestre 2022.
        </SkillsDesc>
        <Listskilles />
      </Profil>
      {/* End skille in profile */}
    </>
  );
};

export default Skilles;
