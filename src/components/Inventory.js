import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase';

import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, { firebaseApp } from '../base'

class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func,
    }

    state = {
        uid: null,
        owner: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
            }
        });
    }

    authHandler = async authData => {
        console.log(authData);

        const store = await base.fetch(this.props.storeId, { context: this });
        console.log(store);

        if (!store.owner) {
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            });
        }

        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })

        console.log(authData);
        console.log(this.state);
    }

    authenticate = provider => {
        // alert(provider)
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    logout = async () => {
        console.log('Logging out!');
        await firebase.auth().signOut();
        this.setState({ uid: null })
        console.log(this.state);
    }

    render() {
        const logout = <button type="button" onClick={this.logout}>Log Out!</button>;

        console.log(this.state);

        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}></Login>
        }

        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry, you are not the owner of this store!</p>
                    {logout}
                </div>
            )
        }

        return (
            <div className="inventory">
                <h2>
                    Inventory
                </h2>
                {logout}
                {
                    Object.keys(this.props.fishes)
                        .map(key =>
                            <EditFishForm
                                key={key}
                                index={key}
                                fish={this.props.fishes[key]}
                                updateFish={this.props.updateFish}
                                deleteFish={this.props.deleteFish}
                            />
                        )
                }
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>
            </div>
        )
    }
}

export default Inventory