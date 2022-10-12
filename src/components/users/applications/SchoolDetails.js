import React, { Component } from 'react';
import { Button, Form, Row } from 'reactstrap';
import '../../styles.scss';
export class SchoolDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
                <>
                <div className='container'>
                <h2>School Details:</h2>
                <div className='form-container'>
                    <Form>
                        <Row>
                                <div class="form-group col-md-6">
                                    <label for="schoolName">School Name</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('schoolName')}
                                    defaultValue={values.schoolName}
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="schoolAddress">School Address</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('schoolAdress')}
                                    defaultValue={values.schoolAddress}
                                    />
                                </div>
                               
                        </Row>
                        <Row>
                        <div class="form-group col-md-6">
                            <label for="academicLevel">Academic Level</label>
                                <select 
                                    style={{border: '1px solid #ced4da'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('academicLevel')}
                                    defaultValue={values.academicLevel}
                                    >
                                        <option selected>Select...</option>
                                        <option>University</option>
                                        <option>College</option>
                                        <option>Secondary School</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="completionYear">Year of Completion</label>
                                    <input 
                                    class="form-control" 
                                    onChange={this.props.handleChange('completionYear')}
                                    defaultValue={values.completionYear}
                                    />
                                </div>
                        </Row>
                        <br/>
                        <div class="form-row">
                        <Button onClick={this.back}>Back</Button> &nbsp; &nbsp; &nbsp;
                        <Button onClick={this.saveAndContinue}>Next</Button>
                        </div>
                    </Form>
                    </div>
                </div>
                </>
        );
    }
}

export default SchoolDetails;