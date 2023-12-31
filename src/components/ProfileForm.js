import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function ProfileForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [starRating, setStarRating] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await onSubmit({ name, twitterLink, starRating });
    setIsLoading(false);
    setShowSuccess(true);
    setName("");
    setTwitterLink("");
    setStarRating(1); // Reset star rating

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div>
      {showSuccess && (
        <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
          <div className="flex justify-between py-3">
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rounded-full text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="self-center ml-3">
                <span className="text-green-600 font-semibold">Success</span>
                <p className="text-green-600 mt-1">
                  Data has been added successfully!
                </p>
              </div>
            </div>
            <button className="self-start text-green-500">
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
        <div className="mt-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Your Rating:
          </label>
          <ReactStars
            count={5}
            value={starRating}
            onChange={setStarRating}
            size={30}
            activeColor="#ffd700"
            classNames="flex justify-center space-x-1 mb-4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
