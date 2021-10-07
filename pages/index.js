import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import userData from "../constants/data";
import LatestCode from "../components/LatestCode";
import getLatestRepos from "../lib/getLatestRepos";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Kevin Chao - Front-End, Back-End, Full Stack"
      description="This is Kevin Chao's Developer portfolio, showing everyone what I can do for everyone"
    >
      <Hero />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async (ctx) => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
