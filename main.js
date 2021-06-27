// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelectorAll('.like-glyph').forEach(span => {
     span.addEventListener('click', e => {
       mimicServerCall()
       .then(resp => {
         console.log("resp:", resp)
       })
       .catch(err => {
         console.log("err:", err)
       })
      if (span.textContent === EMPTY_HEART){
      span.textContent = FULL_HEART
      span.classList.add('activated-heart')
      } else {
        span.textContent = EMPTY_HEART
      }
     })

})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
