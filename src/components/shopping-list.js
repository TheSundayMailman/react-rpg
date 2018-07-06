import React from 'react';
import {connect} from 'react-redux';

import {
  updatePlayerItems,
  updatePlayerGold,
  toggleBuyMode
} from '../actions/index.js';

import itemSet from '../database/item-db';

export class ShoppingList extends React.Component {
  purchaseItem(currentItem, player) {
    const oldPlayerGold = player.gold;
    const oldPlayerItems = player.items;
    
    let messages;
    let newPlayerGold;
    let newPlayerItems;

    const itemCheck = player.items.filter(item => item.name === currentItem.name);
    if (itemCheck.length === 0) {
      oldPlayerItems.push({id: currentItem.id, name: currentItem.name, quantity: 1});
      newPlayerItems = oldPlayerItems
        .filter(item => item.quantity >= 1)
        .sort((a, b) => a.id - b.id)
      ;
    } else {
      newPlayerItems = oldPlayerItems
        .map(item => {
          if (item.name === currentItem.name) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        })
        .filter(item => item.quantity >= 1)
        .sort((a, b) => a.id - b.id)
      ;
    }

    newPlayerGold = oldPlayerGold - currentItem.price;
    if (newPlayerGold < 0) {
      messages = [
        'SHOP-KEEPER:',
        'You don\'t have enough gold...'
      ];
      this.props.dispatch(toggleBuyMode(messages));
    } else {
      messages = [
        'SHOP-KEEPER:',
        `1x ${currentItem.name} purchased!`,
        'Thank you very much!'
      ];
      this.props.dispatch(updatePlayerGold(newPlayerGold));
      this.props.dispatch(updatePlayerItems(newPlayerItems));
      this.props.dispatch(toggleBuyMode(messages));
    }
  }

  render() {
    const playerItems = this.props.player.items.map(item =>
      <li key={item.id}>{item.name}: {item.quantity}</li>
    );

    // this sets up list of items for sale
    const potion = itemSet['POTION'];
    const hiPotion = itemSet['HI-POTION'];
    const ether = itemSet['ETHER'];

    if (this.props.buyMode) {
      return (
        <section className="menu shopping-window">
          <h2>{this.props.player.name}</h2>
          <p>CLASS: {this.props.player.job}</p>
          <p>LVL: {this.props.player.level}</p>
          <p>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</p>
          <p>MP: {this.props.player.mp.current} / {this.props.player.mp.max}</p>
          <p>GOLD: {this.props.player.gold}</p>
          <section className="menu items-for-purchase">
            <p>Click to purchase an item:</p>
            <button onClick={() => this.purchaseItem(potion, this.props.player)}> - {potion.name}: {potion.price} GOLD</button>
            <button onClick={() => this.purchaseItem(hiPotion, this.props.player)}> - {hiPotion.name}: {hiPotion.price} GOLD</button>
            <button onClick={() => this.purchaseItem(ether, this.props.player)}> - {ether.name}: {ether.price} GOLD</button>
          </section>
          <section className="menu items-owned">
            <ul>Items currently owned:
              {playerItems}
            </ul>
          </section>
        </section>
      );
    }
    if (this.props.sellMode) {
      return (
        <section className="menu shopping-window">
          <p>SALES WINDOW IN CONSTRUCTION</p>
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = (state, props) => {
  return {
    buyMode: state.game.buyMode,
    sellMode: state.game.sellMode,
    player: state.player
  };
};

export default connect(mapStateToProps)(ShoppingList);
