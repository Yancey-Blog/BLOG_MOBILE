import * as React from 'react';
import cs from 'classnames';
import { Link } from 'react-router-dom';
import styles from './CookieConfirmDialog.module.scss';
import routePath from '@constants/routePath';
import { ICookieConfirmDialogStates } from '../../types/widget';

class CookieConfirmDialog extends React.Component<
  {},
  ICookieConfirmDialogStates
> {
  constructor(props: object) {
    super(props);
    this.state = {
      flag: true,
    };
  }

  public componentWillMount() {
    this.checkDialog();
  }

  public componentDidMount() {
    // todo
  }

  public componentWillUnmount() {
    // todo
  }

  public checkDialog = () => {
    if (window.localStorage.showCookieDialog === 'false') {
      this.setState({
        flag: false,
      });
    }
  };

  public closeDialog = () => {
    this.setState(
      {
        flag: false,
      },
      () =>
        window.localStorage.setItem(
          'showCookieDialog',
          this.state.flag.toString(),
        ),
    );
  };

  public render() {
    const { flag } = this.state;
    return (
      <div
        className={cs(
          styles.cookie_confirm_dialog,
          !flag ? styles.fade_out : '',
        )}
      >
        <p className={styles.cookie_confirm_dialog_content}>
          This website uses cookies to ensure you get the best experience on our
          website.{' '}
          <Link
            to={routePath.privacyPrivacy}
            className={styles.cookie_confirm_dialog_link}
            onClick={() => this.closeDialog()}
          >
            Learn More
          </Link>
          <span
            role='button'
            className={styles.cookie_confirm_dialog_btn}
            onClick={() => this.closeDialog()}
          >
            GOT IT!
          </span>
        </p>
      </div>
    );
  }
}

export default CookieConfirmDialog;
