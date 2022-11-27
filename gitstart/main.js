let form = document.getElementById('addForm');
let itemlists= document.getElementById('items');
let filters = document.getElementById('filter');

form.addEventListener('submit',addItem);

itemlists.addEventListener('click', removeItem )

filters.addEventListener('keyup',filterResults);

function addItem(e)
{
    e.preventDefault();

    let newitem = document.getElementById('item').value; 
    let newitem2 = document.getElementById('item2').value;

    let li = document.createElement('li');

    li.className='list-group-item'; 
    
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(newitem2));

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

function filterResults(e)
{
    let text = e.target.value.toLowerCase();
   
    let items = itemlists.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item)
    {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    })

}