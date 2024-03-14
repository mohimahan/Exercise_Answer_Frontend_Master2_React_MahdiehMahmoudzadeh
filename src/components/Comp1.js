import React, { Component } from 'react';
import cake1 from "../images/cake1.jpg";
import cake2 from "../images/cake2.jpg";
import cake3 from "../images/cake3.jpg";
import cake4 from "../images/cake4.jpg";
import cake5 from "../images/cake5.jpg";
import cake6 from "../images/cake6.jpg";
import cake7 from "../images/cake7.webp";
import cake8 from "../images/cake8.webp";
import cake9 from "../images/cake9.jpg";
import cake10 from "../images/cake10.jpg";
import '../styles/myStyle.css'


class Comp1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9, cake10],
            index: 0

        }
    }

    countUpHandler = () => {
        if (this.state.index === 9) {
            this.setState(
            {
                index: 0
            }
            ) 
        }else (
            this.setState ( pervState => ({
                index: pervState.index + 1
            })) 
        )

    }

    countDownHandler = () => {
        if (this.state.index === 0) {
            this.setState(
                {
                 index: 9
                }
            )
        }else (
            this.setState ( pervState => ({
                index: pervState.index - 1
            })) 
        )

    }


    render() {

        const {index, images} = this.state;
        
        return (
            <div className='img-box'>
                <span className='span'>{index + 1}</span>
                <img src={images[index]}  className='img' alt=""/>

                <div className='btn-down'  onClick={this.countDownHandler}>
                   <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>

                <div className='btn-up' onClick={this.countUpHandler}>
                   <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
} 

export default Comp1; 