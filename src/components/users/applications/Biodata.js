import React, { Component, useState } from 'react';
import { Form, Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import '../../styles.scss'
import Header from '../Header';
export class Biodata extends Component {
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values } = this.props;
        
        return (
            // <Col style={{ maxWidth: 450 }}>
            <>
           
            <div className='container'>
            <Header />
            <h2>Personal Details:</h2> 
            <div className='form-container'>

                <Form>
                        <Row>
                                <Col>
                                    <Label for="firstName">First Name</Label>
                                    <Input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('firstName')}
                                    defaultValue={values.firstName}
                                    />
                                </Col>
                                
                                <Col>
                                    <Label for="lastName">Last Name</Label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('lastName')}
                                    defaultValue={values.lastName}
                                    />
                                </Col>
                        </Row>
                        <Row>
                                <div class="form-group col-md-4">
                                    <label for="homeAddress">Address</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('homeAddress')}
                                    defaultValue={values.homeAddress}
                                    />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="phone">Phone</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('phone')}
                                    defaultValue={values.phone} />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="email">Email</label>
                                    <input type="email" 
                                    class="form-control" 
                                    onChange={this.props.handleChange('email')}
                                    defaultValue={values.email} />
                                </div>
                                
                                
                                

                            </Row>
                            {/* file upload */}
                            <Row>
                            <div class="form-group col-md-6">
                                    <label for="idFile">ID Copy</label>
                                    <input 
                                    type="file" name='idFile'                                    class="form-control" 
                                    onChange={this.props.handleChange('idFile')}
                                    defaultValue={values.idFile} />
                            </div>
                            <div class="form-group col-md-6">
                                    <label for="certFile">ID Copy</label>
                                    <input 
                                    type="file" name='certFile'                                    class="form-control" 
                                    onChange={this.props.handleChange('certFile')}
                                    defaultValue={values.certFile} />
                            </div>
                            </Row>
                            {/* <Row> */}
                            <br/>
                            <Button onClick={this.saveAndContinue}>Save And Continue</Button>
                            {/* </Row> */}
                   
                </Form>
                </div>
                </div>
                </>
        );
    }
}

export default Biodata;