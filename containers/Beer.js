import React from 'react';
import ReactDOM from 'react-dom';

class Beer extends React.Component {
   
    render() {
        return ( 
            <div className="card">
                <div className="title">
                    <h1 className="h1 title__h1"> {this.props.name} </h1>
                </div>
                <div className="card-image__container"> 
                    <img className="card__image" src={this.props.image_url} />
                </div>
            </div>
        )
    }
}

export default Beer;