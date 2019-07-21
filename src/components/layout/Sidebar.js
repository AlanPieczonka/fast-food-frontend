import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2 className="sidebar__heading">Current Order</h2>

        <div className="sidebar__basket">
          <div className="p-card --border-bottom">
            <img className="p-card__thumbnail" src="https://placehold.it/100x100" alt="Product Thumbnail" />
            
            <div className="p-card__content">
              <h2 className="p-card__heading">Bourbon BBQ Grander Box</h2>

              <div className="p-card__footer">
                <span className="p-card__quantity">
                  <input type="submit" value="-" onChange={() => {}} />
                  <input type="text" value="1" onChange={() => {}} />
                  <input type="submit" value="+" onChange={() => {}} />
                </span>
                <span className="p-card__price">31.95 zł</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar__footer">
          <div className="sidebar__summary">
            <span>Sum:</span>
            <span>112.75 zł</span>
          </div>
          <div className="sidebar__submit">
            <button>Complete Order</button>
          </div>
        </div>
      </div>
    )
  }
}
