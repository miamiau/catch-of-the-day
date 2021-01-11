import React from 'react';

const EditFishForm = props => {
    const { fish, index } = props;

    console.log("Fish: ", fish);

    const handleChange = event => {
        console.log(event.currentTarget.value);
        const updatedFish = {
            ...fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedFish);
        props.updateFish(index, updatedFish);
    }

    return (
        <div className="fish-edit">
            <input type="text" onChange={handleChange} value={fish.name} name="name" />
            <input type="text" onChange={handleChange} value={fish.price} name="price" />
            <select onChange={handleChange} value={fish.status} name="status">
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea type="text" onChange={handleChange} value={fish.desc} name="desc" />
            <input type="text" onChange={handleChange} value={fish.image} name="image" />
        </div>
    )
}

export default EditFishForm;