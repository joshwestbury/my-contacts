import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactForm from './contact-form';

//customize your theme
//The 'theme' variable gets passed into the MuiThemeProvider component below.
const theme = getMuiTheme({
    palette: {primary1Color: '#E91E63',
                   accent1Color: '#009688',
    }
})

class App extends Component {
  render() {
    //MuiThemeProvider is a component that takes a theme as a property and passes it down with context. This should preferably be at the root of your component tree.
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={theme}>
            <AppBar title="MyContacts"/>
            <ContactForm/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
