import React, {Component} from 'react';
import "../css/App.css";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import MyProfile from "./MyProfile";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ListOfActiveRooms from "./ListOfActiveRooms";
import ListOfNonActiveRooms from "./ListOfNonActiveRooms";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../redux/reducers/reducer'
import { PublicRoute, PrivateRoute, PrivateRouteWithMode } from "./CustomRoutes";
import RoomDetailPage from "./RoomDetailPage";
import ReservationsOfFlat from "./ReservationsOfFlat";
import AllReservations from "./AllReservations";

const store = createStore(rootReducer, {}, composeWithDevTools());

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            developers: [],
            isLoading: false
        };
    }

    render() {
        return (
            <Provider store={store}>
            <Router>
                <Switch>
                    <PublicRoute exact component={LoginPage} path="/"/>

                    <PrivateRoute exact component={HomePage} path="/home"/>

                    <PrivateRoute exact component={MyProfile} path="/profile"/>

                    <PrivateRoute exact component={ReservationsOfFlat} path="/reservations/flat/:id"/>

                    <PrivateRoute exact component={AllReservations} path="/reservations/"/>

                    <PrivateRoute exact component={ListOfActiveRooms} path="/offers"/>

                    <PrivateRoute exact component={ListOfNonActiveRooms} path="/offers/nonactive"/>

                    <PrivateRouteWithMode component={RoomDetailPage} path="/offers/edit/:id" mode={'edit'}/>

                    <PrivateRouteWithMode component={RoomDetailPage} path="/offers/create" mode={'create'}/>

                </Switch>
            </Router>
            </Provider>
        );
    }
}

export default App;
