// Import fetchOptions from config.js
import { pythonURI, fetchOptions } from "../../js/api/config.js";
// Import functions from config.js
import {
  putUpdate,
  postUpdate,
  deleteData,
  logoutUser,
} from "../../js/api/profile.js";

const pfp = document.getElementById("pfp");

async function fetchUserProfile() {
  const URL = pythonURI + "/api/id/pfp"; // Endpoint to fetch user profile data

  try {
    const response = await fetch(URL, fetchOptions);
    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.status}`);
    }

    const profileData = await response.json();
    if (profileData.pfp) {
      pfp.src = `data:image/jpeg;base64,${profileData.pfp}`;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    // Handle error display or fallback mechanism
  }
}

fetchUserProfile();
