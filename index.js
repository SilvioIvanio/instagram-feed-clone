// POSTS OBJECTS
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// FEED GETTER

const postContainer = document.querySelector('.post')

// FEED RENDER
for (i = 0; i < posts.length; i++) {
    const {name, username, location, avatar, post, comment, likes} = posts[i]

    postContainer.innerHTML += `
            <div class="post-header">
                <img class="profile-pic" id="post-avatar" src="${avatar}" alt="Profile picture">
               
                <div class="description-header">
                    <p class="post-user-name">${name}</p>
                    <p class="post-location">${location}</p>
                </div>
            </div>
            
            <img class="post-content" src="${post}" alt="Post content">

            <div class="engagement-line">
                <img class="engagement-icon" id="like-btn" src="images/icon-heart.png" alt="Like button">
                <img class="engagement-icon" id="comment-btn" src="images/icon-comment.png" alt="Comment button">
                <img class="engagement-icon" id="share-btn" src="images/icon-dm.png" alt="Share button">
            </div>

            <p class="post-likes"><span class="likes-counter">${likes} </span>likes</p>

            <p class="post-comment"><span class="post-user-id">${username} </span>${comment}</p>
    `
}
