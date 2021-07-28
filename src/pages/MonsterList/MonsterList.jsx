import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMonsterList } from "../../services/api-calls";

const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {
    (async () => {
      const monsterData = await getMonsterList();
      setMonsterList(monsterData.results);
    })()
  })

  return (
    <>
      <h3>Monster List (OMG SCARY)</h3>
      {monsterList.map((monster) => (
        <div key={monster.index}>
          <Link
            to={{
                pathname: `/monster`,
                state: { monster },
            }}
          >
            {monster.name}
          </Link><br></br>
        </div>
      ))}
    </>
  );
};

export default MonsterList;