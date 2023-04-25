import React, { Component } from 'react'
import './card-list.styles.css';
import Card from '../Card/card.component'

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        console.log('render from card-list component');
        return (
            <div className='card-list'>
                {
                    monsters.map((m) => {

                        return (
                            <Card monster={m} />
                        );
                    })
                }
            </div>
        );
    }
}
export default CardList;