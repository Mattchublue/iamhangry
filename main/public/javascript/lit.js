async function litClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length -1 
  ];
  console.log('button clicked');
 const response = await fetch('/api/posts/lit', {
  method: 'PUT',
  body: JSON.stringify({
      post_id: id
  }),
  headers: {
      'Content-Type': 'application/json'
  }
 });

 if(response.ok) {
  document.location.reload();
 } else {
  alert(response.statusText);
 }
}

document.querySelector('lit-btn').addEventListener('click', litClickHandler);
