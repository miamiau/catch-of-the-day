import React from 'react'

const AddFishForm = props => {
    const nameRef = React.useRef();
    const priceRef = React.useRef();
    const statusRef = React.useRef();
    const descRef = React.useRef();
    const imageRef = React.useRef();

    const createFish = event => {
        event.preventDefault();
        const fish = {
            name: nameRef.current.value,
            price: parseFloat(priceRef.current.value),
            status: statusRef.current.value,
            desc: descRef.current.value,
            image: imageRef.current.value,
        }
        console.log(fish)
        props.addFish(fish)
        event.currentTarget.reset();
    }

    return (
        <form action="" className="fish-edit" onSubmit={createFish}>
            <input name="name" ref={nameRef} type="text" placeholder="Name" />
            <input name="price" ref={priceRef} type="text" placeholder="Price" />
            <select name="status" ref={statusRef}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold out!</option>
            </select>
            <textarea name="desc" ref={descRef} placeholder="Desc" />
            <input name="image" ref={imageRef} type="text" placeholder="Image" />
            <button type="submit">+ Add Fish</button>
        </form>
    )
}

export default AddFishForm