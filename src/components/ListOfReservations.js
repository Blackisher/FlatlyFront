import React from 'react';
import '../css/ListOfReservations.css'
import '../css/Login.css'
import * as moment from 'moment';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, Comparator  } from 'react-bootstrap-table2-filter';
import  { dateFilter } from 'react-bootstrap-table2-filter';
import { selectFilter } from 'react-bootstrap-table2-filter';

const ListOfReservations  = ({
                                 reservations,
                                 forCurrentFlat,
                                 nameOfFlat
                             }) => {
    let header = forCurrentFlat === 0 ? "List of reservations" : "Reservations for flat " + nameOfFlat;
    const headerStyle = {
        color: '#e2e3e5',
        backgroundColor: '#343a40'
    };
    const selectOptions = {
        'T': 'No',
        'F': 'Yes'
    };

    function activeFormatter(cell) {
        if (cell === "F") {
            return (
                <p className="message">Yes</p>
            );
        }
        return (
            <p>No</p>
        );

    }
    const dateFilter1 = dateFilter({
        defaultValue: { date: moment().format('YYYY-MM-01'), comparator: Comparator.GT }  // default value
    });


    function flatDetailFormatter(cell) {
        return (
            <a href={`/offers/edit/${cell}`}>{cell}</a>
        );
    }

    function dateFormatter(cell) {
        return (
            <p>{moment(cell).format('DD-MM-YYYY')}</p>
        );
    }
    const columns = [{
        dataField: 'item_id',
        text: 'Flat',
        headerStyle: headerStyle,
        filter: textFilter(),
        formatter: flatDetailFormatter
    }, {
        dataField: 'start_date',
        text: 'Date of arrival',
        headerStyle: headerStyle,
        filter: forCurrentFlat === 0 ? dateFilter1 : dateFilter(),
        formatter: dateFormatter
    }, {
        dataField: 'end_date',
        text: 'Date of leaving',
        headerStyle: headerStyle,
        filter: dateFilter(),
        formatter: dateFormatter
    }, {
        dataField: 'active',
        text: 'Cancelled',
        headerStyle: headerStyle,
        filter: selectFilter({
            options: selectOptions
        }),
        formatter: activeFormatter
    }];


    const expandRow = {
        renderer: row => (
            <div className={'tableExpandRow'}>
                <p>{ `Number of nights - ${moment.duration(moment(row.end_date,"YYYY-MM-DD").
                                    diff(moment(row.start_date,"YYYY-MM-DD"))).asDays()}` }</p>
                <p>{`Login of main guest - ${row.owner_of_booking}`}  </p>
            </div>
        ),
    };
    const rowStyle = () => {
        const style = {};
        style.border_color='#818182';
        style.color = '#e2e3e5';
        return style;
    };

    const defaultSorted = [{
        dataField: 'start_date',
        order: 'desc'
    }];

    return (
        <div>
            <h2 className='nameOfPage'>
                {header}
            </h2>
            <br/>
            <BootstrapTable keyField='id' data={ reservations } defaultSorted={ defaultSorted } columns={ columns }
                            filter={ filterFactory() } rowStyle={ rowStyle }  expandRow={ expandRow } />
        </div>
    );
};

export default ListOfReservations;