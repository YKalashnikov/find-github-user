
class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}

	showProfile(user) {
		 console.log(user);
		this.profile.innerHTML = `
        <div class="card card-body mb-3">
         <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2 " src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary  btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
           <br><br>
		   <ul class="list-group">
		   <li class="list-group-item">Bio: ${user.bio}</li>
			<li class="list-group-item">Company: ${user.company}</li>
			<li class="list-group-item">Email: 	<a href="mailto:${user.email.toLowerCase()}" target="_blank">${user.email.toLowerCase()}</a></li>
			
			<li class="list-group-item">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
			
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${new Date(user.created_at).toString().substring(0,15)}</li>
           </ul>
          </div>
         </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        <!-- Here, I am creating a new id for repos. This html element is not there in index.html -->
        `;
	}

	showRepos(repos) {
		let output = '';


		repos.forEach(function (repo) {
			output += `
				<div class="card card-body mb-2">
						<div class="row">
							<div class="col-md-6">
								<a href="${repo.html_url}" target="_blank">${repo.name}</a>
							</div>
							<div class="col-md-6">
							<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
							<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
							<span class="badge badge-success">Forks: ${repo.forms_count}</span>
							</div>
						</div>
				</div>
      `;
		});
		// Now that the output inline template variable is completely prepared with all the 10 repos, mount it tot 'repos' id within the html DOM that I created up above in this file.

		document.getElementById('repos').innerHTML = output;
	}

	//show alert message, when the typed user name in the search box is NOT valid github user name

	showAlert(message, className) {

		this.clearAlert();
		const div = document.createElement('div');

		div.className = className;

		div.appendChild(document.createTextNode(message));

		const container = document.querySelector('.searchContainer');

		const search = document.querySelector('.search');

		container.insertBefore(div, search);

		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if(currentAlert) {
			currentAlert.remove();
		}
	}

	clearProfile() {
		this.profile.innerHTML = '';
	}
}