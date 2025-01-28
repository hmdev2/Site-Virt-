import React from "react";

export const GoogleMapsEmbed = () => {
  return (
    <iframe
      title="Mapa mostrando Hangar Business Park"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.807997142508!2d-38.3548647!3d-12.9200587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71617a9725611c9%3A0x39f4f9079dd421e1!2sHangar%20Business%20Park!5e0!3m2!1spt-BR!2sbr!4v1725940644847!5m2!1spt-BR!2sbr"
      width="300"
      height="225"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2"
    ></iframe>
  );
};
