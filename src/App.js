import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactForm from './contact-form';

const theme = getMuiTheme({
    palette: {primary1Color: '#E91E63',
                   accent1Color: '#009688',
    }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={theme}>
            <div>
                <AppBar title="MyContacts"/>
                <ContactForm/>
            </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
