// console.log(document);
// console.log(document.head);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms)
// document.all[10].textContent="new world"
// console.log(document.getElementById('main-header'));
// let headerTitle = document.getElementById('main-header');
// console.log(headerTitle.style.borderBottom = 'solid 3px black')
// let addTitle = document.getElementsByClassName('title');
// // console.log(document.getElementsByClassName('title'));
// console.log(addTitle[0].style.fontWeight='bold');
// console.log(addTitle[0].style.color='green');

let items= document.getElementsByClassName('list-group-item');
console.log(items[2].style.backgroundColor='green');

for(var i =0 ;i< items.length;i++)
{
    console.log(items[i].style.fontWeight='bold');
}