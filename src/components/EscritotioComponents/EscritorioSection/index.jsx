import React from "react";
import './styles.css';
import { Section } from "../../Section";
import { TitleSections } from "../../TitleSections";
import { EscritorioContent } from "../EscritorioContent";

export const EscritorioSection = () => {
 return(
    <Section classImg="img3 d-flex pt-5" content={<EscritorioContent />}>
        <TitleSections text="Escritório" />
    </Section>
 );
};