import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContactForm from './contact-form';
import ContactList from './contact-list';

const theme = getMuiTheme({
    palette: {primary1Color: '#E91E63',
                   accent1Color: '#009688',
    }
})

class App extends Component {
    constructor(){
        super();
        this.state ={
            contacts: [{name: 'Josh Westbury',
                              email: 'joshwestbury@gmail.com',
                              phone: '746.576.3877',
                              address: '6627 Lussier Dr.',
                              city: 'Sugar Land',
                              state: 'TX',
                              zip: '77479',
                          },
                          {name: 'Sam Smith',
                            email: 'Sam@gmail.com',
                            phone: '777.388.3838',
                            address: '8732 Sam blvd.',
                            city: 'Austin',
                            state: 'TX',
                            zip: '88748',
                           },
                          {name: 'Bri Sater',
                            email: 'bri@gmail.com',
                            phone: '747.393.2929',
                            address: '4857 Apple blvd.',
                            city: 'Dallas',
                            state: 'TX',
                            zip: '83832',
                          }]
        }
    }

    getContact(contact) {
        let newContacts = this.state.contacts;
        newContacts.push(contact);
        this.setState({contacts: newContacts})
    }

    doDelete(index) {
        console.log('Delete', index);
        var contacts = this.state.contacts;
        contacts.splice(index, 1);
        this.setState({contacts: contacts})
    }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={theme}>
            <div>
                <AppBar title="MyContacts"/>
                <ContactForm
                callback={(contactFromForm)=>{this.getContact(contactFromForm)}}/>
                <ContactList contacts={this.state.contacts} doDelete={(index) => this.doDelete(index)}/>
            </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
