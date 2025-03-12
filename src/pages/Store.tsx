import { Carousel, Container } from "react-bootstrap";
import "../styles/carousel.css";

function Store() {
  const games = [
    {
      image: "/factorio.jpg",
      title: "Factorio",
      description:
        "Automate production in this addictive factory building game",
    },
    {
      image: "/kingdom-come.png",
      title: "Kingdom Come: Deliverance",
      description:
        "Experience medieval RPG in a historically accurate open world",
    },
    {
      image: "/metin2.jpg",
      title: "Metin2",
      description: "Classic MMORPG with martial arts and magic",
    },
    {
      image: "/minecraft.avif",
      title: "Minecraft",
      description: "Build, explore, and survive in a blocky world",
    },
    {
      image: "/rimworld.jpg",
      title: "RimWorld",
      description: "Sci-fi colony sim driven by an intelligent AI storyteller",
    },
    {
      image: "/tibia.webp",
      title: "Tibia",
      description: "One of the oldest MMORPGs with a dedicated community",
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-light">Featured & Recommended</h2>
      <Carousel interval={5000} className="custom-carousel">
        {games.map((game, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={game.image}
              alt={game.title}
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Carousel.Caption
              style={{
                background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8))",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Store;
