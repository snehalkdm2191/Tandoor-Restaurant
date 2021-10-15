import { useRef } from "react";

import defaultUrl from "../assets/images/image-placeholder.png";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type } = options;

  // Properties
  const inputReference = useRef(null);

  switch (key) {
    case "type":
      return (
        <div class="form-group">
          {label}
          <select
            class="form-control"
            name="type"
            id="type"
            ref={inputReference}
            onChange={() => onChange(key, inputReference.current.value)}
          >
            <option value="Dish">Select Category</option>
            <option value="Dish">Dish</option>
            <option value="Drink">Drink</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
      );
    case "imgUrl":
      return (
        <div class="form-group">
          {label}
            <input
              className="form-control"
              onChange={() => onChange(key, inputReference.current.value)}
              placeholder={placeholder}
              ref={inputReference}
              type={type}
              value={state}
              required
            />
            <br />
            <div className="frm-img"><img className="frm-img" src={state === "" ? defaultUrl : state} alt="User content" /></div>
        </div>
      );
    default:
      return (
        <div class="form-group">
          {label}
          <input
            className="form-control"
            onChange={() => onChange(key, inputReference.current.value)}
            placeholder={placeholder}
            ref={inputReference}
            type={type}
            value={state}
            required
          />
        </div>
      );
  }
}
