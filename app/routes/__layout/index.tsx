import { useObserveRef } from "~/routes/__layout";
import Section from "~/components/layout/Section";

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
        Hero
      </Section>
    </>
  );
}
