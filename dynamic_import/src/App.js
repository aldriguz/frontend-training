import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Page1 from './components/Page1';
//import Page2 from './components/Page2';
//import Page3 from './components/Page3';
import AsyncComponent from './components/AsyncComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    // No code splitting
    //this.setState({route: route});

    // With code splitting
    if (route === 'page1' ) {
      this.setState({route: route});
    }
    else if (route === 'page2' ) {
      import('./components/Page2').then( (Page2) => {
        this.setState({route: route, component: Page2.default});
      });
    } else {
        import('./components/Page3').then( (Page3) => {
          this.setState({route: route, component: Page3.default});
        })
    }
  }


  render() {
    const {route} = this.state;    

    // No code splitting
    
     /*
    if (route === 'page1')
      return <Page1 onRouteChange={this.onRouteChange}/>;
    else if (route === 'page2')
      return <Page2 onRouteChange={this.onRouteChange}/>;
    else
      return <Page3 onRouteChange={this.onRouteChange}/>;

    */

    // Using async component    
     
    if (route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange}/>;
    } else if (route === 'page2') {
      const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
      return <AsyncPage2 onRouteChange={this.onRouteChange}/>;
    } else { 
      const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
      return <AsyncPage3 onRouteChange={this.onRouteChange}/>;
    }


    //With code splitting
    /*
    if (route === 'page1')
        return <Page1 onRouteChange={this.onRouteChange}/>;
    else 
        return <this.state.component onRouteChange={this.onRouteChange}/>;
    */
  }

}

export default App;
