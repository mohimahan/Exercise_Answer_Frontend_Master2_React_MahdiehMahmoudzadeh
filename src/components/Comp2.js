import React, { Component } from 'react';
import Comp4  from './Comp4.js';
import '../styles/myStyle.css';


class Comp2 extends Component {
   
    constructor(props) {

        super(props);
        this.state = {
            movies: [],
            genres: [],
            temp: [],
            array: [],
        
        }
    }

    componentDidMount() {

        fetch("/movies.json")
    
        .then((response) => response.json())
        .then(json => { 
            const arrayGenre = [];
            json.map((movie) => {
                const array = movie.Genre.split(','); 
                for (const item of array) { 
                    if (!arrayGenre.includes(item.trim())) {
                        arrayGenre.push(item.trim())
                    }
                }
                
            })
            this.setState({
                movies: json,
                genres: arrayGenre,
                temp: json
            })
        })
 
    }



    filterTitle = (event) => { 
       
        const array = [];
        const value = event.target.value.toLowerCase().trim()
        this.state.temp.map((movie) => {
            
            if (movie.Title.toLowerCase().includes(value) ) {
                array.push(movie) 
        
            }   
        })

        this.setState({
            movies: array
        })
    }

    
    filterGenre = (genre) => {  
        
        this.state.temp.map((movie) => {
            var flag = true;
            if (movie.Genre.includes(genre)) { 

                for (const item of this.state.array) {
          
                    if (item.Title === movie.Title) {
                        flag = false;
                        break
                    }
                }

                if (flag) {
                    this.state.array.push(movie);
                }        
            }
        })

        this.setState({
            movies: this.state.array
        })
    }



    render() {
        
        return (
          
            <div   className='container'>

                <div className='content'>
                    { this.state.movies.map((movie) => (
                        <Comp4 key={movie.id}  poster={movie.Poster} title={movie.Title} year={movie.Year} director={movie.Director} genre={movie.Genre}/>
                          
                        ))    
                    }

                </div>

                <div className='filter'>
                    <input type="search" onChange={this.filterTitle} placeholder='search by movie title...'></input>
                    
                    <div className='genre-buttons'>
                        {
                            this.state.genres.map((genre) => ( 
                                <button className='btn' onClick={() => this.filterGenre(genre)}>{genre}</button>
                            ))
                        }
                    </div>

                </div>
            </div>



 
        )
    }
}

export default Comp2;

