import React from "react";

function ProfileList({ profiles, onDelete }) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-centre">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Twitter URL</th>
              <th className="py-3 px-6">GitHub URL</th>
              <th className="py-3 px-6">Delete Profile</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-center divide-y">
            {profiles.map((profile) => (
              <tr key={profile._id}>
                <td className="px-6 py-4 whitespace-nowrap">{profile.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={profile.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {profile.twitterLink}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={profile.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {profile.githubLink}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => onDelete(profile._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileList;
