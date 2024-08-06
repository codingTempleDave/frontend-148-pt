async function postData() {
  const userPost = await fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // converts object into a string
    body: JSON.stringify({
      title: "Why hello there",
      body: "Obi Wan speaks",
      userId: 2
    })
  });

  // converts JSON response string back into an object
  let response = userPost.json();
  return response;
}


async function startCall() {
  const serverResponse = await postData();

  document.getElementById("userInfo").innerHTML = `${serverResponse.title}<br>
                                                    ${serverResponse.body}<br>
                                                    ${serverResponse.userId}`;
  console.log(serverResponse);
}

startCall();