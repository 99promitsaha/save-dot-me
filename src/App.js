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
    <div className="mx-auto">
      <div className="bg-blue-600 mb-10">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white sm:items-center md:px-8">
          <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
            <div className="flex-none p-1.5 px-4 rounded-full bg-green-800 flex items-center justify-center font-medium text-sm">
              Alert
            </div>
            <p className="font-medium p-2">
              This tool, open to all, facilitates tracking your favorite
              personalities on Twitter.{" "}
              <a
                href="https://twitter.com/99promitsaha"
                target="_blank"
                className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1"
              >
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </p>
          </div>
          <button className="p-2 rounded-lg duration-150 hover:bg-indigo-500 ring-offset-2 focus:ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
      <h1 className="text-gray-800 text-3xl font-bold mb-6 text-center">
        Save Profiles
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
