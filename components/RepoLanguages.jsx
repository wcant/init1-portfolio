import React from "react";

export default function RepoLanguages({ languages, colors }) {
  let markerColor = 6;

  return (
    <ul>
      {Object.keys(languages).map((lang, i) => {
        if (markerColor < 0) markerColor = 6;
        return (
          <li key={i}>
            <span style={{ color: `var(${colors[markerColor--]})` }}>►</span>
            <span className="repo--lang_percent">{languages[lang]}</span>
            <span className="repo--lang_text">{lang}</span>
          </li>
        );
      })}
    </ul>
  );
}
