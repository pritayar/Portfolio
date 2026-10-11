const b=document.querySelectorAll('.roles button');
b.forEach(x=>x.addEventListener('click',()=>{
const on=x.getAttribute('aria-pressed')==='true';
b.forEach(y=>y.setAttribute('aria-pressed','false'));
if(on){document.body.dataset.role='all'}else{x.setAttribute('aria-pressed','true');
document.body.dataset.role=x.dataset.r}
}));