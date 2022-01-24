import { renderRepoList } from "./renderRepoList.js";
import { hideSpinner } from "./spinner.js";

export const fetchUserData = (name) =>
  fetch(`https://api.github.com/users/${name}`)
    .then((response) => response.json());

export const fetchUserRepo = (userData) => {
  fetch(userData.repos_url)
    .then((response) => response.json())
    .then((data) => {
      renderRepoList(data);
    })
    .catch((e) => alert('Failed to load data'))
    .finally( () =>  hideSpinner())
}