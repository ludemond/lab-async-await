async function fetchPosts() {
  try {
    console.log('fetchPosts() called');
    console.log('fetch available?', typeof fetch);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log('fetch response received:', response.status);
    const post = await response.json();
    console.log('post data:', post);
    displayPosts([post]);
  } catch (error) {
    console.error('Error in fetchPosts:', error);
  }
}

function displayPosts(posts) {
  console.log('displayPosts() called with posts:', posts);
  const postList = document.querySelector('#post-list');
  console.log('postList element found:', postList);
  
  if (!postList) {
    console.error('Error: #post-list element not found in DOM');
    return;
  }
  
  posts.forEach((post, index) => {
    console.log(`Creating elements for post ${index}:`, post);
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    
    h1.textContent = post.title;
    p.textContent = post.body;
    
    console.log('Created h1 with content:', h1.textContent);
    console.log('Created p with content:', p.textContent);
    
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
    console.log('Appended li to post-list');
  });
}

fetchPosts();
