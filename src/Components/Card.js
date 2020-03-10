import React from 'react';
import CardInfo from '../Components/CardInfo';
import test from '../assets/heirloom_salad.png';

function Card(props) {
    console.log("props", props.item.imgSrc)
    return(
        <div className="d-inline-block g-card" onClick={(event) => props.click(props.item)}>
            {/* <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} /> */}
            {/* <img src={require(`./${props.item.imgSrc}`)} alt="asdasd"/> */}
            <img src={require('./../assets/heirloom_salad.png')} alt="asdasd"/>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}

        </div>
    )
}

export default Card;