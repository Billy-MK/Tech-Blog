const newFormHandler = async (event) => {

    if (event.target.hasAttribute('postid')) {
        const postId = event.target.getAttribute('postid');
        event.preventDefault();
        const text = document.querySelector('#comment-text').value.trim();
        
        if (text) {
            const response = await fetch(`/api/comment`, {
                method: 'POST',
                body: JSON.stringify({ postId, text }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to create comment');
            }
        }
    } else {
        console.log("Cannot find post")
    }
};

const comments = document.querySelectorAll(".comment");
comments.forEach(comment => {
    let index = comment.getAttribute('index');
    if (index % 2 === 0) {
        comment.className = "evenComment";
        console.log("Did it work?")
    } else {
        comment.className = "oddComment"
    }
});



  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);