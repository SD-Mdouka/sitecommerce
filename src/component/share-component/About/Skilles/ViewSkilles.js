import {
  VolumProgress,
  Progress,
  TitelProgress,
  BarProgess,
  Pourcentage,
} from "../../../Style/AboutStyle";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Listskilles = () => {
  const [skilles, setSkilles] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setSkilles(res.data.profile);
    });
  }, []);
  const MySkilles = skilles.map((skillesItme) => {
    return (
      <BarProgess key={skillesItme.id}>
        <TitelProgress>{skillesItme.title}</TitelProgress>
        <Pourcentage>{skillesItme.pourcentage}</Pourcentage>
        <Progress>
          <VolumProgress porc={skillesItme.pourcentage}></VolumProgress>
        </Progress>
      </BarProgess>
    );
  });
  return MySkilles;
};
export default Listskilles;
