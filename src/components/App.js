import React from 'react'
import PropTypes from 'prop-types';

import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount() {
        console.log('mounted');
        const { params } = this.props.match;
        console.log('params: ', params);
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            });
        }
        console.log(localStorageRef)
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes',
        });
    }

    componentDidUpdate() {
        console.log('it updated');
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        console.log('unmounting');
        base.removeBinding(this.ref)
    }

    addFish = fish => {
        console.log('Add fish')
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes
        });
    }

    updateFish = (key, updatedFish) => {
        const fishes = {
            ...this.state.fishes,
        }
        fishes[key] = updatedFish;
        this.setState({
            fishes
        })
    }

    deleteFish = key => {
        const fishes = {
            ...this.state.fishes
        }
        fishes[key] = null;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        console.log("Load Sample Fishes")
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = key => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({
            order
        });
    }

    removeFromOrder = key => {
        const order = {
            ...this.state.order
        }
        delete order[key];
        this.setState({
            order
        });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Freash Seafood Market" age={500} cool={true}></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes)
                            .map(key =>
                                <Fish
                                    key={key}
                                    details={this.state.fishes[key]}
                                    addToOrder={this.addToOrder}
                                    index={key}
                                >
                                    {key}
                                </Fish>
                            )}
                    </ul>
                </div>
                <Order
                    {...this.state}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    storeId={this.props.match.params.storeId}
                />
            </div>
        )
    }
}

export default App;