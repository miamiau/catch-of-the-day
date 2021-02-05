import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func,
    }

    handleChange = event => {
        console.log(event.currentTarget.value);
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedFish);
        const { index } = this.props;
        this.props.updateFish(index, updatedFish);
    }

    render() {
        return (
            <div className="fish-edit">
                <input type="text" onChange={this.handleChange} value={this.props.fish.name} name="name" />
                <input type="text" onChange={this.handleChange} value={this.props.fish.price} name="price" />
                <select onChange={this.handleChange} value={this.props.fish.status} name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" onChange={this.handleChange} value={this.props.fish.desc} name="desc" />
                <input type="text" onChange={this.handleChange} value={this.props.fish.image} name="image" />
                <button onClick={() => { this.props.deleteFish(this.props.index) }}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm;