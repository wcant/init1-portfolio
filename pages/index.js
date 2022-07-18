import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Intro from "../components/Intro";
import RepoList from "../components/RepoList";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Intro />
      <RepoList repos={data} />
    </div>
  );
}

export async function getStaticProps() {
  // ** this entire block of code is temporaryish
  // i'm using mock data to avoid making tons of API calls during dev

  // const res = await fetch("https://api.github.com/users/wcant/repos");
  // const repos = await res.json();

  const res = await fetch("http://localhost:3000/mock-data.json");
  const repos = await res.json();

  // Returning data as props
  // Saving only the info I want to the data array
  // id, name, html_url, description, pushed_at, languages_url
  const data = [];

  // Have to fetch the languages from the language_url
  // add other info to data since I have to loop here anyway

  // temp data
  const languages = {
    TypeScript: 909,
    JavaScript: 772,
    HTML: 200,
    CSS: 150,
  };

  // calculate language percentages
  let sum = 0;
  for (const lang in languages) {
    sum += languages[lang];
  }

  const langPercentages = {};
  for (const lang in languages) {
    const calc = (languages[lang] / sum) * 100;
    langPercentages[lang] = `${calc.toFixed(1)}%`;
  }

  for (const repo of repos) {
    // const res = await fetch(repo.languages_url);
    // const languages = await res.json();
    data.push({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      pushed_at: repo.pushed_at,
      languages: langPercentages,
    });
  }

  return {
    props: {
      data,
    },
  };
}
