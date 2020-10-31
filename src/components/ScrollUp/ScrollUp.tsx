import * as React from 'react';
import ScrollToTop from 'react-scroll-up';

class ScrollUp extends React.Component<{}, {}> {
  constructor(props: object) {
    super(props);
    this.state = {};
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

  public render() {
    const styles = {
      bottom: 50,
      right: 10,
      margin: '1rem 0 0',
      padding: 0,
      width: '.6rem',
      height: '.6rem',
      lineHeight: 1,
      color: '#909090',
      backgroundColor: '#fff',
      border: '1px solid #f1f1f1',
      borderRadius: '50%',
      boxShadow: '0 0 5px rgba(0,0,0,.05)',
    };
    return <ScrollToTop showUnder={160} style={styles} />;
  }
}

export default ScrollUp;
