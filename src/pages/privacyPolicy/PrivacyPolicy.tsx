import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { GB, PL } from "country-flag-icons/react/3x2";
import { ENGLISH_DESCRIPTION, POLISH_DESCRIPTION } from "./data";
import './style.css';

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "pl">("en");

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Privacy Policy Agreement</h1>

      <div className="privacy-container">
        <div className="language-selector">
          <GB
            className="flag-icon"
            onClick={() => setLanguage("en")}
          />
          <PL
            className="flag-icon"
            onClick={() => setLanguage("pl")}
          />
        </div>

        <div className="policy-content">
          {language === "en" ? ENGLISH_DESCRIPTION : POLISH_DESCRIPTION}
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
