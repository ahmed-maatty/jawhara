let sbtns = document.querySelectorAll('#sbtn');
let close2 = document.getElementById('close2');
let sn = document.querySelector('.s-n');
sbtns.forEach((e)=>{
  e.addEventListener('click',()=>{
    sn.classList.add('showSN');
    close2.style.display='block';
  })
})
close2.addEventListener('click',()=>{
  close2.style.display='none';
  sn.classList.remove('showSN');
})