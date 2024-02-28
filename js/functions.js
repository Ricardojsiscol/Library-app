const library = [];

function Book(id, title, author, pages, isRead){
	this.id = id;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

function createBookObject(id){
	let title = document.getElementById('title');
	let	author = document.getElementById('author');
	let pages = document.getElementById('pages');
	let isRread = document.getElementById('read');
	let book = new Book(id ,title.value, author.value, pages.value, isRread.checked);
	title.value = '';
	author.value = '';
	pages.value = '';
	isRread.checked = false;
	return book;
}

function setEventListener(){
	let button = document.getElementById('add_book');
	let count = 0;
	button.addEventListener('click', () =>{
		event.preventDefault();
		let book = createBookObject(count);
		count++;
		library.push(book);
		console.log(library);
		addBookToLibrary(book);
	})
}

function createCard(book){
	let div = document.createElement('div');
	let p = document.createElement('p');
	let buttonRead = document.createElement('button');
	let buttonErase = document.createElement('button');
	p.innerHTML = 
	`${book.title}<br>
	by<br>
	${book.author}<br>
	${book.pages} pages`;
	p.classList.add('card_text');
	buttonRead.textContent = book.isRead ? 'Read':'Not read';
	buttonRead.addEventListener('click', () =>{
		buttonRead.textContent = buttonRead.textContent == 'Read' ? 'Not read':'Read';
	})
	buttonErase.textContent = 'Erase';
	buttonErase.addEventListener('click', () => {
		div.remove();
		let bookfound = library.findIndex(books => books.id == book.id);
		if (bookfound != -1) library.splice(bookfound, 1);
		console.log(library);
	})
	div.appendChild(p);
	div.appendChild(buttonRead);
	div.appendChild(buttonErase);
	div.classList.add('book_card');
	return div;
}

function addBookToLibrary(book){
	const parent_div = document.getElementById('card_space');
	parent_div.innerHTML = '';
	library.forEach(book => {
		let div = createCard(book);
		parent_div.appendChild(div);
	});
}

setEventListener();