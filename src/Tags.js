import React, { useState } from "react";

export default function Tags(props) {
  const [tags, setTags] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [tag, setTag] = useState("");

  function addTags() {
    setIsActive(true);
  }

  function saveTags() {
    setTags([...tags, tag]);
    setIsActive(true);
  }

  return tags.length === 0 && !isActive ? (
    <div>
      <button onClick={addTags}>Add Tags</button>
    </div>
  ) : (
    <div>
      <div className="tags">
        {tags.map((item, index) => (
          <span key={index}>#{item} </span>
        ))}
      </div>
      <label htmlFor="">Tags</label>
      <input type="text" onChange={(e) => setTag(e.target.value)} />
      <button onClick={saveTags}>Save</button>
    </div>
  );
}
