import { renderRepoList } from "./renderRepoList.js";
import { hideSpinner } from "./spinner.js";

export const fetchUserData = async(name) =>{
  const response = await fetch(`https://api.github.com/users/${name}`);
  const data = await response.json();
  return data
}

export const fetchUserRepo = async(userData) => {
  try {
    const response = await fetch(userData.repos_url)
    const data = await response.json()
    renderRepoList(data);
  }catch(e) {
    alert('Failed to load data')
  }finally {
    hideSpinner()
  }
}