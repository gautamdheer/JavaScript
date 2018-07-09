var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event 
form.addEventListener('submit', addItem);

// Delete Event 
itemList.addEventListener('click',removeItem);

// Filter Evet 
filter.addEventListener('keyup',filterItem);

// add item
function addItem(e){
e.preventDefault();

// get input value
var newItem = document.getElementById('item').value;
 
// create new li element
var li = document.createElement('li');

// add class
li.className = 'list-group-item';

// add createTextNode
li.appendChild(document.createTextNode(newItem));

// create delete button 
var delBtn = document.createElement('button');

// add class
delBtn.className = 'btn btn-danger btn-sm float-right delete';

// append text node
delBtn.appendChild(document.createTextNode('X'));

// append button into itemList
li.appendChild(delBtn);

itemList.appendChild(li);
}

function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm("Are you sure!!!")){
		var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

function filterItem(e){
	// convert text into lowercase
	var text =  e.target.value.toLowerCase();
	var items =  itemList.getElementsByTagName('li');
 
 	// convert to an array
 	Array.from(items).forEach(function(item){
 	var itemName = item.firstChild.textContent;
 		if(itemName.toLowerCase().indexOf(text) != -1){
 			item.style.display = 'block';
 		}
 		else{
 			item.style.display = 'none';
 		}
 		
 	});	
}