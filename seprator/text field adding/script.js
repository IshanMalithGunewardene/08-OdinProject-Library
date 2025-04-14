let bookTitile;
let bookDescription;
let bookImg;

function addbtn(event) {
    event.preventDefault();

    bookTitile = document.getElementById("book-title").value;
    console.log(bookTitile);

    let bookDescription = document.getElementById("book-description").value;
    console.log(bookDescription);

    bookImg = document.getElementById("book-image").value;
    console.log(bookImg);

    // let addbtn = document.querySelector(".add-new-item ");
    // addbtn.style.display = "none";

}