import React, { Component } from 'react';



import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';


class ContactForm extends Component {
    //<Card> and <CardTitle> are Material-UI components.
    //A <Card> is a piece of paper with unique related data that serves as an entry point to more detailed information. For example, a card could contain a photo, text, and a link about a single subject.
    //TextField acts as input and allows users to input text field.
            //TextField comes with various features such as floatingLabelText.
    render() {
        return (
            <div>
                <Card className="md-card">
                    <form >
                        <CardTitle title="Add Contact" subtitle=""/>
                        <CardText>
                            <TextField floatingLabelText="Name"
                                hintText="Name"
                            />
                            <br />
                            <TextField floatingLabelText="Email"
                                hintText="Email"
                            />
                            <br />
                            <TextField floatingLabelText="Phone"
                                hintText="Phone"
                            />
                            <br />
                            <TextField floatingLabelText="Address"
                                hintText="Email"
                            />
                            <br />
                            <TextField floatingLabelText="City"
                                hintText="City"
                            />
                            <br />
                            <TextField floatingLabelText="State"
                                hintText="State"
                            />
                            <br />
                            <TextField floatingLabelText="Zip"
                                hintText="Zip"
                            />
                            <br />
                        </CardText>
                    </form>
                </Card>
            </div>

        )

    }
}

export default ContactForm;
