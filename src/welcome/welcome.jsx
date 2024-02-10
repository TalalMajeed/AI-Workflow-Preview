import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "./welcome.css";
import { useState } from "react";
//Import Image
import logo from "../assets/logo.png";

const C1 = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "var(--primary)",
    width: 350,
    height: "50px",
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 400,
    "&:hover": {
        backgroundColor: "var(--primary-dark)",
    },
}));

export default function Welcome() {
    return (
        <div className="container-welcome">
            <div className="box-welcome">
                <img className="logo-welcome" src={logo} alt="logo" />
                <div className="title-welcome">AI Workflow Generator</div>
                <div className="content-welcome">
                    Welcome to our AI Based Web Application!
                </div>
                <div className="content-welcome">
                    This application uses Generative AI to create Work Flows for
                    Coding Projects and Applications!
                </div>
                <div className="content-welcome">
                    Project Created by the TechFlow Team at SEECS NUST -ISB
                </div>
                <div className="spacer"></div>
                <C1 variant="contained" href="">
                    Get Started
                </C1>
                <div className="spacer"></div>
                <div className="credits-welcome">
                    ©TechFlow - SEECS - GenAI 2024
                </div>
            </div>
        </div>
    );
}
