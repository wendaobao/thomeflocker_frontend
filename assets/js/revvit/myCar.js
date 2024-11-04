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
const nameDisplay = document.getElementById("name");

async function fetchUserProfilePicture() {
  const URL = pythonURI + "/api/id/pfp"; // Endpoint to fetch user profile data

  try {
    // 1. Fetch the data from the endpoint
    const response = await fetch(URL, fetchOptions);

    // 2. Make sure the response is ok
    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.status}`);
    }

    // 3. Return the data
    return response.json();
    // 4. If we had an error anywhere in the try (stuff above), we will log an error.
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    return null;
    // Handle error display or fallback mechanism
  }
}

async function fetchUserProfileData() {
  const URL = pythonURI + "/api/user";

  try {
    const response = await fetch(URL, fetchOptions);
    if (!response.ok) {
      throw new Error(`Failed to fetch Name: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Name:", error.message);
    return null;
  }
}

const profilePictureData = await fetchUserProfilePicture();
const profileData = await fetchUserProfileData();

if (profileData.name) {
  nameDisplay.innerHTML = profileData.name;
}

if (profilePictureData.pfp) {
  pfp.src = `data:image/jpeg;base64,${profilePictureData.pfp}`;
  pfp.hidden = false;
}
