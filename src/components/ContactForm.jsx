import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");

  // This looks complex, refactor the alert message into a const to make easy to read:
  // Also use `` and ${} to compose complex messages
  // If you need to add formating like new lines, then alert is not the right answer,
  // make your own modal.
  function onClickHandler(e) {
    const messageGood = `Hi ${name}, + Booking confirmed, we are please to inform your request was received.`;
    const messageBad = "lease fill the form...";

    name.trim() !== "" ? alert(messageGood) : alert(messageBad);
  }

  // Abstraction -1
  // Create custom input components to abstract the input and label tags
  return (
    <form className="row">
      <div className="col-md-6">
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Snehal"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Date</label>
          <input
            className="form-control"
            type="date"
            id="task-date"
            name="task-date"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Time</label>
          <input
            className="form-control"
            type="date"
            id="task-date"
            name="task-date"
          ></input>
        </div>
      </div>
      <div className="col-md-6">
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="tom@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-dark btn-book" onClick={onClickHandler}>
        Book
      </button>
    </form>
  );
}
