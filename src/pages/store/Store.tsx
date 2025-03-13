import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Overlay,
  Popover,
  Tabs,
  Tab,
} from "react-bootstrap";
import "./style.css";
import { FREE_GAMES, POPULAR_GAMES, UPCOMING_GAMES } from "./data";

const Store = (): JSX.Element => {
  const [activePopover, setActivePopover] = useState<number | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (index: number, element: HTMLElement) => {
    setActivePopover(index);
    setTarget(element);
  };

  const handleMouseLeave = () => {
    setActivePopover(null);
  };

  // Funkcja renderująca grid z grami na podstawie przekazanej tablicy
  const renderGameGrid = (games: typeof POPULAR_GAMES) => (
    <Row>
      {games.map((game, index) => (
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
            <Popover id={`popover-${index}`} className="game-popover">
              <Popover.Body>
                <h5 className="text-light">{game.title}</h5>
                <p className="text-secondary mb-2">
                  {game.developer} • {game.releaseDate}
                </p>
                <p className="game-popover-description">{game.description}</p>
                <div className="mb-2">
                  {game.tags.map((tag, i) => (
                    <span key={i} className="badge bg-secondary me-1 mb-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">{game.price}</span>
                  <span className="badge bg-info">{game.ageRating}</span>
                </div>
                <div className="mt-2">
                  <small className="text-secondary">
                    {game.features.join(" • ")}
                  </small>
                </div>
              </Popover.Body>
            </Popover>
          </Overlay>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-light">Featured & Recommended</h2>
      <Tabs defaultActiveKey="popular" id="store-tabs" className="mb-3">
        <Tab eventKey="popular" title="Popular New Titles">
          {renderGameGrid(POPULAR_GAMES)}
        </Tab>
        <Tab eventKey="upcoming" title="Upcoming">
          {renderGameGrid(UPCOMING_GAMES)}
        </Tab>
        <Tab eventKey="free" title="Emerging Free Titles">
          {renderGameGrid(FREE_GAMES)}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Store;
