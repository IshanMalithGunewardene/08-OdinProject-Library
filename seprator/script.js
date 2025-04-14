function img1() {

    let image = document.querySelector(".card-botom img");
    image.src = "/assets/images/game-of-thrones-the.jpg";
    image.alt = "Game of Thrones";
    image.style.width = "220px";
    image.style.height = "150px";
    image.style.margin = "0% 0% 0% 14%";

    let title = document.getElementById("title");
    title.innerText = "Game of Thrones";

    let discription = document.getElementById("discription");
    discription.innerText = "Game of Thrones is a fantasy drama series based on George R.R. Martin's novels. It features a complex web of characters, political intrigue, and epic battles in the struggle for the Iron Throne.";
}

function img2() {

    let image = document.querySelector(".card-botom img");
    image.src = "./assets/images/sherlock-holems.jpg";
    image.alt = "Sherlock Holmes";
    image.style.width = "267px";
    image.style.height = "150px";
    image.style.margin = "0% 0% 0% 14%";

    let title = document.getElementById("title");
    title.innerText = "Sherlock Holmes";

    let discription = document.getElementById("discription");
    discription.innerText = "Sherlock Holmes is a fictional detective known for his keen observation, logical reasoning, and solving complex cases. Created by Sir Arthur Conan Doyle, his adventures captivate readers with thrilling mysteries and brilliant deductions.";
}

function img3() {

    let image = document.querySelector(".card-botom img");
    image.src = "./assets/images/harry-potter.jpg";
    image.alt = "Harry Potter";
    image.style.width = "200px";
    image.style.height = "150px";
    image.style.margin = "0% 0% 0% 14%";

    let title = document.getElementById("title");
    title.innerText = "Harry Potter";

    let discription = document.getElementById("discription");
    discription.innerText = "Harry Potter is a series of fantasy novels written by J.K. Rowling. It follows the journey of a young wizard, Harry Potter, and his friends as they battle the dark wizard Lord Voldemort.";
}

function addNewItemStyles() {
    let addItem = document.querySelector(".add-new-item");
    addItem.style.display = "flex";
    addItem.style.flexDirection = "column";
    addItem.style.justifyContent = "center";
    addItem.style.alignItems = "center";
}

function addNewItem() {
    let addItem = document.querySelector(".add-new-item");
    addItem.style.display = "block";
    
}

let bookTitile;
let bookDescription;
let bookImg;

function addbtn() {
    bookTitile = document.getElementById("book-title").value;
    console.log(bookTitile);

    bookDescription = document.getElementById("book-description").value;
    console.log(bookDescription);

    bookImg = document.getElementById("book-img").value;
    console.log(bookImg);

    // let addbtn = document.querySelector(".add-new-item ");
    // addbtn.style.display = "none";
    
}