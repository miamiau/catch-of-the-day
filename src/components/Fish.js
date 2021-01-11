import React from 'react'
import { formatPrice } from '../helpers'
import fishes from '../sample-fishes';

class Fish extends React.Component {
    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available'

        return (
            <div className="single-fish">
                <li className="menu-fish">
                    <img src={image} alt={name} />
                    <h3 className="fish-name">
                        {name}
                        <span className="price">{formatPrice(price)}</span>
                    </h3>
                    <p>{desc}</p>
                </li>
                <button
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}
                >
                    {isAvailable ? "Add To Order" : "Sold Out"}
                </button>
            </div>
        )
    }
}

export default Fish