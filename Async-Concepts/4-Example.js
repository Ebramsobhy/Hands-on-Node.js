const fs = require('fs');

// Fix Callback hell with promises 

async function loadJSON(path) {
    const data = await fs.promises.readFile(path, "utf-8");
    return JSON.parse(data);
}

function fetchUsers(users){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const randomUser = users[Math.floor(Math.random() * users.length)];
            const success = Math.random() > 0.2;
            if (success) {
                resolve(randomUser);
            }
            else {
                reject(new Error("Failed to fetch user"));
            } 
        }, 800)
    })
}

function fetchPosts(userId, posts){
    return new Promise((resolve, reject)=>{
          setTimeout(()=>{
             const userPosts = posts.filter(p => p.userId === userId);
             if (userPosts.length > 0){
                 resolve(userPosts);
             } 
             else{
                 reject(new Error("Failed to fetch posts"));
             } 
          }, 800)
    })
}

function fetchComments(postId, comments){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const postComments = comments.filter(c => c.postId === postId);
            if (postComments.length > 0) {
                resolve(postComments);
              } else {
                reject(new Error("No comments found for this post"));
              }
        })
    })
}

async function main(){
    try{
        const users = await loadJSON('users.json');
        const posts = await loadJSON('posts.json');
        const comments = await loadJSON('comments.json');
        console.log("JSON files loaded successfully!\n");
    
        const user = await fetchUsers(users);
        console.log("User:", user);

        const userPosts = await fetchPosts(user.id, posts);
        console.log("Posts:", userPosts);

        const userComments = await fetchComments(userPosts[0].id, comments);
        console.log("Comments:", userComments);

        console.log("All data fetched successfully!");
    } catch (err) {
        console.error("Error:", err.message);
    }    
}

main()