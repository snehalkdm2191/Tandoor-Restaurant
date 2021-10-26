import { useRef } from "react";

import defaultUrl from "../assets/images/image-placeholder.png";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type } = options;

  // Properties
  const inputReference = useRef(null);

  switch (key) {
    case "type":
      return (
        <div className="form-group">
          {label}
          <select
            className="form-control"
            name="type"
            id="type"
            ref={inputReference}
            onChange={() => onChange(key, inputReference.current.value)}
          >
            <option value="Dish">Select Category</option>
            <option value="Appetizers">Appetizers</option>
            <option value="Vegetarian">Vegetarian Delicacies</option>
            <option value="Tandoori">Tandoori Specialties</option>
            <option value="Chicken">Chicken Specialties</option>
            <option value="Lamb">Lamb and Beef Specialties</option>
            <option value="Seafood">Seafood Specialties</option>
            <option value="Desserts">Tempting Desserts</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>
      );
    case "imgUrl":
      return (
        <div className="form-group">
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
          <div className="frm-img">
            <img
              className="frm-img"
              src={state === "" ? defaultUrl : state}
              alt="User content"
            />
          </div>
        </div>
      );
    default:
      return (
        <div className="form-group">
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
