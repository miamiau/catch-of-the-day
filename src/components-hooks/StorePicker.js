import React from 'react'

import { getFunName } from '../helpers'

const StorePicker = props => {
    const myInput = React.useRef();

    const goToStore = event => {
        event.preventDefault();
        // console.log('going to the store');
        console.log(myInput);
        const storeName = myInput.current.value;
        props.history.push(`/store/${storeName}`);
    }

    const handleClick = () => {
        // alert("HEY")
    }

    return (
        <>
            <form action="" className="store-selector" onSubmit={goToStore}>
                <h2>Please enter a store</h2>
                <input
                    type="text"
                    required
                    placeholder='Store Name'
                    defaultValue={getFunName()}
                    ref={myInput}
                />
                <button
                    type='submit'
                    onClick={handleClick}
                >
                    Visit Store
                      </button>
            </form>
        </>
    )
}

export default StorePicker