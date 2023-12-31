import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';

function App() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        // Fetch existing profiles
        fetch('https://backend-demo-3hll.onrender.com/profiles')
            .then((response) => response.json())
            .then(setProfiles)
            .catch(console.error);
    }, []);

    const addProfile = (profile) => {
        // Send the new profile to the server
        fetch('https://backend-demo-3hll.onrender.com/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        })
            .then((response) => response.json())
            .then((newProfile) => setProfiles([...profiles, newProfile]))
            .catch(console.error);
    };

    return (
        <div>
            <h1>Profile Submissions</h1>
            <ProfileForm onSubmit={addProfile} />
            <ProfileList profiles={profiles} />
        </div>
    );
}

export default App;
