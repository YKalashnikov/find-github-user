// Instantiate Github and UI class
import "../src/github.css"
import Github from './github.js'
import UI from './ui'
const github = new Github;
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get the input text
    const userText = e.target.value;

    if(userText !== '') {
   
        github.getUser(userText)
          .then(data => {
            if(data.profile.message === "Not Found") {
              ui.showAlert('User not found', 'alert alert-danger');
            } else {
              ui.showProfile(data.profile);
              ui.showRepos(data.repos);
            }
          });
    } else {
      ui.clearProfile();
    }
});