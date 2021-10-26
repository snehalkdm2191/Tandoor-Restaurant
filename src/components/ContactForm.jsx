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
        <div className="form-group">
          <label>
            Name
            <input
              className="form-control"
              placeholder="Snehal"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Date
            <input
              className="form-control"
              type="date"
              name="task-date"
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label>
            Time
            <input
              className="form-control"
              type="date"
              name="task-date"
            ></input>
          </label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label>
            Email address
            <input
              type="email"
              className="form-control"
              placeholder="tom@example.com"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </label>
        </div>
      </div>
      <button className="btn btn-dark btn-book" onClick={onClickHandler}>
        Book
      </button>
    </form>
  );
}
