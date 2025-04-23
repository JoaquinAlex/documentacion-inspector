import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aprende a Usar el Inspector',
    Svg: require('@site/static/img/lupa.svg').default,
    description: (
      <>
        Conoce cómo utilizar el inspector de elementos del navegador para analizar HTML, CSS y comportamiento de tus aplicaciones web.
      </>
    ),
  },
  {
    title: 'Analiza y Depura Código',
    Svg: require('@site/static/img/depuracion.svg').default,
    description: (
      <>
        Descubre cómo depurar errores, editar estilos en tiempo real y entender la estructura de una página desde el navegador.
      </>
    ),
  },
  {
    title: 'Optimiza tu Desarrollo',
    Svg: require('@site/static/img/optimiza.svg').default,
    description: (
      <>
        El inspector de elementos es una herramienta clave para desarrolladores front-end. Mejora tu flujo de trabajo y desarrolla con confianza.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
