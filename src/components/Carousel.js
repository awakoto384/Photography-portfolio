import React from "react";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import pic from "../components/images/pic.png";
import picc from "../components/images/picc.png";
import piccc from "../components/images/piccc.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Portrait",
          subTitle: "hi",
          imgSrc: pic,
          link: "https://hanyueshi.myportfolio.com/work",
          selected: false,
        },
        {
          id: 1,
          title: "Life",
          subTitle: "hi1",
          imgSrc: picc,
          link: "https://en.wikipedia.org/wiki/Chestnut",
          selected: false,
        },
        {
          id: 2,
          title: "hehe",
          subTitle: "hi2",
          imgSrc: piccc,
          link: "https://en.wikipedia.org/wiki/Lavander",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

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
