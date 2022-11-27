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

// let items= document.getElementsByClassName('list-group-item');
// console.log(items[2].style.backgroundColor='green');

// for(var i =0 ;i< items.length;i++)
// {
//     console.log(items[i].style.fontWeight='bold');
// }
// let lis = document.getElementsByClassName('list-items');
// console.log(lis[0].style.backgroundColor='lightblue');
// let lis_tag = document.getElementsByTagName('li');
// console.log(lis_tag[4].style.color='darkgreen');

// queryselector and queryselectorall (please remove the comments for each execution of the task as mentioned)

// queryselector
// let seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor='green';
// let thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color='transparent';

// queryselectorall
// var seconditems = document.querySelectorAll('.list-group-item');
// seconditems[1].style.color='green';
// var odditems = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i = 0;i<odditems.length;i++)
// {
//     odditems[i].style.backgroundColor='green';
// }


// dom modification
// let items= document.querySelector('#items');
// parent

// console.log(items.parentNode);
// items.parentElement.style.backgroundColor='lightgrey';
// console.log(items.parentElement);

// last element child
// console.log(items.lastElementChild.style.color='green');

//last child
// console.log(items.lastChild);

//first child
// console.log(items.firstChild);

//first element child 
// console.log(items.firstElementChild);
// items.firstElementChild.style.color='red';

//next sibling
// console.log(items.nextSibling);

// next element sibling
// console.log(items.nextElementSibling);

// previous sibling
// console.log(items.previousSibling);

// previous element sibling
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.fontWeight='bold';

// creating,appending,create text node
//creating element
// let newDiv = document.createElement('div');
//creating classname
// newDiv.className='hello';
//creating id
// newDiv.id='hello1';
//setting attribute to div
// newDiv.setAttribute('title','hello world');
//creating node
// let newtext = document.createTextNode('HEllo');
//appending to elemnet
// newDiv.appendChild(newtext);


// add HEllo word before Item Lister
// let containers = document.querySelector('header .container');
// let h1s = document.querySelector('header h1');
// containers.insertBefore(newDiv,h1s);


// add HEllo word before Item 1
// let selectors = document.querySelector('#main .list-group');
// let lis = document.querySelector('#main li')
// selectors.insertBefore(newDiv,lis);