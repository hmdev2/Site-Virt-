import React from "react";
import './styles.css';
import { Section } from "../../Section";
import { Header } from "../Header";
import { LogoSection } from "../LogoSection";

export const InicioSection = () => {
    return(
    <Section id="inicio" classImg="img1">
        <Header />
        <LogoSection />
    </Section>
    );
};