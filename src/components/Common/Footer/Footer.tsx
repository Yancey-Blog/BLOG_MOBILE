import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import styles from './Footer.module.scss';
import svgIcons from '@assets/images/svg_sprite.svg';
import { mail, socialMediaList } from '@constants/constants';
import routePath from '@constants/routePath';
import { ILayoutsProps } from '../../../types/layout';

@inject('layoutsStore')
@observer
class Footer extends React.Component<ILayoutsProps, {}> {
  constructor(props: ILayoutsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <footer className={styles.footer_wrapper}>
        <div className={styles.legal_list}>
          <span className={styles.legal_item}>
            <a
              href={`mailto:${mail}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Contact Me
            </a>
          </span>
          <span className={styles.legal_item}>
            <Link to={routePath.license}>Article License</Link>
          </span>
          <span className={styles.legal_item}>
            <Link to={routePath.privacyPrivacy}>Privacy Policy</Link>
          </span>
          <span className={styles.legal_item}>
            <Link to={routePath.service}>Terms of Service</Link>
          </span>
          <span className={styles.legal_item}>
            <Link to={routePath.apps}>Apps</Link>
          </span>
        </div>
        <p className={styles.copyright}>
          <strong>{new Date().getFullYear()} © Yancey Inc.</strong>
        </p>
        <div className={styles.social_media_list}>
          {Object.keys(socialMediaList).map(key => (
            <span className={styles.social_media_item} key={key}>
              <a
                href={socialMediaList[key].url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg className={styles.icon}>
                  <use xlinkHref={`${svgIcons}${socialMediaList[key].icon}`} />
                </svg>
              </a>
            </span>
          ))}
        </div>
      </footer>
    );
  }
}

export default Footer;
