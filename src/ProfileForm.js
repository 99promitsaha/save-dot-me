import React, { useState } from 'react';

function ProfileForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [githubLink, setGithubLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, twitterLink, githubLink });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="url"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
                placeholder="Twitter URL"
                required
            />
            <input
                className="w-full p-2 border border-gray-300 rounded mb-4"
                type="url"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                placeholder="GitHub URL"
                required
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
                Submit
            </button>
        </form>
    );
}

export default ProfileForm;