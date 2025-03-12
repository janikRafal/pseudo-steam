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

interface FeatureItemProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Col md={4} className="mb-4">
    <div
      className="feature-item p-3 text-center"
      style={{
        transition: "all 0.3s ease",
        cursor: "pointer",
        borderRadius: "8px",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
        e.currentTarget.style.backgroundColor = "rgba(102, 192, 244, 0.1)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 192, 244, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="feature-icon mb-3"
        style={{ fontSize: "48px", color: "#66c0f4" }}
      >
        <Icon />
      </div>
      <h3 className="h5 mb-2 text-light">{title}</h3>
      <p style={{ color: "#acb2b8" }}>{description}</p>
    </div>
  </Col>
);

const About: React.FC = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Features</h1>
      <Row>
        <FeatureItem
          icon={BsChatDots}
          title="Steam Chat"
          description="Talk with friends or groups via text or voice without leaving Steam. Videos, Tweets, GIFs and more are supported; use wisely."
        />
        <FeatureItem
          icon={FaGamepad}
          title="Game Hubs"
          description="Everything about your game, all in one place. Join discussions, upload content, and be the first to know about new updates."
        />
        <FeatureItem
          icon={BsMegaphone}
          title="Steam Broadcast"
          description="Stream your gameplay live with the click of a button, and share your game with friends or the rest of the community."
        />
        <FeatureItem
          icon={BsTools}
          title="Steam Workshop"
          description="Create, discover, and download player-created mods and cosmetics for nearly 1,000 supported games."
        />
        <FeatureItem
          icon={BsPhone}
          title="Available on Mobile"
          description="Access Steam anywhere from your iOS or Android device with the Steam mobile app."
        />
        <FeatureItem
          icon={BsPuzzle}
          title="Early Access to Games"
          description="Discover, play, and get involved with games as they evolve. Be the first to see what's coming and become part of the process."
        />
        <FeatureItem
          icon={BsGlobe}
          title="Multilingual"
          description="Creating a global community is important to us, that's why our client supports 28 languages and counting."
        />
        <FeatureItem
          icon={BsWallet2}
          title="Purchase Made Easy"
          description="Our storefront supports 100+ payment methods across over 35 currencies, giving you the flexibility to pay how you want."
        />
        <FeatureItem
          icon={BsController}
          title="Controller Support"
          description="Steam encourages developers to include controller support in their games including PlayStation, Xbox, and Nintendo controllers."
        />
      </Row>

      <div className="text-center mt-5">
        <h4 className="mb-4">And so much more...</h4>
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
