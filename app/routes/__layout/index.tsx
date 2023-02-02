import type { LinksFunction } from "@remix-run/node";

import { useObserveRef } from "~/routes/__layout";
import Section from "~/components/layout/Section";
import Hero from "~/components/home/Hero";
import Offer from "~/components/home/Offer";
import Takeaway from "~/components/home/Takeaway";
import Menu from "~/components/home/Menu";
import About from "~/components/home/About";
import Contact from "~/components/home/Contact";

import homeStyles from "~/styles/home.css";

export default function Index() {
  const { observeRef } = useObserveRef();

  const offerBackground = (
    <picture className="offer__bg-image">
      <source
        type="image/webp"
        srcSet="/img/wedding-w960.webp 960w, /img/wedding-w1920.webp 1920w, /img/wedding-w3840.webp 3840w"
      />
      <img
        src="/img/wedding-w3840.webp"
        srcSet="/img/wedding-w960.jpg 960w, /img/wedding-w1920.jpg 1920w, /img/wedding-w3840.jpg 3840w"
        sizes="(max-width: 960px) 960px, 1920px"
        style={{ width: "100%", aspectRatio: "128/89" }}
        loading="lazy"
        decoding="async"
        alt="Uroczystość, impreza okolicznościowa, kieliszki, toast"
      />
    </picture>
  );

  return (
    <>
      <Section
        sectionClass="hero curve curve--bottom curve--bottom-shadow-line curve--bottom-shadow-line-gradient-1"
        containerClass="grid grid--2-columns grid--gap-medium"
        width="wide"
        background="main"
        id="hero"
        observeRef={observeRef}>
        <Hero />
      </Section>

      <Section
        sectionClass="offer"
        containerClass="grid grid--gap-medium vertical-padding--large"
        id="na-miejscu"
        pictureElement={offerBackground}>
        <Offer />
      </Section>

      <Section
        sectionClass="takeaway vertical-padding--large curve curve--top curve--top-shadow-line curve--bottom-shadow-line-gradient-2"
        containerClass="takeaway__container grid grid--2-columns grid--gap-medium"
        id="na-wynos">
        <Takeaway />
      </Section>

      <Section
        sectionClass="menu vertical-padding--large"
        containerClass="menu__container grid grid--2-columns grid--gap-medium"
        id="menu">
        <Menu />
      </Section>

      <Section
        sectionClass="about vertical-padding--large"
        containerClass="about__container grid grid--2-columns grid--gap-medium"
        id="o-nas">
        <About />
      </Section>

      <Section
        sectionClass="contact vertical-padding--large curve curve--bottom curve--bottom-shadow-line curve--bottom-shadow-line-gradient-all"
        containerClass="contact__container grid grid--2-columns"
        id="kontakt">
        <Contact />
      </Section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: homeStyles },
];
