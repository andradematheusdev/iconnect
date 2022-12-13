import styles from "../styles/modules/Home.module.scss";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import EventBlock from "../components/EventBlock/EventBlock";
import IntroductionBlock from "../components/IntroductionBlock/IntroductionBlock";
import ProfileMain from "../components/ProfileMain/ProfileMain";
import SearchBar from "../components/SearchBar/SearchBar";
import YourPagesBlock from "../components/YourPagesBlock/YourPagesBlock";
import NewPostBlock from "../components/NewPostBlock/NewPostBlock";
import UserPostBlock from "../components/UserPostBlock/UserPostBlock";
import Stories from "../components/Stories/Stories";

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
            <ul className={styles.stories}>
              <Stories />
              <Stories />
              <Stories />
              <Stories />
            </ul>
            <div className={styles.mainGrid}>
              <div className={styles.block1}>
                <IntroductionBlock />
                <EventBlock />
                <YourPagesBlock />
              </div>
              <div className={styles.block2}>
                <NewPostBlock />
                <UserPostBlock />
                <UserPostBlock />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}
