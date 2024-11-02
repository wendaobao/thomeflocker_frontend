// Function to create an image post with caption and user/date info
export function createImagePost(postObj) {
    // Destructure the object to extract necessary details
    const imageUrl = postObj.image_url;
    const caption = postObj.title;
    const user = postObj.user_name;
    const datePosted = "10/10/10";

    // Create a container for the post
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    // Create the image element
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageContainer");
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageDiv.appendChild(imageElement);

    // Create the caption container
    const captionDiv = document.createElement("div");
    captionDiv.classList.add("textContainer");
    const captionElement = document.createElement("h3");
    captionElement.innerHTML = caption;
    captionDiv.append(captionElement)
    
    // Create the user and date info element
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("textInfo");
    const datePostedElement = document.createElement("p");
    datePostedElement.innerHTML = "Date Posted: " + datePosted;
    infoDiv.append(datePostedElement);
    const userPostedElement = document.createElement("p");
    userPostedElement.innerHTML = "Posted by: " + user
    
    // Append everything to the post container
    postContainer.appendChild(imageDiv);
    postContainer.appendChild(captionDiv);
    postContainer.appendChild(infoDiv);

    // Append the post to the page (assuming there's a <div id="image-posts">)
    const imagePostsContainer = document.getElementById("feed");
    // imagePostsContainer.appendChild(postContainer);
    return postContainer
}