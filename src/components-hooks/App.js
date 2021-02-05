import React, { useEffect } from 'react'

import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base';
import useLocalStorage from './useLocalStorage';

const App = props => {
    const [fishes, setFishes] = React.useState({});
    const [order, setOrder] = React.useState({});
    const [storedOrder, setStoredOrder] = useLocalStorage('storedOrder', order);

    // useEffect(() => {
    //     const { params } = props.match;
    //     const localStorageRef = localStorage.getItem(params.storeId);

    //     if (localStorageRef) {
    //         setOrder(JSON.parse(localStorageRef))
    //         setStoredOrder(props.match.params.storeId, JSON.stringify(order));
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log('Mounted');

    //     const { params } = props.match;

    //     console.log('params: ', params);

    //     console.log('stored order', storedOrder);

    //     const localStorageRef = localStorage.getItem(params.storeId);

    //     if (localStorageRef) {
    //         setOrder(JSON.parse(localStorageRef))
    //     }

    //     console.log('localStorageRef: ', localStorageRef);

    //     const ref = base.syncState(`${params.storeId}/fishes`, {
    //         context: {
    //             setState: ({ fishes }) => setFishes({ ...fishes }),
    //             state: { fishes },
    //         },
    //         state: 'fishes'
    //     });

    //     return () => {
    //         base.removeBinding(ref)
    //     }
    // }, []);


    //define a function here and use that in the component instead of setFishes directly
    const mySetFishes = ({ fishes }) => setFishes({ ...fishes });

    useEffect(() => {
        const { storeId } = props.match.params;

        const ref = base.syncState(`${storeId}/fishes`, {
            context: {
                setState: mySetFishes, //<-- pass it in here
                state: { fishes },
            },
            state: 'fishes'
        })

        return () => {
            base.removeBinding(ref);
        }
    }, [])

    useEffect(() => {
        console.log('Updated', order);
        localStorage.setItem(props.match.params.storeId, JSON.stringify(order));
        // setStoredOrder(props.match.params.storeId, JSON.stringify(order));
    }, [order]);

    const addFish = fish => {
        console.log('Add Fish', fish)
        fishes[`fish${Date.now()}`] = fish;
        setFishes(fishes);
    }

    const updateFish = (key, updatedFish) => {
        console.log("Update Fish", updatedFish)
        fishes[key] = updatedFish;
        setFishes(fishes);
    }

    const loadSampleFishes = () => {
        console.log("Load Sample Fishes", sampleFishes)
        setFishes(sampleFishes);
    }

    const addToOrder0 = key => {
        console.log("Add to Order", order);
        const order = {...order};
        order[key] = order[key] + 1 || 1;
        console.log("Order is: ", order);

        setOrder(order);
        setStoredOrder(order);   
    } 

    const addToOrder = key => {
        console.log("Add to Order", order);
        const updatedOrder = {...order};
        updatedOrder[key] = updatedOrder[key] + 1 || 1;
        console.log("Order is: ", updatedOrder);

        setOrder(updatedOrder);
        setStoredOrder(updatedOrder);
    }

    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Freash Seafood Market" age={500} cool={true}></Header>
                <ul className="fishes">
                    {Object.keys(fishes)
                        .map(key =>
                            <Fish
                                key={key}
                                details={fishes[key]}
                                addToOrder={addToOrder}
                                index={key}
                            >
                                {key}
                            </Fish>
                        )}
                </ul>
            </div>
            <Order
                fishes={fishes}
                order={order}
            />
            <Inventory
                addFish={addFish}
                loadSampleFishes={loadSampleFishes}
                fishes={fishes}
                updateFish={updateFish}
            />
        </div>
    )
}

export default App;