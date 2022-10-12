import React, { Component } from 'react';
import { Button, Form, Row } from 'reactstrap';

export class ReasonDetails extends Component {
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
                 <h2>Motivation:</h2>
                 <div className='form-container'>
                    <Form>
                        <Row>
                                <div class="form-group col-md-12">
                                    <label for="reason">Why do you need a sponsorship</label>
                                    <textarea
                                    style={{width:'400px',height:'300px'}}
                                    class="form-control" 
                                    onChange={this.props.handleChange('reason')}
                                    defaultValue={values.reason}
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

export default ReasonDetails;