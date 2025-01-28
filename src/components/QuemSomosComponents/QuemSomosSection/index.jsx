import React from "react";
import './styles.css';
import { Section } from "../../Section";
import { TitleSections } from "../../TitleSections";
import { QuemSomosContent } from "../QuemSomosContent";

export const QuemSomosSection = () => {
    return(
        <Section classImg="img2 d-flex pt-5" content={<QuemSomosContent />}>
            <TitleSections text="Quem somos" />
        </Section>
    );
};