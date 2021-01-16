const $Ul = document.createElement('ul');

for (let i = 1; i <= 5; i++) {
  const $Li = document.createElement('li');
  $Li.innerText = i;
  $Ul.append($Li);
}
document.body.append($Ul);


$Ul.addEventListener('click', function (e) {
  
  if (e.target.tagName === 'LI') {
    this.appendChild(e.target);

    if (!e.target.style.background) { 
      e.target.style.background = 'blue'; 
     
    } else if (e.target.style.background == 'blue') { 
      e.target.style.background = 'green';
      
    } else if (e.target.style.background == 'green') {
      e.target.style.background = 'yellow';
      
    } else if (e.target.style.background == 'yellow') {
      e.target.style.background = 'blue'; 
    }
  }
})
///////////////////////////////////////////

function toggleClass(el, elementClass) { 
  const stringElementClass = elementClass.trim();
  const arrayOfClasses = el.className.split(' ');
  const indexClass = arrayOfClasses.indexOf(stringElementClass);

  indexClass < 0
  ? arrayOfClasses.push(stringElementClass)
  : arrayOfClasses.splice(indexClass, 1);

  el.className = arrayOfClasses.join(' ');
}

const $div = document.createElement('div');
$div.className = 'box shadow radius';

toggleClass($div, 'border  ');