function Book(title, author, description, imgUrl) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.imgUrl = imgUrl;
}

// Fixing method name and console log message
Book.prototype.detailsCalled = function () {

    const imgCard = document.createElement('div');
    imgCard.className = 'img-card';
    imgCard.innerHTML = `<img src="${this.imgUrl}" alt="" height="100%" width="100%">`;
    imgCard.addEventListener('click', () => {
        alert(`
            Title: ${this.title}, 
            Author: ${this.author}
            Description: ${this.description}`);
    });
    document.querySelector('.cards').appendChild(imgCard);
};


// Creating book objects with proper arguments
const book1 = new Book("The Great Gatsby", "Fa. Scott Fitzgerald", "A novel about the Jazz Age.", "./assets/images/game-of-thrones-the.jpg");
book1.detailsCalled();

const book2 = new Book("The Great Gatsby", "Fb. Scott Fitzgerald", "A novel about the Jazz Age.", "./assets/images/harry-potter.jpg");
book2.detailsCalled();


const addCard = document.createElement('div');
addCard.className = 'img-card';
addCard.innerHTML = `<div class="img-card add-btn"><img src="./assets/icouns/cross.png" alt="" height="70px" width="70px"><div>`;
Object.assign(addCard.style, {
    backgroundColor: '#ffffff3d',
    borderRadius: '3%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
addCard.addEventListener('click', () => {
    const title = prompt("Enter book title:");
    const author = prompt("Enter author name:");
    const description = prompt("Enter book description:");
    const imgUrl = prompt("Enter image URL:");
    
    if (title && author && description && imgUrl) {
        const newBook = new Book(title, author, description, imgUrl);
        const imgCard = document.createElement('div');
        imgCard.className = 'img-card';
        imgCard.innerHTML = `<img src="${newBook.imgUrl}" alt="" height="100%" width="100%">`;
        imgCard.addEventListener('click', () => {
            alert(`
                Title: ${newBook.title}, 
                Author: ${newBook.author}
                Description: ${newBook.description}`);
        });
        const cardsContainer = document.querySelector('.cards');
        cardsContainer.insertBefore(imgCard, cardsContainer.lastElementChild);
    }
});
document.querySelector('.cards').appendChild(addCard);


