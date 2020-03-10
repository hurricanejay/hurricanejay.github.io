import React from 'react';
// import hierloom_salad from '../assets/images/hierloom_salad.png';
// import ice_cream from '../assets/images/ice_cream.jpg';
// import townhouse from '../assets/images/townhouse.jpg'
import test from '../assets/heirloom_salad.png'
import asd from "../assets/ice_cream.jpg"

import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
    state = { 
        items: [
            {
                id: 0,
                title: "Something",
                subTitle: "sub something",
                // imgSrc: hierloom_salad,
                imgSrc: "../assets/heirloom_salad.png",
                link: "www.behance.net/jaywenphoto",
                selected: false
            },

            {
                id: 1,
                title: "Something 2",
                subTitle: "sub something 2",
                // imgSrc: ice_cream,
                imgSrc: "../assets/ice_cream.jpg",
                link: "www.behance.net/jaywenphoto",
                selected: false
            },
            {
                id: 2,
                title: "Something3",
                subTitle: "sub something3",
                // imgSrc: townhouse,
                imgSrc: "../assets/townhouse.jpg",
                link: "www.behance.net/jaywenphoto",
                selected: false
            },
        ]
    }

    handleCardClick = (id) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        console.log("items array", items)
        return items.map(item => {
            console.log("individual item", item)
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;