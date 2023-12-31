import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import ProfileList from "./ProfileList";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = () => {
    fetch("https://hammerhead-app-4r3pr.ondigitalocean.app/profiles")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch(console.error);
  };

  const addProfile = (profile) => {
    fetch("https://hammerhead-app-4r3pr.ondigitalocean.app/profiles", {
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
      fetch(`https://hammerhead-app-4r3pr.ondigitalocean.app/profiles/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setProfiles(profiles.filter((profile) => profile._id !== id));
          setShowDeleteSuccess(true); // Show success message
          setTimeout(() => setShowDeleteSuccess(false), 5000); // Hide after 3 seconds
        })
        .catch(console.error);
    }, 500);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-gray-800 text-3xl font-bold mb-6 text-center">
        Profile Submissions
      </h1>
      {showDeleteSuccess && (
        <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto md:px-8">
          <div className="flex justify-between py-3">
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="self-center ml-3">
                <span className="text-red-600 font-semibold">Error</span>
                <p className="text-red-600 mt-1">
                  Profile has been deleted successfully!
                </p>
              </div>
            </div>
            <button className="self-start text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <ProfileForm onSubmit={addProfile} />
      <ProfileList profiles={profiles} onDelete={deleteProfile} />
    </div>
  );
}

export default App;