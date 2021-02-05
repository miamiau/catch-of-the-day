import React from 'react'
import PropTypes from 'prop-types';

import { getFunName } from '../helpers'

class StorePicker extends React.Component {
    myInput = React.createRef();

    static propTypes = {
        match: PropTypes.object
    }

    goToStore = event => {
        event.preventDefault();
        // console.log('going to the store');
        console.log(this.myInput);
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    handleClick() {
        // alert("HEY")
    }

    render() {
        return (
            <>
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input
                        type="text"
                        required
                        placeholder='Store Name'
                        defaultValue={getFunName()}
                        ref={this.myInput}
                    />
                    <button
                        type='submit'
                        onClick={this.handleClick}
                    >
                        Visit Store
                      </button>
                </form>
            </>
        )
    }
}

export default StorePicker