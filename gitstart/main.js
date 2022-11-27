let form = document.getElementById('addForm');
let itemlists= document.getElementById('items');

form.addEventListener('submit',addItem);

itemlists.addEventListener('click', removeItem )

function addItem(e)
{
    e.preventDefault();

    let newitem = document.getElementById('item').value; 

    let li = document.createElement('li');

    li.className='list-group-item'; 
    
    li.appendChild(document.createTextNode(newitem));

    itemlists.appendChild(li);

    let editbutton = document.createElement('button');

    editbutton.className='btn btn-outline-info btn-sm float-right';

    editbutton.appendChild(document.createTextNode('Edit'))

    li.appendChild(editbutton);

    let delbutton = document.createElement('button');

    delbutton.className='btn btn-danger btn-sm float-right delete';

    delbutton.appendChild(document.createTextNode('X'));

    li.appendChild(delbutton);
  
}
function removeItem(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure'))
        {
            var li =e.target.parentElement;
            itemlists.removeChild(li);
        }
    }
}