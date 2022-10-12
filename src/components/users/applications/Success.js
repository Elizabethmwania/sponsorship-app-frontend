import React, { Component } from 'react';
import { Row } from 'reactstrap';
import '../../styles.scss'
// import img from '../../../img/gateway/check.png';
export class Success extends Component {
    render() {
        return (
            <div className='container'>
                <div className='form-container' style={{marginTop:'20%', color:'green'}}>
               <h3>Registration successiful &nbsp; &nbsp;
               {/* <img src={img} style={{height:40, width:40}}/> */}
               </h3>
               <small>You will be notified if approved!</small>
               </div>
            </div>
        );
    }
}

export default Success;