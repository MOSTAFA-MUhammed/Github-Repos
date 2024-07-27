// main varible 
let theInput = document.querySelector(".get-repos input");
let gitButton = document.querySelector(".get-repos .git-button");
let reposData = document.querySelector(".show-data");

gitButton.onclick = function(){

    getRepos()

}


// get repos function
function getRepos(){

    if (theInput.value == ''){ // If Value Is Empty

        reposData.innerHTML = "<span>Please Write Github Username.</span>";
        // window.alert("Please write something")

    }else{

    fetch(`https://api.github.com/users/${theInput.value}/repos`)  // api for the get request
    
    .then( (res) =>{

        return res.json()  ;
    })
    
    .then((repos) => {

        //empty the container 
        reposData.innerHTML = '';


        //Loop On repos
        repos.forEach(repo => {

            //create main div
            let mainDiv = document.createElement("div");

            // create repo name text
            let textReop = document.createTextNode(repo.name);

            // append the text to main div 
            mainDiv.appendChild(textReop);

            // Create Repo URL Anchor
            let theUrl = document.createElement('a');

            //create repo url text
            let thrUrlText = document.createTextNode("Visit")

            // Append The Repo Url Text To Anchor Tag
            theUrl.appendChild(thrUrlText);

            // Add Thje Hypertext Reference "href"
            theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
            
            // set attribet blank 
            theUrl.setAttribute('target' , '_blank')

            // append url to main div 
            mainDiv.appendChild(theUrl)

            // Create Stars Count Span
            let StarsSpan = document.createElement("span");

            // Create The Stars Count Text            
            let StarsText = document.createTextNode(`  Stars  ${repo.stargazers_count}`);

            // Add Stars Count Text To Stars Span
            StarsSpan.appendChild(StarsText);

            // Append Stars Count Span To Main Div
            mainDiv.appendChild(StarsSpan);
            
            // Add Class On Main Div
            mainDiv.classList.add("repo-box");

            // append the main div to container
            reposData.appendChild(mainDiv)

        });

    })

    }


}