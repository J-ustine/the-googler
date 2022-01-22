import React, { useState } from "react";
import "../style/Tags.css";

export default function Tags(props) {
  const [tags, setTags] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [tag, setTag] = useState("");

  function addTags() {
    setIsActive(true);
  }

  function saveTags() {
    setTags([...tags, tag]);
    setIsActive(false);
    setTag("");
  }

  return !isActive ? (
    <div>
      <div>
        {tags.map((item, index) => (
          <span className="tag" key={index}>
            #{item}{" "}
          </span>
        ))}
      </div>
      <button onClick={addTags} className="add-tags">
        Add Tags
      </button>
    </div>
  ) : (
    <div>
      <div>
        {tags.map((item, index) => (
          <span className="tag" key={index}>
            #{item}{" "}
          </span>
        ))}
      </div>
      <div className="tags-list">
        <label htmlFor="" className="label">
          Tags
        </label>
        <input
          type="text"
          className="input-tag"
          onChange={(e) => setTag(e.target.value)}
        />
        <button onClick={saveTags} className="add-tags">
          Save
        </button>
      </div>
    </div>
  );
}
