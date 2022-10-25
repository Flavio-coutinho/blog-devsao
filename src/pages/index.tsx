import React from "react";
import Head from '../../node_modules/next/head';
import styles from '../styles/home.module.scss';

import Image from "../../node_modules/next/image";
import techImage from '../../public/images/techs.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.section}>
            <h2>Comunidade de Desenvolvedores Angolanos</h2>
            <span>DevsAO é uma comunidade que cobre muitas áreas de programação e desenvolvimento, desde iniciantes a séniores em diversas áreas. É uma comunidade em rápida evolução🚀</span>
            <a>
              <button>
                Fazer parte
              </button>
            </a>
          </section>
          <img src="/images/banner-conteudos.png" alt="Co-working" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
            <section>
              <h3>Comunidade de Desenvolvedores Angolanos</h3>
              <span>DevsAO é uma comunidade que cobre muitas áreas de programação e desenvolvimento, desde iniciantes a séniores em diversas áreas. É uma comunidade em rápida evolução</span>
            </section>

            <img src="/images/financasApp.png" alt="Co-working" />
        </div>

        <hr className={styles.divisor} />
        
        <div className={styles.sectionContent}>
        <img src="/images/webDev.png" alt="Co-working" />

            <section>
              <h3>Comunidade de Desenvolvedores Angolanos</h3>
              <span>DevsAO é uma comunidade que cobre muitas áreas de programação e desenvolvimento, desde iniciantes a séniores em diversas áreas. É uma comunidade em rápida evolução</span>
            </section>

        </div>

        <div className={styles.footer}>
            <Image src={techImage} alt="Tecnologias"/>
            <h3>Comunidade de Desenvolvedores Angolanos</h3>
            <span>DevsAO é uma comunidade que cobre muitas áreas de programação e desenvolvimento, desde iniciantes a séniores em diversas áreas. É uma comunidade em rápida evolução</span>

        </div>
      </main>
    </>
  )
}
