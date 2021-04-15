const newFormHandler = async (event) => {

    if (event.target.hasAttribute('postid')) {
        const postId = event.target.getAttribute('postid');
        event.preventDefault();
        const text = document.querySelector('#comment-text').value.trim();
        const commentError = document.getElementById('commentErrorMessage')
        
        if (text.length < 1000 && text.length > 0) {
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
                console.log(response.text())
            }
        } else {
            if (text.length < 1) {
                commentError.textContent = 'Cannot leave empty comments.'
            }
            if (text.length > 1000) {
                commentError.textContent = 'Comment length must be less than 1000 characters.'
            }
        }
    } else {
        console.log("Cannot find post")
    }
};

const delButtonHandler = async (event) => {
    console.log("response")
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete comment');
      }
    }
  };

const comments = document.querySelectorAll(".comment");
comments.forEach(comment => {
    let index = comment.getAttribute('index');
    if (index % 2 === 0) {
        comment.className = "evenComment";
    } else {
        comment.className = "oddComment"
    }
});



  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelectorAll('.commentDelete').forEach(button => {
      button.addEventListener('click', delButtonHandler);
  })