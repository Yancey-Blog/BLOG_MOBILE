import * as React from 'react';
import styles from './Apps.module.scss';

class Apps extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    const client = window.localStorage.client;
    const typeSvg = {
      andriod: 'https://www-cdn.whatsapp.net/img/v4/badge-google-play-en.svg',
      iOS: 'https://www-cdn.whatsapp.net/img/v4/badge-apple-store-en.svg',
    };
    return (
      <section className={styles.apps_wrapper}>
        <figure className={styles.logo} />
        <p className={styles.keywords}>
          Simple. Secure.
          <br />
          Reliable messaging.
        </p>
        <p className={styles.intro}>
          With WhatsApp, you'll get fast, simple, secure messaging and calling
          for free available on phones all over the world.
        </p>
        <figure className={styles.terminal}>
          <img
            src={client === 'iOS' ? typeSvg.iOS : typeSvg.andriod}
            alt={client === 'iOS' ? 'iOS' : 'Andriod'}
          />
        </figure>
        <figure className={styles.mobile_img}>
          <img
            src='https://www-cdn.whatsapp.net/img/v4/home-phone-mobile.png'
            alt='img'
          />
        </figure>
      </section>
    );
  }
}

export default Apps;
