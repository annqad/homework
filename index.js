let url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url)
//     .then((response) =>
//         response.json().then((data) => console.log(data))
//     )
//     .catch((error) => console.log(error))


const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    for (const post of data) {
        let $post = document.createElement('div');
        $post.className = 'post'
        $post.innerHTML = `
        <div class="title">${post.title} (${post.id})</div>
        <div class="body">${post.body}</div>
        `
        $post.style.fontSize = '22px'
        document.body.appendChild($post);
    }
};


getPosts()

