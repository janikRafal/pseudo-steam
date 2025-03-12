import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IconType } from "react-icons";
import {
  BsChatDots,
  BsController,
  BsGlobe,
  BsMegaphone,
  BsPhone,
  BsPuzzle,
  BsTools,
  BsWallet2,
} from "react-icons/bs";
import { FaGamepad } from "react-icons/fa";
import './style.css';

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<Props> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Col md={4} className="mb-4">
    <div className="feature-item p-3 text-center rounded bg-dark bg-opacity-20 hover-effect">
      <div className="feature-icon mb-3 text-primary">
        <Icon />
      </div>
      <h3 className="h5 mb-2 text-light">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  </Col>
);


const FEATURES = [
  {
    icon: BsChatDots,
    title: "Steam Chat",
    description: "Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely.",
  },
  {
    icon: FaGamepad,
    title: "Game Hubs",
    description: "Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates.",
  },
  {
    icon: BsMegaphone,
    title: "Steam Broadcast",
    description: "Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community.",
  },
  {
    icon: BsTools,
    title: "Steam Workshop",
    description: "Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games.",
  },
  {
    icon: BsPhone,
    title: "Available on Mobile",
    description: "Access Steam anywhere from your iOS or Android device with the Steam mobile app.",
  },
  {
    icon: BsPuzzle,
    title: "Early Access to Games",
    description: "Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process.",
  },
  {
    icon: BsGlobe,
    title: "Multilingual",
    description: "Creating a global community is important to us, that's why our client supports 28 languages and counting.",
  },
  {
    icon: BsWallet2,
    title: "Purchase Made Easy",
    description: "Our storefront supports 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want.",
  },
  {
    icon: BsController,
    title: "Controller Support",
    description: "Steam encourages developers to include controller support in their games including PlayStation, Xbox, and Nintendo controllers.",
  },
];
const About: React.FC = () => {


  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Features</h1>
      <Row>
        {FEATURES.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Row>

      <div className="text-center mt-5">
        <h2 className="mb-4">And so much more...</h2>
        <p className="text-muted mb-4">
          Earn achievements, read reviews, and get personalized recommendations.
        </p>
        <Button variant="primary" size="lg">
          INSTALL STEAM
        </Button>
      </div>
    </Container>
  );
};

export default About;
