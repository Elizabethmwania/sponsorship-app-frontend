import React, { Component } from 'react';
import Biodata from './Biodata';
import ConfirmDetails from './ConfirmDetails';
import ReasonDetails from './ReasonDetails';
import SchoolDetails from './SchoolDetails';
import { Success } from './Success';

export class MainForm extends Component {
    state = {
        step: 1,
        // personal details
        firstName: '',
        lastName: '',
        homeAddress: '',
        email: '',
        phone: '',
        idFile:'',
        certFile: '',
        // school details
        schoolName: '',
        schoolAddress: '',
        academicLevel: '',
        completionYear: '',
        // reason details
        reason: '',
        

    }
    
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({[input]: event.target.value})
    }
    render() {
        const { step } = this.state;
        

        const { firstName, homeAddress, lastName, email, phone, idFile, certFile,
                schoolName, schoolAddress, academicLevel,completionYear,
                reason
            
            } = this.state;

        const values = { firstName, homeAddress, lastName, email, phone, idFile, certFile,
                          schoolName, schoolAddress, academicLevel,completionYear,
                          reason
                        
                        };

        switch(step) {
            case 1:
                return <Biodata 
                        nextStep={this.nextStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 2:
                return <SchoolDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />
            case 3:
                return <ReasonDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={values}
                        />                                
            case 4:
                return <ConfirmDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        />
            case 5:
                return <Success />
        }
    }
}

export default MainForm;