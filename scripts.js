/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

"use strict";
import links from './blocks.json'

//These are the tags every block may hold
const TAGS = {
    SELF:"self",
    RELATION :"relation",
    EXTENSION: "extension",
    REFLECTION:"reflection",
    BLISS:"bliss"
};
const currentDate = new Date().toDateString();

function Block(name, proof, imageURL, id,tags, date)
{
    this.name = name || "untitled.";
    this.proof = proof || "Inexplicable";
    this.imageURL = imageURL || "https://d2w9rnfcy7mm78.cloudfront.net/27416928/original_5c5fbc7fcb1fd0f6a0b65ae6bae53484.png?1712438925?bc=0";
    this.tags = tags || [];
    this.id =
    this.date = currentDate;
}
// The Block will hold the title, summary, tag, and URL

function createBlocks() {
    //for (let i = 0; i <)

};


// We will hold all the urls along with the title
const imageSrcURLS =[
    {title: "Rick Owens: Footwear", url: "https://d2w9rnfcy7mm78.cloudfront.net/10680077/original_7ddbb081e9dba8833fa6116285b72a57.jpg?1612924929?bc=0"},
    {title: "The Stranger", url: "https://d2w9rnfcy7mm78.cloudfront.net/17908954/original_b23716b6200f2ebf77b2742f23670228.jpg?1662414459?bc=0"},
    {title: "Curb Your Enthusiasm", url: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"},
    {title: "Francis Bacon", url: "https://d2w9rnfcy7mm78.cloudfront.net/15647325/original_f37d5efa274f4becdd4771f2771701e2.png?1647632278?bc=0"},
];

const RICK_URL    = "https://d2w9rnfcy7mm78.cloudfront.net/10680077/original_7ddbb081e9dba8833fa6116285b72a57.jpg?1612924929?bc=0";
const CAMUS_URL = "https://d2w9rnfcy7mm78.cloudfront.net/17908954/original_b23716b6200f2ebf77b2742f23670228.jpg?1662414459?bc=0";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const BACON_URL = "https://d2w9rnfcy7mm78.cloudfront.net/15647325/original_f37d5efa274f4becdd4771f2771701e2.png?1647632278?bc=0";

// This is an array of strings (TV show titles)
let titles = [
    "The Stranger",
    "Curb Your Enthusiasm",
    "Francis Bacon",
    "Rick Owens: Footwear"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    //for(let i = 0; i < links.en)


    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];
        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = CAMUS_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = BACON_URL;
        }
        else if (i == 3)
        {
            imageURL = RICK_URL;
        }
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right-clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert()
{
    console.log("quote button clicked")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard()
{
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function addCard()
{
    /*const nextCard = templateCard.cloneNode(true); // Copy the template card
    cardContainer.appendChild(nextCard); // Add new card to the container
    titles.push(nextCard);*/
    console.log("addCard Clicked");

    let newTitle = prompt("Tile title", 'untitled.'); // Get the title from the user


}
