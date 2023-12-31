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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="url"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
                placeholder="Twitter URL"
                required
            />
            <input
                type="url"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                placeholder="GitHub URL"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ProfileForm;
