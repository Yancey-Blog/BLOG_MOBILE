import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styles from './Header.module.scss';
import { ILayoutsProps } from '../../../types/layout';

@inject('layoutsStore')
@observer
class Header extends React.Component<ILayoutsProps, {}> {
  constructor(props: ILayoutsProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { layoutsStore } = this.props;
    return (
      <header className={styles.header}>
        <div
          className={styles.menu_trigger_container}
          onClick={() => layoutsStore!.toggleMenu()}
          onTransitionEnd={() => layoutsStore!.handleTransitionEnd()}
        >
          <span className={styles.menu_trigger} />
        </div>
      </header>
    );
  }
}

export default Header;
