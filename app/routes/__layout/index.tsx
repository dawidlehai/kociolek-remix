import { useObserveRef } from "~/routes/__layout";

export default function Index() {
  const { observeRef } = useObserveRef();

  return (
    <>
      <div className="div1" ref={observeRef}>
        Div1
      </div>
      <div className="div2">Div2</div>
    </>
  );
}
