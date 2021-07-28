import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getClassList } from '../../services/api-calls'

const ClassList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const classData = await getClassList();
      setResults(classData.results);
    })();
  });

  return (
    <>
      <h1>Class List</h1>
      <div className="icon-container">
        {results.map((classTitle) => (
          <div key={ classTitle.index }>
            <Link
              to={{
                pathname: `/class`,
                state: { classTitle },
              }}
            >
              <div id="classDiv">
                <img 
                  style={{ width: "100px", height: "100px" }}
                  src={`/images/${classTitle.name}.svg`} 
                  alt="class-logo"
                />
                {classTitle.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassList;