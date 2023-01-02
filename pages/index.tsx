import styles from "../styles/modules/Home.module.scss";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import EventBlock from "../components/EventBlock/EventBlock";
import IntroductionBlock from "../components/IntroductionBlock/IntroductionBlock";
import ProfileMain from "../components/ProfileMain/ProfileMain";
import SearchBar from "../components/SearchBar/SearchBar";
import YourPagesBlock from "../components/YourPagesBlock/YourPagesBlock";
import NewPostBlock from "../components/NewPostBlock/NewPostBlock";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>iConnect</title>
        <meta name="description" content="Connecting people!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.middleSection}>
          <div className={styles.search}>
            <SearchBar />
          </div>
          <section>
            <ProfileMain />
            <div className={styles.mainGrid}>
              <div className={styles.block1}>
                <IntroductionBlock />
                <EventBlock />
                <YourPagesBlock />
              </div>
              <div className={styles.block2}>
                <NewPostBlock />
                <Timeline />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
