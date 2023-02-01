import type { LinksFunction } from "@remix-run/node";

import { useObserveRef } from "~/routes/__layout";
import Section from "~/components/layout/Section";
import Hero, { links as heroLinks } from "~/components/home/Hero";
import Offer, { links as offerLinks } from "~/components/home/Offer";
import Takeaway, { links as takeawayLinks } from "~/components/home/Takeaway";
import Menu, { links as menuLinks } from "~/components/home/Menu";

export default function Index() {
  const { observeRef } = useObserveRef();

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
        id="na-miejscu">
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
    </>
  );
}

export const links: LinksFunction = () => [
  ...heroLinks(),
  ...offerLinks(),
  ...takeawayLinks(),
  ...menuLinks(),
];
