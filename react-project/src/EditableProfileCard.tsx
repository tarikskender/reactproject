import React from "react";

interface Profile {
  name: string;
  description: string;
}

interface EditableProfileCardProps {
  profile: Profile;
  setProfile: (profile: Profile) => void;
}

function EditableProfileCard({
  profile,
  setProfile,
}: EditableProfileCardProps) {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, name: event.target.value });
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProfile({ ...profile, description: event.target.value });
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
          value={profile.name}
          onChange={handleNameChange}
          id="name"
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          value={profile.description}
          onChange={handleDescriptionChange}
          id="description"
          style={{ width: "100%", height: "100px" }}
        />
      </div>
    </div>
  );
}

export default EditableProfileCard;
