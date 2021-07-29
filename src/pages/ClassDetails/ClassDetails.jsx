import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { getDetails } from "../../services/api-calls";

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({});
  const location = useLocation()

  useEffect(() => {
    (async () => {
      const details = await getDetails(location.state.classTitle.url);
      setClassDetails(details);
    })();
  }, [location]);

  return (
    <div>
        {classDetails.name ?
        <>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <h2>{classDetails.name}</h2>
          <div>Hit die: d{classDetails.hit_die}</div>
          <h3>Proficiencies:</h3>
          {classDetails.proficiencies.map((proficiency) => (
            <div key={proficiency.index}>{proficiency.name}</div>
          ))}
        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
  );
};

export default ClassDetails;