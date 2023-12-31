import React, { useState } from "react";

function EditProfileForm({ profile, onSubmit, onCancel }) {
  const [name, setName] = useState(profile.name);
  const [twitterLink, setTwitterLink] = useState(profile.twitterLink);
  const [githubLink, setGithubLink] = useState(profile.githubLink);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...profile, name, twitterLink, githubLink });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Twitter URL
          </label>
          <input
            type="url"
            value={twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            GitHub URL
          </label>
          <input
            type="url"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Profile
        </button>
        <button
          onClick={onCancel}
          type="button"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;
