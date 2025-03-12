import React from "react";
import { Container, Button } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

const SupportItem: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "4px",
      padding: "15px",
      marginBottom: "8px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "all 0.2s ease",
    }}
    onClick={() => (window.location.href = "/support")}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(102, 192, 244, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }}
  >
    <span>{text}</span>
    <BsChevronRight color="#fff" />
  </div>
);

const Support: React.FC = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Steam Support</h1>
      <h3 className="text-center mb-4">What do you need help with?</h3>

      <div className="text-center mb-5" style={{ color: "#acb2b8" }}>
        <p>
          Sign in to Steam account to review purchases, account status, and get
          personalized help.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="primary">Sign in to Steam</Button>
          <Button variant="outline-secondary">Help, I can't sign in</Button>
        </div>
      </div>

      <h4 className="mb-3">POPULAR PRODUCTS</h4>
      <div className="mb-5">
        {[
          "Counter-Strike 2",
          "Monster Hunter: World",
          "PUBG: BATTLEGROUNDS",
          "Dota 2",
        ].map((item, index) => (
          <SupportItem key={index} text={item} />
        ))}
      </div>

      <div>
        {[
          "Games, Software, etc.",
          "Purchases",
          "My Account",
          "Trading, Gifting, Market and Steam Points",
          "Steam Client",
          "Steam Community",
          "Steam Hardware",
          "I have charges from Steam that I didn't make",
        ].map((item, index) => (
          <SupportItem key={index} text={item} />
        ))}
      </div>
    </Container>
  );
};

export default Support;
