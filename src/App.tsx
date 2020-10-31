import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import history from './history';
import { checkWebp, judgeLanguage, judgeClient } from './tools/tools';
import Layouts from './layouts/Layouts';
class App extends React.Component {
  public componentWillMount() {
    window.localStorage.isWebp = checkWebp();
    window.localStorage.language = judgeLanguage();
    window.localStorage.client = judgeClient();
  }

  public componentDidMount() {
    this.devToolsWarning();
  }

  public devToolsWarning() {
    const re = /x/;
    // tslint:disable-next-line:no-console
    console.log(re);
    re.toString = () => {
      // tslint:disable-next-line:no-console
      console.log(`
      
         █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗
       ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝
       ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗
       ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║
       ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝
        ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝
        ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
        ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
                 ░     ░ ░      ░  ░
                       ░
      `);
      return '';
    };
  }

  public render() {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <>
            <Switch>
              <Route path='/' component={Layouts} />
            </Switch>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
