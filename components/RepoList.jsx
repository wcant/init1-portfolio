import React from "react";
import styles from "../styles/RepoList.module.css";

export default function RepoList({ repos }) {
  // html_url
  // pushed_at
  // description
  // name

  const featuredList = [
    "init1-portfolio",
    "Deodorant",
    "DSV-plot",
    "dice-game",
    "scrimba-projects",
  ];

  // Generate the Repo Cards
  const repoCards = [];
  for (const repo of repos) {
    // Only create cards from the featuredList
    if (featuredList.includes(repo.name)) {
      // Generate list items for languages details
      const languages = [];
      for (const lang in repo.languages) {
        languages.push(
          <li>
            <span className="repo--lang_percent">{repo.languages[lang]}</span>
            <span className="repo--lang_text">{lang}</span>
          </li>
        );
      }

      repoCards.push(
        <div className={styles.repoCard} key={repo.id}>
          <h1></h1>
          <h3>
            <a href={repo.html_url}>{repo.name}</a>
          </h3>
          <div className="repo--details">
            <span>{repo.pushed_at}</span> |{" "}
            <ul className="repo--langs_list">{languages}</ul>
          </div>
          <p>{repo.description}</p>
        </div>
      );
    }
  }

  return <div className={styles.repoContainer}>{repoCards}</div>;
}
