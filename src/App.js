import React, { useState, useEffect } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";
import EditProfileForm from "./components/EditProfileForm";
import Header from "./components/Header";
import DeleteSuccessMessage from "./components/DeleteSuccessMessage";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    fetch("https://api.savedotme.xyz/profiles")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        setIsLoading(false);
      })
      .catch(console.error);
  };

  const addProfile = (profile) => {
    fetch("https://api.savedotme.xyz/profiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    })
      .then((response) => response.json())
      .then((newProfile) => setProfiles([...profiles, newProfile]))
      .catch(console.error);
  };

  const deleteProfile = (id) => {
    setTimeout(() => {
      fetch(`https://api.savedotme.xyz/profiles/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setProfiles(profiles.filter((profile) => profile._id !== id));
          setShowDeleteSuccess(true);
          setTimeout(() => setShowDeleteSuccess(false), 5000); // Hide after 3 seconds
        })
        .catch(console.error);
    }, 500);
  };

  const editProfile = (profile) => {
    setEditingProfile(profile);
  };

  const cancelEdit = () => {
    setEditingProfile(null);
  };

  const closeDeleteSuccessMessage = () => {
    setShowDeleteSuccess(false);
  };

  const updateProfile = (updatedData) => {
    fetch(`https://api.savedotme.xyz/profiles/${editingProfile._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then(() => {
        fetchProfiles();
        setEditingProfile(null);
      })
      .catch(console.error);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-blue-600 decoration-dotted text-6xl font-extrabold mb-6 text-center heading">
          Save(dot)me
        </h1>
        {showDeleteSuccess && (
          <DeleteSuccessMessage onClose={closeDeleteSuccessMessage} />
        )}
        {editingProfile ? (
          <EditProfileForm
            profile={editingProfile}
            onSubmit={updateProfile}
            onCancel={cancelEdit}
          />
        ) : (
          <ProfileForm onSubmit={addProfile} />
        )}
        <ProfileList
          profiles={profiles}
          onDelete={deleteProfile}
          onEdit={editProfile}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
