let paginationsLinks = document.querySelectorAll('.p-link');
paginationsLinks.forEach((e)=>{
  e.addEventListener('click',()=>{
    paginationsLinks.forEach((e)=>{
      e.classList.remove('active');
    })
    e.classList.add('active');
  })
})