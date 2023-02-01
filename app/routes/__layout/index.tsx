import type { LinksFunction } from "@remix-run/node";

import { useObserveRef } from "~/routes/__layout";
import Section from "~/components/layout/Section";
import Hero, { links as heroLinks } from "~/components/home/Hero";

export default function Index() {
  const { observeRef } = useObserveRef(); // set observeRef for hero section

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
    </>
  );
}

export const links: LinksFunction = () => [...heroLinks()];
