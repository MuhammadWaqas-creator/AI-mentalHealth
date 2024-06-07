import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Employment() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
     <div className="brief-into">
        <h1 className="headingstyle">
          Get In touch with consultant
        </h1>
        <p>
          Tel your employment status
        </p>
      </div>
      <div className="body-content">
        <div
          className="consultant-container"
          onClick={() => navigate("/payment")}
        >
          <div className="employe" />
          <div className="title">
            <h2>Employed</h2>
          </div>
        </div>
        <div className="chatbot-container" onClick={() => navigate("/consultants")}>
          <div className="unemploye" />
          <div className="title">
            <h2>Unemployed</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employment;
