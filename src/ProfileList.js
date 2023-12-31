import React from 'react';

function ProfileList({ profiles, onDelete }) {
    return (
        <div className="container mx-auto mt-10">
            <ul className="list-none">
                {profiles.map((profile) => (
                    <li key={profile._id} className="mb-4 p-4 border border-gray-200 rounded shadow-lg flex justify-between items-center">
                        <div>
                            <p className="text-xl font-semibold">{profile.name}</p>
                            <div className="flex space-x-4 mt-2">
                                <a href={profile.twitterLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                                    Twitter
                                </a>
                                <a href={profile.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition duration-300">
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <button onClick={() => onDelete(profile._id)} className="text-red-500 hover:text-red-700">
                            {/* Place your red cross icon here */}
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProfileList;