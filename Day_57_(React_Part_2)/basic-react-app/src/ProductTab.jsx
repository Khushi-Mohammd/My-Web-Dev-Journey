import Product from "./Product";

function ProductTab() {
  // let features = [
  //   <li>"durable"</li>,
  //   <li>"strong"</li>,
  //   <li>"stylish"</li>,
  //   <li>"fast"</li>,
  // ];

  let features = ["durable", "strong", "stylish", "fast"];
  // let features2 = { a: "durable", b: "strong", c: "stylish", d: "fast" };
  return (
    <>
      <Product title="laptop" price={52000} />
      <Product title="charger" price={800} />
      <Product title="mobile" price={18000} />
    </>
  );
}

export default ProductTab;
