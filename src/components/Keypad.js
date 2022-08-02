import React, { useEffect, useState } from "react";
import db from "../data/db.json";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(db.letters);
    // fetch("http://localhost:3001/letters")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setLetters(json);
    //   });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
