import * as React from 'react';
import cs from 'classnames';
import styles from './DownloadAppDialog.module.scss';
import { IDownloadAppDialogStates } from '../../types/widget';

class DownloadAppDialog extends React.Component<{}, IDownloadAppDialogStates> {
  constructor(props: object) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    // todo
  }

  public componentWillUnmount() {
    // todo
  }

  public closeDownloadAppDialog = () => {
    this.setState({
      flag: false,
    });
  }

  public render() {
    const { flag } = this.state;
    return (
      <section
        className={cs(styles.download_app_dialog, !flag ? styles.fade_out : '')}
      >
        <div className={styles.download_app_dialog_txt}>
          <p className={styles.download_app_dialog_title}>Blog for iOS</p>
          <p className={styles.download_app_dialog_intro}>
            Find it for free on the App Store.
          </p>
        </div>
        <figure role='button'>
          <img
            src='https://www-cdn.whatsapp.net/img/v4/badge-apple-store-en.svg'
            alt='App_Store_Download'
          />
        </figure>
        <span className={styles.download_app_dialog_close} />
      </section>
    );
  }
}

export default DownloadAppDialog;
