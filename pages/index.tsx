import { ConnectWallet } from "@web3sdks/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://web3sdks.com/">web3sdks</a>!
        </h1>

        <p className={styles.description}>
          Get started by configuring your desired network in{" "}
          <code className={styles.code}>pages/_app.tsx</code>, then modify the{" "}
          <code className={styles.code}>pages/index.tsx</code> file!
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.grid}>
          <a href="https://docs.web3sdks.com/" className={styles.card}>
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              web3sdks.
            </p>
          </a>

          <a href="https://web3sdks.com/dashboard" className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a
            href="https://docs.web3sdks.com/templates"
            className={styles.card}
          >
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing web3sdks features.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
