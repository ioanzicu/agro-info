import React from "react";
import { CardDeck, Card } from "react-bootstrap";

export interface ICard {
  id: string;
  imageUrl: string;
  title: string;
  text: string;
  position: string;
}

const testimonialsCards = [
  {
    id: "sacjnas",
    imageUrl:
      "https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&q=80",
    title: "Brad Jordon",
    text:
      "Being an experienced farmer, I know that the weather should not the underestimated in the agriculture business. Thanks to the Agro Info team, I have the most updated weather data from all locations with I need. The experienced cowboy recommends.",
    position: "Farmer and Cowboy"
  },
  {
    id: "sac22a1",
    imageUrl:
      "https://images.unsplash.com/photo-1477524076598-003de1c88dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&q=60",
    title: "Marta Limard",
    text:
      "Thanks to the Agro Info Platform, every day I am up to date with the weather data and I can take care of the flowers. Thanks to that, I can deliver beautiful flowers at the to the customers. Recommend!!!",
    position: "Independent Florist Entrepreneur"
  },
  {
    id: "s12f2a1",
    imageUrl:
      "https://images.unsplash.com/photo-1544098485-2a2ed6da40ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80",
    title: "Ricardo Alvarez",
    text:
      "The Agro Info is easy to tool to use for daily activity, not just agriculture. The developers are open for communication and oriented for permanent improvement of UI/UX experience.",
    position: "SEO at Agro Mondo"
  }
];

const Testemonials: React.FC = () => {
  return (
    <div className="m-5">
      <h1 className="text-center">Testemonials</h1>
      <CardDeck className="pt-3 pb-3">
        {testimonialsCards &&
          testimonialsCards.map(
            ({ id, imageUrl, title, text, position }: ICard) => (
              <Card key={id} className="mt-3 mb-3 mr-3 ml-3">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{position}</small>
                </Card.Footer>
              </Card>
            )
          )}
      </CardDeck>
    </div>
  );
};

export default Testemonials;
