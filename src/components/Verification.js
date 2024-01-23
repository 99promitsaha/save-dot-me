import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Verification = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    console.log("Verification Token:", token);

    const verifyUser = async () => {
      try {
        await axios.get(`http://apiv2.savedotme.xyz/auth/verify/${token}`);
        console.log("Verification Successful");
        navigate("/verification-success");
      } catch (error) {
        console.error("Verification Failed:", error);
        navigate("/verification-error");
      }
    };

    verifyUser();
  }, [token, navigate]);

  return (
    <div>
      <p>Verifying...</p>
    </div>
  );
};

export default Verification;
