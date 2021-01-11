import React from 'react';

class EditFishForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedFish);
        const {index} = this.props;
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
            </div>
        )
    }
}

export default EditFishForm;