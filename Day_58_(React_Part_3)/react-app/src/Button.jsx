function handleClick(event) {
  console.log("Hello");
  console.log(event);
}

function handleMouseOver() {
  console.log("Bye");
}

function handleDblClick() {
  console.log("You double clicked me");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Hello</button>

      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas
        obcaecati neque rem ullam accusantium aspernatur excepturi inventore
        doloremque, optio molestiae laudantium, fuga nobis dolore dolorem
        pariatur tempore officia maxime.
      </p>

      <button onDoubleClick={handleDblClick}>Double Click</button>
    </div>
  );
}
