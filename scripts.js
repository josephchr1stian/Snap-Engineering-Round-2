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

//import

// Create a promise from the JSON file to access the data
const blockDataPromise = fetch('blocks.json')
    .then(response => {
        // Check if response is OK
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .catch(error => {
        // Handle fetch errors
        console.error('Error fetching block data:', error);
        throw error; // Propagate the error to the next catch block
    });



//These are the tags every block may hold
const TAGS = {
    SELF:"self",
    RELATION :"relation",
    EXTENSION: "extension",
    REFLECTION:"reflection",
    BLISS:"bliss"
};
const currentDate = new Date().toDateString();
class myBlock {
    constructor(name,imageURL, proof, id,tags, date) {
        this.id = id;
        this.name = name || "untitled.";
        this.proof = proof || "Inexplicable";
        this.imageURL = imageURL || "https://d2w9rnfcy7mm78.cloudfront.net/27416928/original_5c5fbc7fcb1fd0f6a0b65ae6bae53484.png?1712438925?bc=0";
        this.tags = tags || null;
        this.date = date;
    }

    toJSON() { // Return the properties to JSON
        return {
            name: this.name,
            url:this.imageURL,
            proof: this.proof,
            id:this.id,
            tags:this.tags,
            date:this.date
        }
}


}
// function getJSON (json)
// {
//     const { name,  imageURL,  proof, id,tags, date} = json; // Take all the data from the JSON object, make a new object
//     return { name,  imageURL,  proof, id,tags, date};
// }

function fromJSON(json){
        const { name, url,  proof, id,tags, date} = json; // Take all the data from the JSON object, make a new object
        console.log( "JSON Deconstruct:", name, url,  proof, id,tags, date);
        return new myBlock(name, url ,proof, id, tags, date);
}

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    //for(let i = 0; i < links.en)
    blockDataPromise.then( blocks =>{
        console.log("Fetched Data:",blocks);
        console.log("LENGTH:" , blocks.length);
        blocks.forEach( block =>  {

            const newBlock = fromJSON(block);
            const nextCard = templateCard.cloneNode(true); // Copy the template card
            editCardContent(nextCard,newBlock); // get the next card, take the jason
            cardContainer.appendChild(nextCard); // Add new card to the container
        });
    }).catch(error => {
        console.error("Error Fetching", error);
    })

}

// name, proof, imageURL, id,tags
function editCardContent(card, block) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = block.name;

    const cardImage = card.querySelector("img");
    cardImage.src = block.imageURL;
    cardImage.alt = block.name + " image";

    const proofElement = card.querySelector(".proof");
    proofElement.textContent = block.proof;

    const dateElement = card.querySelector(".date");
    dateElement.textContent = block.date;

    const tagsElement = card.querySelector(".tags");
    tagsElement.textContent = block.tags.join(", ");


    // You can use console.log to help you debug!
    // View the output by right-clicking on your website,
    // select "Inspect", then click on the "Console" tab
    // console.log("new card:", block.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert()
{
    // console.log("quote button clicked")
    alert("The only way out, is through");
}

function removeLastCard()
{

    blockDataPromise.then( blocks =>{
        blocks.pop(); // Remove last item in titles array
        showCards();
    }).catch(error => {
        console.error("Error Fetching", error);
    showCards(); // Call showCards again to refresh
         })
}

function addCard()
{
    /*const nextCard = templateCard.cloneNode(true); // Copy the template card
    cardContainer.appendChild(nextCard); // Add new card to the container
    titles.push(nextCard);*/

    blockDataPromise.then( blocks =>{
        let length = blocks.length;
        let name  = prompt("Title", 'untitled'); // Get the title from the user
        let proof = prompt("Description:", ''); // Get the description from the user
        let imageURL= prompt("Image URL:", ''); // Get the image url from the user
        let id = length;
        let tagElements = prompt("Type one or more of the tags for your entry: \n\n self, relaxation, extension, reflection, bliss. \n \n Separate by using a comma and a space.");
        let tags = tagElements.split(", ");
        let newBlock = new myBlock(name, imageURL, proof, id, tags, currentDate);
        blocks.push(newBlock.toJSON());
        //blocks.write(name, proof, imageURL, id, tags);
        showCards();
    }).catch(error => {
    console.error("Error Fetching", error);
    showCards();
});
    console.log("addCard Clicked");
}

document.getElementById("DropdownFilters").addEventListener('change', (event) =>
{
    const selectedOption = event.target.value;
    if (selectedOption == "all")
        showCards();
    else
        filterCards(selectedOption);
    });

function filterCards(filter) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    //for(let i = 0; i < links.en)
    blockDataPromise.then( blocks =>{
        // console.log("Fetched Data:",blocks);
        blocks.forEach( block =>  {

            const newBlock = fromJSON(block);
            // console.log("Block is :", newBlock.name,"Tags are:" ,newBlock.tags, "Filter selected:", filter)
            if (newBlock.tags.includes(filter))
            {
                const nextCard = templateCard.cloneNode(true); // Copy the template card
                editCardContent(nextCard,newBlock); // get the next card, take the jason
                cardContainer.appendChild(nextCard); // Add new card to the container
            }
        });
    }).catch(error => {
        console.error("Error Fetching", error);
    })

}

function showRandom()
{
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    let target =  Math.floor(Math.random() * 10);
    // console.log(target);
    //for(let i = 0; i < links.en)
    blockDataPromise.then( blocks =>{
        // console.log("Fetched Data:",target, "HEELLLLLLLLLPLPPPPPPPPPPPPP");
        blocks.forEach( block =>  {
            if (block.id == target)
            {
                const newBlock = fromJSON(block);
                const nextCard = templateCard.cloneNode(true); // Copy the template card
                editCardContent(nextCard,newBlock); // get the next card, take the jason
                cardContainer.appendChild(nextCard); // Add new card to the container
            }
        });
    }).catch(error => {
        // console.error("Error Fetching", error);
    })

}

document.addEventListener('DOMContentLoaded', function()
{
    const dropDown = document.getElementById("DropdownFilters");
    const randomButton = document.querySelector(".button2");
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if(hamburgerMenu && randomButton && dropDown)
    {
        hamburgerMenu.addEventListener('click', function ()
        {
            // console.log("hamClick");
            // console.log(randomButton.style.display);
            if(randomButton.style.display === '' || dropDown.style.display === '' )
            {
                randomButton.style.display = 'flex';
                dropDown.style.display = 'flex';
                // console.log(randomButton.style.display);
                //hamburgerMenu.style.display = 'none';
            }
            else
            {
                randomButton.style.display = '';
                dropDown.style.display = '';
            }
        });
    }

});