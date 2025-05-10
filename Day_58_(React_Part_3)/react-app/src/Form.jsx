function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
}

function Form() {
  return (
    <form>
      <input type="text" placeholder="Write Something" />
      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
