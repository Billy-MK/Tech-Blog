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

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);