import React, { Component } from 'react'
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        console.log('render from card-list component');
        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        const { name, email, id } = monster;
                        return (
                            <div key={id} className='card-container'>
                                <h2>{name}</h2>
                                <img alt={name} src={`https://robohash.org/${monster.id}?set=2&size=180x180`} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default CardList;