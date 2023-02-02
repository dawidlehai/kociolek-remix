import type { LinksFunction } from "@remix-run/node";

import styles from "./About.css";

export default function About() {
  return (
    <>
      <hgroup className="about__header grid--span">
        <p className="about__subheading subheading">O nas</p>
        <h2 className="about__heading heading-secondary">
          Pyszne jedzenie w samym sercu Wyżyn
        </h2>
      </hgroup>
      <p className="about__description">
        Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu
        Kultury “Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce
        spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową
        wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe,
        a także zamówić wybrane potrawy i dania garmażeryjne na wynos.
      </p>
      <p className="about__description">
        Kociołek oferuje organizację i obsługę wesel, rocznic, urodzin, chrzcin,
        uroczystości z okazji przyjęcia pierwszej komunii świętej, spotkań
        biznesowych, a także styp w nowo wyremontowanych salach. Zaplecze bufetu
        stanowi dobrze wyposażona kuchnia oraz doświadczona kadra kucharzy i
        kelnerów. Skontaktuj się z nami, a wspólnie ustalimy wszelkie szczegóły
        Twojej imprezy!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.885507415805!2d18.031535315579262!3d53.11224809992137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313031b9c823f%3A0x4841d8b74f0165b0!2sKocio%C5%82ek%20-%20Agnieszka%20Tomaszewska-Le!5e0!3m2!1sen!2spl!4v1665413028797!5m2!1sen!2spl"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="about__map grid--span"
        title="Mapy Google z lokalizacją firmy"></iframe>
      <section className="owner background--main grid--span flex flex--center animate--from-right">
        <picture>
          <source
            type="image/webp"
            srcSet="/img/agnieszka-tomaszewska-le-w180.webp 180w, /img/agnieszka-tomaszewska-le-w300.webp 300w, /img/agnieszka-tomaszewska-le-w600.webp 600w"
            sizes="(max-width: 968px) 180px, 300px"
          />
          <img
            src="/img/agnieszka-tomaszewska-le-w600.jpg"
            srcSet="/img/agnieszka-tomaszewska-le-w180.jpg 180w, /img/agnieszka-tomaszewska-le-w300.jpg 300w, /img/agnieszka-tomaszewska-le-w600.jpg 600w"
            sizes="(max-width: 968px) 180px, 300px"
            style={{ maxWidth: "30rem", aspectRatio: "6/9" }}
            className="owner__image"
            loading="lazy"
            decoding="async"
            alt="Uśmiechnięta kobieta po 40-stce w beżowym stroju."
          />
        </picture>
        <div className="owner__text-group">
          <div className="owner__text-group-container">
            <h3 className="owner__heading heading-tertiary">
              A wszystko zaczęło się od Agnieszki...
            </h3>
            <blockquote className="owner__quote">
              Pomysł na otwarcie własnego biznesu chodził mi już po głowie od
              jakiegoś czasu. Lata doświadczenia w zawodzie kucharza i setki
              zadowolonych klientów, którzy wracają do mnie bez względu na to
              gdzie pracuję, pozwoliło mi uwierzyć, że prowadzenie własnej firmy
              jest możliwe. Po dwóch dekadach pracy jako kucharz wreszcie mi się
              to udało i mogę eksperymentować w kuchni jak nigdy dotąd!
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
