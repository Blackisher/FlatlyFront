import React from 'react';
import '../css/ListOfReservations.css'
import {connect} from "react-redux";
import {withRouter} from "react-router";
import ListOfReservations from "./ListOfReservations";
import {bookingsLoaded} from "../redux/actions/bookingsActions";

import {idUser} from "./AuthHelperMethods"

class AllReservations extends React.Component {
    componentDidMount() {
        fetch(`https://flatly-thursday.us-east-1.elasticbeanstalk.com/bookings?id=${idUser}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'security_header': 'someExtremelyRandomCode!@#$%^&*()',
                }
            }
        ).then((data) => data.json())
            .then((reservations) => {
                console.log(reservations)
                this.props.bookingsLoaded(reservations);
        });
    }

    render() {
        const bookings = this.props.bookings;
        return (
            <div>
                {bookings && <ListOfReservations reservations={bookings}
                                                 forCurrentFlat={0}
                                                 nameOfFlat={""}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookings: state.bookings
    }
};

const mapDispatchToProps = (dispatch) => ({
    bookingsLoaded: bookings => dispatch(bookingsLoaded(bookings)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AllReservations))
