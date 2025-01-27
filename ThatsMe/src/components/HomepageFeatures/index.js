import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Tutorials',
        link: 'category/Tutorials',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
                <>
                    Get some details about me, who am I and my recent career.
                </>
        ),
    },
    {
        title: 'How-To',
        link: 'category/HowTo',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
          <>
            Get some details about me, who am I and my recent career.
          </>
        ),
    },
    {
        title: 'Reference',
        link: 'category/Reference',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
                <>
                    Get some details about me, who am I and my recent career.
                </>
        ),
    },
    {
        title: 'Explanation',
        link: 'category/Explanation',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
                <>
                    Get some details about me, who am I and my recent career.
                </>
        ),
    },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, link, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <a href={link}>
          <div className="text--center">
              <Svg className={styles.featureSvg} role="img"/>
          </div>
      </a>
      <div className="text--center padding-horiz--md">
          <a href={link}>
              <Heading as="h3">{title}</Heading>
          </a>
          <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
