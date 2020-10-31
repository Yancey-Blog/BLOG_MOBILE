import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import { ILayoutsProps } from '../../../types/layout';
import menuItemList from './layoutList';

@inject('layoutsStore')
@observer
class Menu extends React.Component<ILayoutsProps, {}> {
  constructor(props: ILayoutsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { layoutsStore } = this.props;
    return (
      <nav className={styles.menu_wrapper}>
        <div className={styles.menu_container}>
          <div className={styles.close_menu_wrapper}>
            <span className={styles.selected_language}>ENGLISH</span>
            <span
              className={styles.close_btn}
              onClick={() => layoutsStore!.toggleMenu()}
              onTransitionEnd={() => layoutsStore!.handleTransitionEnd()}
            >
              CLOSE
            </span>
          </div>
          <div>
            {Object.keys(menuItemList).map(key => (
              <p key={key}>
                <Link
                  to={menuItemList[key].url}
                  className={styles.item_link}
                  onClick={() => layoutsStore!.toggleMenu()}
                  onTransitionEnd={() => layoutsStore!.handleTransitionEnd()}
                >
                  {menuItemList[key].name}
                </Link>
              </p>
            ))}
          </div>
          <div className={styles.item_link}>
            <p>Announcement</p>
            <p className={styles.announcement_content}>
              {layoutsStore!.announcement}
            </p>
          </div>
          <div className={styles.theme_switch_wrapper}>
            <span className={styles.theme_switch_intro}>
              Activate {layoutsStore!.themeType ? 'white' : 'black'} option
            </span>
            <div className={styles.switch_container}>
              <input
                type='checkbox'
                id='switchTheme'
                className={styles.switch_input}
                onChange={() => layoutsStore!.handleSwitch()}
              />
              <label htmlFor='switchTheme' className={styles.switch_label}>
                <span className={styles.switch_slider} />
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
