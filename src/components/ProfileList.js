import React from "react";
import ReactStars from "react-rating-stars-component";

function ProfileList({ profiles, onDelete, onEdit, isLoading }) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="my-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-center">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Twitter URL</th>
              <th className="py-3 px-6">Rating</th>
              <th className="py-3 px-6">Edit Profile</th>
              <th className="py-3 px-6">Delete Profile</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-center divide-y">
            {isLoading ? (
              <tr>
                <td colSpan="5" className="py-4">
                  <div className="flex justify-center items-center">
                    <div
                      className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                    <span className="ml-2">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : (
              profiles.map((profile) => (
                <tr key={profile._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {profile.name}
                  </td>
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
                    <ReactStars
                      count={5}
                      value={profile.starRating}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => onEdit(profile)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      ✍🏻
                    </button>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileList;
