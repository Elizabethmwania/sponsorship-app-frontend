import React, { Component } from 'react';
import { Button, Card, List, ListGroupItem } from 'reactstrap';
import '../../styles.scss'
import Header from '../Header';

export class ConfirmDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      }
    
      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      }
    render() {
        const { values: { firstName, lastName, homeAddress, email, phone, idFile,certFile,
                          schoolName, schoolAddress, academicLevel,completionYear,
                          reason
                        } } = this.props;

        return (
            <>
            <Header />
            <div className='container'>
            <h2>Confirm to submit!</h2>
            <div className='form-container'>
                <h5>Personal Details:</h5>
                <List>
                    <ListGroupItem>
                        First Name: {firstName}
                    </ListGroupItem>
                    
                    <ListGroupItem>
                        Last Name: {lastName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Home Address: {homeAddress}
                    </ListGroupItem>
                    <ListGroupItem>
                        Phone Number: {phone}
                    </ListGroupItem>
                    <ListGroupItem>
                        Email Address: {email}
                    </ListGroupItem>
                    
                    <ListGroupItem>
                        ID Copy: {idFile}
                    </ListGroupItem>
                    <ListGroupItem>
                        Certificate Copy: {certFile}
                    </ListGroupItem>
                </List>
                <h5>School Details:</h5>
                <List>
                    <ListGroupItem>
                        School Name: {schoolName}
                    </ListGroupItem>
                    <ListGroupItem>
                        Shool Address: {schoolAddress}
                    </ListGroupItem>
                    <ListGroupItem>
                        Academic Level: {academicLevel}
                    </ListGroupItem>
                    <ListGroupItem>
                        Year of Completion: {completionYear}
                    </ListGroupItem>
                </List>
                
                <h5>Motivation:</h5>
                <List>
                    <ListGroupItem>
                        Motivation: {reason}
                    </ListGroupItem>
                    
                </List>
                <br/>
                <div class="form-row">
                 <Button onClick={this.back}>Back</Button> &nbsp; &nbsp; &nbsp;
                 <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
             </div>
            {/* </Card> */}
            
            </div>
            </>
        );
    }
}

export default ConfirmDetails;
