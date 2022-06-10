async function deleteFormHandler(event) {
    event.preventDefault();

    const deletePost = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch(`/api/posts/${deletePost}`, {
        method: 'delete',
        body: JSON.stringify({
          post_id: deletePost
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
      
}

document.querySelector('.delete-post-btn')
document.addEventListener('click', deleteFormHandler);