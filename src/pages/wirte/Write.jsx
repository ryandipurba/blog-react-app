import React from "react";
import './write.css'

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        srcset=""
        className="write-img w-100"
      />
      <form action="" className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i class="write-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            name=""
            id="file-input"
            style={{ display: "none" }}
          />
          <input
            type="text"
            className="write-input"
            placeholder="Tittle"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-input write-text"
            placeholder="Tell your story"
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
}
