const btnEl = document.getElementById('btn');
const btnNumberEls = document.querySelectorAll('.btn-number');
const mainContainerEl = document.querySelector('.main-container');

function showFeedback(){
  mainContainerEl.innerHTML = '';
  const imgEl = document.createElement('img');
  const rateEl = document.createElement('div');
  const thankMessage = document.createElement('h2');
  const textMessage = document.createElement('p');

  imgEl.src = "images/illustration-thank-you.svg";
  imgEl.classList.add('thanks-img');
  rateEl.innerText = `You selected ${number} out of 5`;
  rateEl.classList.add('rate');
  thankMessage.innerText = 'Thank you!';
  thankMessage.classList.add('head-message');
  textMessage.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  textMessage.classList.add('text-message');

  mainContainerEl.appendChild(imgEl);
  mainContainerEl.appendChild(rateEl);
  mainContainerEl.appendChild(thankMessage);
  mainContainerEl.appendChild(textMessage);
}

let number = 0;

btnNumberEls.forEach((btnNumber)=>{
  btnNumber.addEventListener('click', ()=>{
    number = btnNumber.innerText;
  });  
});

btnEl.addEventListener('click', ()=>{
  if(number === 0){
    alert('Please choose your rate!')
  } else {
    showFeedback();
  }
});


