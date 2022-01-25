const generateRepoList = (data) =>
  data.map(
    ({ name }) => `
                <li class="repo-list__item">${name}</li>
              `
  );

export const renderRepoList = (data) => {
  const repoListElem = document.querySelector('.repo-list');
  const repoNames = generateRepoList(data);
  repoListElem.innerHTML = repoNames.join(' ');
};