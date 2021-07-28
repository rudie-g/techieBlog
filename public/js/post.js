const postBlog = async (event) => {
    event.preventDefault();

    const textTitle = document.querySelector('#textTitle').value.trim();
    const textContent = document.querySelector('#textContent').value.trim();

    const response = await fetch('api/post', {
        method: 'POST',
        body: JSON.stringify({textTitle, textContent}),
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok){
        document.location.replace('/dashboard');
    } else {
        alert('Post failed');
    }
}

document.querySelector('#post-textSubmit').addEventListener('click', postBlog);