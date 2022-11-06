import React, { useEffect } from "react";
import "./Meaning.css";

const Meanings = ({ meanings, word, LightTheme, phonetics }) => {

  console.log("sample", word, meanings, phonetics)

  useEffect(() => {

  }, [phonetics])

  return (
    <div className="meanings">
      {phonetics && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={phonetics}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.toString()}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Meanings;