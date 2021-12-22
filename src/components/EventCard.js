import React from 'react';

const EventCard = (props) => {
    return (
        <li style={styles.container}>
            <img src={props.event.images[1].url} alt="event promotion" style={styles.img}/>
            <div style={styles.details}>
                <p style={styles.title}>{props.event.name}</p>
                <p style={styles.location}> {props.event._embedded.venues[0].city.name} ,{props.event._embedded.venues[0].country.countryCode}</p>
                <p style={styles.date}>{props.event.dates.start.localDate}</p>
            </div>
        </li>
    );
};

export default EventCard;

const styles = {
    container: {
        width: '336px',
        height: '360px',
        backgroundColor: '#F7F7F7',
        borderRadius: '20px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        margin: '20px',
        listStyleType: 'none',
    }, 

    details: {
        borderRadius: '0 0 20px 20px',
        display: 'grid', 
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '60px 40px',
        justifyContent: 'center',
        padding: '0 15px',
        marginBottom: '15px',
    },

    img: {
        width: '100%',
        height: '200px',
        borderRadius: '20px 20px 0 0'
    },

    title: {
        font: '900 18px lato',
        color: '#1F2B45',
        gridColumn: '1 / 3',
        alignSelf: 'start'
    },

    location: {
        font: '400 16px lato',
        alignSelf: 'end',
        color: '#636B7D'
    },

    date: {
        font: '700 16px lato',
        alignSelf: 'end', 
        color: '#636B7D'
    },
}