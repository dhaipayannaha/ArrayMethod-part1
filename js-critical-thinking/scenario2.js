 const users = [
    { id: 101, userId: "Alice", title: "admin" },
    { id: 102, userId: "Bob", title: "editor" },
    { id: 103, userId: "Charlie", title: "viewer" }
];

const posts = [
    { id: 1, userId: 102, title: "Post 1", content: "Content 1" },
    { id: 2, userId: 101, title: "Post 2", content: "Content 2" },
    { id: 3, userId: 101, title: "Post 3", content: "Content 3" },
    { id: 4, userId: 103, title: "Post 4", content: "Content 4" },
    { id: 5, userId: 102, title: "Post 5", content: "Content 5" }
];



const postByUserId = posts.reduce((table, post) => {
    console.log(table, post)
    return table
}, {})