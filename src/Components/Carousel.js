import React from 'react';
import plantify from '../assets/images/plantify.png';
import goodspace from '../assets/images/goodspace.png';

import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
    state = {
        items: [
            {
                id: 0,
                title: "Plantify",
                subTitle: "A plant app for plant owners to keep track of their plants and watering care",
                imgSrc: plantify,
                link: "https://www.youtube.com/watch?v=ntkYMjSWPzM&t=2s",
                selected: false
            },

            {
                id: 1,
                title: "The Good Space",
                subTitle: "A community platform inspired by COVID-19 and Craigslist",
                imgSrc: goodspace,
                link: "https://www.youtube.com/watch?v=W91r_k2rT0E&t=2s",
                selected: false
            },
            // {
            // id: 2,
            // title: "Something3",
            // subTitle: "sub something3",
            // imgSrc: townhouse,
            // link: "http://www.behance.net/jaywenphoto",
            // selected: false
            // },
        ]
    }

    handleCardClick = (id) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;