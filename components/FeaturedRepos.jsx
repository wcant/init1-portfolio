import React from "react";
import styles from "../styles/FeaturedRepos.module.css";
import RepoCard from "./RepoCard";

export default function FeaturedRepos({ repos }) {
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

  let borderColorIndex = 0;
  function handleRepoCard(repo) {
    // start repeating the 7 colors once all have been used
    if (borderColorIndex > 6) borderColorIndex = 0;

    // only show repos from the featuredList
    if (featuredList.includes(repo.name)) {
      return (
        <RepoCard
          key={repo.id}
          id={repo.id}
          name={repo.name}
          html_url={repo.html_url}
          description={repo.description}
          languages={repo.languages}
          styles={styles}
          borderColorIndex={borderColorIndex++}
        />
      );
    }
  }

  return (
    <div className={styles.repoContainer}>{repos.map(handleRepoCard)}</div>
  );
}
