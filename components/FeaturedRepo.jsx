import React from "react";

export default function FeaturedRepo(props) {
  const languagesJsx = [];
  let i = 1;
  for (const lang in props.languages) {
    languagesJsx.push(
      <li key={i}>
        <span className="repo--langs_dot"></span>
        <span className="repo--lang_text">{lang}</span>
        <span className="repo--lang_percent">{props.languages[lang]}</span>
      </li>
    );
    i++;
  }

  return (
    <div className="featured-repo">
      <h1></h1>
      <h3>{props.name}</h3>
      <div className="repo--details">
        <span>{props.pushed_at}</span> |{" "}
        <ul className="repo--langs_list">{languagesJsx}</ul>
      </div>
      <p>{props.description}</p>
      <p>{props.html_url}</p>
    </div>
  );
}
