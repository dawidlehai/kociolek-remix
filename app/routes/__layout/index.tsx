import type { LinksFunction } from "@remix-run/node";

import { useObserveRef } from "~/routes/__layout";
import Section from "~/components/layout/Section";
import Hero, { links as heroLinks } from "~/components/home/Hero";

export default function Index() {
  const { observeRef } = useObserveRef(); // set observeRef for hero section

  return (
    <>
      <Section
        className="hero"
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
