import React from 'react';

const EventCard = (props) => {
    return (
        <article style={styles.container}>
            <img src={props.event.images[1].url} alt="event promotion" style={styles.img}/>
            <p>{props.event.name}</p>
            <p>{props.event.dates.start.localDate}</p>
        </article>
    );
};

export default EventCard;

const styles = {
    container: {
        width: '336px',
        minHeight: '307',
        backgroundColor: '#F7F7F7',
        borderRadius: '20px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        margin: '10px'
    }, 

    img: {
        width: '100%',
        height: '200px',
        borderRadius: '20px 20px 0 0'
    }
}