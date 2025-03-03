import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="opening_content">
              My name is Patrick Stenzel and I want to share some insights about me as a person and as a professional.<br/>
              Being a SoftwareDev for more than 20 years now and a Professional for more than 15 years I can share tons of stories and experiences.<br/>
              Covering all areas from Software developing over technical project lead up to being an architect of complex environments<p/>
              Not only the tools I worked with are a broad bouquet, also the direct hands on and exchange with people I consider as experts in their field let me grow and evolve to the person I'm now.<br/>

              With the never ending support of my family and their ongoing motivation I'm reaching new heights and keep on learning things every single day.<br/>

              So if this slight intro raised your curiosity, feel free to check my CV and get some details about my career.<p/>
          </div>
          <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Curriculum Vitae
              </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        <div className={styles.footer}>
            The page is created with Docusaurus and structured via Diátaxis.
        </div>
    </Layout>
  );
}
