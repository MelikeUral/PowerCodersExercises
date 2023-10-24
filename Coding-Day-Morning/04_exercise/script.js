let books = [
    {
        title: "Brief Answers to the Big Questions",
        author: "Stephen Hawking",
        isBookSold: false,
        price: 30,
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        isBookSold: false,
        price: 25,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isBookSold: false,
        price: 35,
    },
];

let bookList = document.querySelector("#book-list");
let form = document.querySelector("form");
let titleOfBook = document.querySelector("#title");
let authorOfBook = document.querySelector("#author");
let priceOfBook = document.querySelector("#price")

renderBooks();
function renderBooks() {
    bookList.innerHTML = "";
    sortBooks();
    books.forEach((element) => {
        if (element.isBookSold == false) {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
            Book name : ${element.title}
            Written by: ${element.author} 
            Price: ${element.price} Fr.`;
            bookList.appendChild(listItem);
        }
    });
}

function sortBooks() {
    return books.sort((a, b) => {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
}

function addBook() {
    let book = {
        title: `${titleOfBook.value}`,
        author: `${authorOfBook.value}`,
        isBookSold: false,
        price: `${priceOfBook.value}`
    }
    return books.push(book);
}

function refreshInputFields() {
    titleOfBook.value = "";
    authorOfBook.value = "";
    priceOfBook.value = null;
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
    renderBooks();
    refreshInputFields();
})