import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row change-location">
          <div className="col-auto">
            <label for="change-city" className="col-form-label">
              Change your location
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-auto search-button">
            <input
              type="submit"
              className="btn btn-info w-100"
              value="Search"
            />
          </div>
          <div className="col-auto">
            <input
              type="submit"
              className="btn btn-info w-100"
              value="Current Location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
