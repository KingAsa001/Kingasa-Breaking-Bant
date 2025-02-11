function postComment() {
    let commentBox = document.getElementById("comment-box");
    let commentSection = document.getElementById("comment-section");
    
    if (commentBox.value.trim() !== "") {
        let newComment = document.createElement("p");
        newComment.textContent = commentBox.value;
        commentSection.appendChild(newComment);
        commentBox.value = "";
    } else {
        alert("Write something funny before posting! 😂");
    }
}
