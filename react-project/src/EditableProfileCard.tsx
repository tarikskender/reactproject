import React, { useState } from "react";

function EditableProfileCard() {
  const [name, setName] = useState("Tarik Skender");
  const [description, setDescription] = useState("Student at IBU");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const cardStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "20px",
    width: "300px",
    margin: "20px auto",
  };

  return (
    <div style={cardStyle}>
      <img
        src="./assets/jakaslika.png"
        alt="Profile"
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          id="name"
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          id="description"
          style={{ width: "100%", height: "100px" }}
        />
      </div>
    </div>
  );
}

export default EditableProfileCard;
