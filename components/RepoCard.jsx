import React from "react";
import RepoLanguages from "./RepoLanguages";

export default function RepoCard(repo) {
  const colors = [
    "--bright-red",
    "--bright-purple",
    "--bright-blue",
    "--lighter-blue",
    "--light-green",
    "--neon-yellow",
    "--rusty-orange",
  ];

  return (
    <div
      className={repo.styles.repoCard}
      style={{
        borderColor: `var(${colors[repo.borderColorIndex]})`,
      }}
      key={repo.id}
    >
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
      <p>{repo.description}</p>
      <div className="repo--langs_list">
        <RepoLanguages languages={repo.languages} colors={colors} />
      </div>
    </div>
  );
}
