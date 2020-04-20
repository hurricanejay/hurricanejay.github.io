import React from 'react';
import CardInfo from '../Components/CardInfo';
// import test from '../assets/images/heirloom_salad.png';

function Card(props) {
    // console.log("props", props.item.imgSrc)
    return(
        <div className="d-inline-block j-card" onClick={()=> props.click(props.item)}>
            <img className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}

        </div>
    )
}

export default Card;