import { useState } from "react";
import { Container, Row, Col, Overlay, Popover, Button } from "react-bootstrap";
import "./style.css";

const GAMES = [
  {
    image: "/pseudo-steam/factorio.jpg",
    title: "Factorio",
    description: "Automate production in this addictive factory building game",
  },
  {
    image: "/pseudo-steam/kingdom-come.png",
    title: "Kingdom Come: Deliverance",
    description:
      "Experience medieval RPG in a historically accurate open world",
  },
  {
    image: "/pseudo-steam/metin2.jpg",
    title: "Metin2",
    description: "Classic MMORPG with martial arts and magic",
  },
  {
    image: "/pseudo-steam/minecraft.avif",
    title: "Minecraft",
    description: "Build, explore, and survive in a blocky world",
  },
  {
    image: "/pseudo-steam/rimworld.jpg",
    title: "RimWorld",
    description: "Sci-fi colony sim driven by an intelligent AI storyteller",
  },
  {
    image: "/pseudo-steam/tibia.webp",
    title: "Tibia",
    description: "One of the oldest MMORPGs with a dedicated community",
  },
];
const Store = (): JSX.Element => {
  const [activePopover, setActivePopover] = useState<number | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (index: number, element: HTMLElement) => {
    setActivePopover(index);
    setTarget(element);
  };

  const handleMouseLeave = () => {
    // Add delay to check if mouse moved to popover
    setTimeout(() => {
      const popover = document.querySelector(".game-popover");
      if (!popover?.matches(":hover")) {
        setActivePopover(null);
      }
    }, 100);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-light">Featured & Recommended</h2>
      <Row>
        {GAMES.map((game, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <div
              className="game-card"
              onMouseEnter={(e) => handleMouseEnter(index, e.currentTarget)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="w-100 game-image"
                src={game.image}
                alt={game.title}
              />
              <h4 className="mt-2 text-light">{game.title}</h4>
            </div>

            <Overlay
              show={activePopover === index}
              target={target}
              placement="right"
            >
              <Popover
                id={`popover-${index}`}
                className="game-popover"
                onMouseLeave={() => setActivePopover(null)}
                onMouseEnter={() => setActivePopover(index)}
              >
                <Popover.Body>
                  <h5 className="text-light">{game.title}</h5>
                  <p className="game-popover-description">{game.description}</p>
                  <Button variant="primary" className="mb-2">
                    Add to Cart
                  </Button>
                  <Button variant="secondary">Add to Wishlist</Button>
                </Popover.Body>
              </Popover>
            </Overlay>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
