
const defaultPosts = [
    { id: 1, title: "Daily JS news" },
    { id: 2, title: "Daily Python news" },
    { id: 3, title: "Daily C# news" },
    { id: 4, title: "Daily Java news" },
];
function getPosts() {
    return JSON.parse(localStorage.getItem("posts")) || defaultPosts;
}
function savePost(event) {
    event.preventDefault(); 
    let id = document.getElementById("postId").value;
    let title = document.getElementById("postTitle").value;

    if (id && title) {
        let posts = getPosts();
        posts.push({ id: Number(id), title: title });
        localStorage.setItem("posts", JSON.stringify(posts)); 
        window.location.href = "index.html"; 
    }
}


function displayPosts() {
    let posts = getPosts();
    let tableBody = document.getElementById("postsTable");
    tableBody.innerHTML = ""; 
    posts.forEach(post => {
        let row = `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

document.querySelector(".refresh_complete").addEventListener('click',()=>{
    localStorage.clear("posts")
})