import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import routePath from '@constants/routePath';

class NotFound extends React.Component<{}, {}> {
  constructor(props: object) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return (
      <section className={styles.not_found_wrapper}>
        <figure className={styles.dog} />
        <h2 className={styles.not_found_title}>
          OMG!
          <br />
          You look the dog`s bollocks.
        </h2>
        <p className={styles.not_found_intro}>
          But there`s nothing here anymore... yet... we have no idea. You are
          way too close to this.
        </p>
        <Link className={styles.back_to_home} to={routePath.home}>
          GO HOME
        </Link>
      </section>
    );
  }
}

export default NotFound;
