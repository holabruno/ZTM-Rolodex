import React, { Component } from 'react'

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        console.log('render from card-list component');
        return (
            <>
                {monsters.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h2>{monster.name}</h2>
                            <img src={monster.photo} />
                        </div>
                    );
                })
                }
            </>
        );
    }
}
export default CardList;