import React, {Component} from 'react';
import "../css/RoomDetail.css";
import { Button } from 'reactstrap';

class HomePage extends Component {

    render() {
        return (
            <div>
                <h2 className='nameOfPage'>
                    Welcome in Flatly app
                </h2>
                <br/>
                <Button href="/offers/create" block color="success" size="lg"> Add new offer </Button>
                <Button href="/reservations" block color="success" size="lg"> Reservations for my offers </Button>
            </div>
        )
    }
}

export default HomePage;