import React from "react";
import './styles.css';
import { Section } from "../../Section";
import { TitleSections } from "../../TitleSections";
import { ProjetosContent } from "../ProjetosContent";

export const ProjetoSection = () => {
    return(
        <Section classImg="img4 d-flex pt-5" content={<ProjetosContent />}>
            <TitleSections text="Projetos" />
        </Section>
    );
};