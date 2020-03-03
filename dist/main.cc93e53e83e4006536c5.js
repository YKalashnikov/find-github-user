!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);const s=new class{constructor(){this.client_id="80095ab70783897d06fc",this.client_secret="9f3780f63c656718b8b0a9a72e09a4bf143ca9f6",this.repos_count=10,this.repos_sort="created: asc"}async getUser(t){const e=await fetch(`https://api.github.com/users/${t}?client_id=${this.client_id}&client_secret=${this.client_secret}`),n=await fetch(`https://api.github.com/users/${t}/repos?per_page={this.repos_count}&sort={this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);return{profile:await e.json(),repos:await n.json()}}},r=new class{constructor(){this.profile=document.getElementById("profile")}showProfile(t){console.log(t),this.profile.innerHTML=`\n        <div class="card card-body mb-3">\n         <div class="row">\n          <div class="col-md-3">\n            <img class="img-fluid mb-2 " src="${t.avatar_url}">\n            <a href="${t.html_url}" target="_blank" class="btn btn-primary  btn-block mb-4">View Profile</a>\n          </div>\n          <div class="col-md-9">\n            <span class="badge badge-primary">Public Repos: ${t.public_repos}</span>\n            <span class="badge badge-secondary">Public Gists: ${t.public_gists}</span>\n            <span class="badge badge-success">Followers: ${t.followers}</span>\n            <span class="badge badge-info">Following: ${t.following}</span>\n           <br><br>\n\t\t   <ul class="list-group">\n\t\t   <li class="list-group-item">Bio: ${t.bio}</li>\n\t\t\t<li class="list-group-item">Company: ${t.company}</li>\n\t\t\t<li class="list-group-item">Email: \t<a href="mailto:${t.email.toLowerCase()}" target="_blank">${t.email.toLowerCase()}</a></li>\n\t\t\t\n\t\t\t<li class="list-group-item">Website: <a href="${t.blog}" target="_blank">${t.blog}</a></li>\n\t\t\t\n            <li class="list-group-item">Location: ${t.location}</li>\n            <li class="list-group-item">Member Since: ${new Date(t.created_at).toString().substring(0,15)}</li>\n           </ul>\n          </div>\n         </div>\n        </div>\n        <h3 class="page-heading mb-3">Latest Repos</h3>\n        <div id="repos"></div>\n        \x3c!-- Here, I am creating a new id for repos. This html element is not there in index.html --\x3e\n        `}showRepos(t){let e="";t.forEach((function(t){e+=`\n\t\t\t\t<div class="card card-body mb-2">\n\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t<a href="${t.html_url}" target="_blank">${t.name}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t<span class="badge badge-primary">Stars: ${t.stargazers_count}</span>\n\t\t\t\t\t\t\t<span class="badge badge-secondary">Watchers: ${t.watchers_count}</span>\n\t\t\t\t\t\t\t<span class="badge badge-success">Forks: ${t.forms_count}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n      `})),document.getElementById("repos").innerHTML=e}showAlert(t,e){this.clearAlert();const n=document.createElement("div");n.className=e,n.appendChild(document.createTextNode(t));const s=document.querySelector(".searchContainer"),r=document.querySelector(".search");s.insertBefore(n,r),setTimeout(()=>{this.clearAlert()},3e3)}clearAlert(){const t=document.querySelector(".alert");t&&t.remove()}clearProfile(){this.profile.innerHTML=""}};document.getElementById("searchUser").addEventListener("keyup",t=>{const e=t.target.value;""!==e?s.getUser(e).then(t=>{"Not Found"===t.profile.message?r.showAlert("User not found","alert alert-danger"):(r.showProfile(t.profile),r.showRepos(t.repos))}):r.clearProfile()})}]);