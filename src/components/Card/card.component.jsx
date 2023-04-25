import React, { Component } from 'react'
import './card.styles.css';

class Card extends Component {
    render() {
        const { monster } = this.props;
        const { id, name, email } = monster;
        return (
            <div key={id} className='card-container'>
                <h2>{name}</h2>
                <img alt={name} src={`https://robohash.org/${monster.id}?set=2&size=180x180`} />
                <p>{email}</p>
            </div>

        );
    }
}
export default Card;