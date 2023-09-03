import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'High quality assets',
    description: (
      <>
        We are a leading provider of Roblox technology including building systems, access control and retail technologies. Our solutions help businesses to improve security, efficiency, and customer experience.
      </>
    ),
  },
  {
    title: 'Affordable prices',
    description: (
      <>
        All of our products are available at affordable prices, so that you can keep developing your games without breaking the bank.
      </>
    ),
  },
  {
    title: 'Easy to use',
    description: (
      <>
        Simply download, position and configure your products to start using them. We provide detailed documentation and support to help you get started and use our products to their full potential.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
