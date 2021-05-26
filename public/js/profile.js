const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-text').value.trim();
  
    if (title && text) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

function textAreaResize(element) {
  element.style.height = "1px";
  element.style.height = (25 + element.scrollHeight) + "px";
}

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const textArea = document.getElementById(`textArea${id}`);
    const confirmButton = document.getElementById(`editConfirm${id}`);
    if (textArea.style.display === "block") {
      event.target.textContent = "EDIT"
      textArea.style.display = "none";
      confirmButton.style.display = "none";
    } else {
      event.target.textContent = "UNDO"
      confirmButton.style.display = "block";
      textArea.style.display = "block";
      textAreaResize(textArea);
    }
  }
};

const submitEdits = async (event) => {
  event.preventDefault();

  
  const id = event.target.getAttribute('data-id');
  const text = document.querySelector(`#textArea${id}`).value.trim();
  
  if (text) {
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to edit post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelectorAll('.deleteButton').forEach(button => {
    button.addEventListener('click', delButtonHandler);
  })

document
.querySelectorAll('.editButton').forEach(button => {
  button.addEventListener('click', editButtonHandler);
})

document
.querySelectorAll('.confirmEditButton').forEach(button => {
  button.addEventListener('click', submitEdits);
})

