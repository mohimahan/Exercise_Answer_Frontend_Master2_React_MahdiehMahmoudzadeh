import React, { Component } from 'react';
import '../styles/myStyle.css'


class Comp4  extends Component {
    render() {
        const { poster, title, director, year, genre} = this.props;
        
        return (
            <div className='comp4-img'>
                <img src={poster}></img>
                <h3 className='center'>{title}</h3>
                <div className='info '>
                    <span >{director}</span>
                    <span className='right '>{year}</span>
                </div>
                <div className='center '>
                    {genre}
                </div>

            </div>
        );
    }
}

export default Comp4;