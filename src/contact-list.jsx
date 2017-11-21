import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';


class ContactList extends Component {


    deleteAlert(event, key){
        let txt;
        if (window.confirm("Are you sure?") == true) {
            this.props.doDelete(key);
        } else {

        }
    }

    render() {
        let contacts = this.props.contacts;

        contacts.sort(function(a, b){
            return a.name > b.name;
        });

        let renderContactsList = contacts.map((contacts, index)=>{
            return(
                <ListItem
                  key={contacts.key}
                  primaryText={contacts.name}
                  initiallyOpen={false}
                  primaryTogglesNestedList={true}
                  nestedItems={[
                    <ListItem
                      key={contacts.key + contacts.email}
                      primaryText={contacts.email}
                    />,
                    <ListItem
                        key={contacts.key + contacts.phone}
                        primaryText={contacts.phone}
                    />,
                    <ListItem
                        key={contacts.key + contacts.address}
                        primaryText={contacts.address}
                    />,
                    <ListItem
                        key={contacts.key + contacts.city}
                        primaryText={contacts.city}
                    />,
                    <ListItem
                        key={contacts.key + contacts.state}
                        primaryText={contacts.state}
                    />,
                    <ListItem
                        key={contacts.key + contacts.zip}
                        primaryText={contacts.zip}
                    />,
                    <ListItem
                      key={contacts.key + 'delete'}
                      leftIcon={<DeleteIcon />}
                      primaryText='Delete Contact'
                      onClick={(e) => this.deleteAlert(e, index)}
                    />,
                  ]}
                />
            )
        })
        return (
            <div>
            <Card>
                <List>
                    <Subheader>Contact Info</Subheader>
                    {renderContactsList}
                </List>
             </Card>
            </div>
        )
    }
}






export default ContactList;
