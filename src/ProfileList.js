import React from 'react';

function ProfileList({ profiles }) {
    return (
        <ul>
            {profiles.map((profile, index) => (
                <li key={index}>
                    <p>{profile.name}</p>
                    <a href={profile.twitterLink} target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href={profile.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
            ))}
        </ul>
    );
}

export default ProfileList;
