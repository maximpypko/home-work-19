//поместил список из пяти li-шек на страницу
const $Ul = document.createElement('ul');

for (let i = 0; i < 5; i++) {
  const $Li= document.createElement('li');
  $Ul.append($Li);
}
document.body.append($Ul);

//на список навешиваем событие
$Ul.addEventListener('click', function (e) {
  
  if (e.target.tagName === 'LI') { //событие будет работать если кликнули по li
    e.target.style.order += 10     

    if (!e.target.style.background) { //если у li нет фона, значит задать этот фон
      e.target.style.background = 'blue'; 
      
    } else if (e.target.style.background == 'blue') { //если у li во такой фон, значит 
      e.target.style.background = 'green';            //задать этот фон и т.д.
      
    } else if (e.target.style.background == 'green') {
      e.target.style.background = 'yellow';
  
    } else if (e.target.style.background == 'yellow') {
      e.target.style.background = 'blue'; 
    }
  }
})