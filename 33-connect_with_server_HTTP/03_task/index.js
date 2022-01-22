// const arrUsers = [];
// const commitDate = new Date(el.commit.author.date);
// const validDate = new Date(
//   new Date().setDate(new Date().getDate() - days)
// );
export const getMostActiveDevs = (arr) => {
  const { days, userId, repoId } = arr;
  const url = `https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`;
  return fetch(url)
    .then((response) => response.json())
    .then((value) => {

      const counted = value.reduce(
        (acc, el) => ({
          ...acc,
          [el.commit.author.name]: {
            count:
              (acc[el.commit.author.name]
                ? acc[el.commit.author.name].count
                : 0 || 0) + 1,
            author: el.commit.author.name,
            email: el.commit.author.email,
            date: el.commit.author.date,
          },
        }),
        {}
      );

      let initialArr = [];
      let maxCount = 0;
      Object.values(counted).forEach((el) => {
        if (el.count === maxCount) {
          initialArr.push({
            count: el.count,
            name: el.author,
            email: el.email,
          });
        }
        if (el.count > maxCount) {
          initialArr = [{ count: el.count, name: el.author, email: el.email }];
          maxCount = el.count;
        }
      });

      return initialArr;
    });
};

const arr = {
  days: 102,
  userId: 'andrii142',
  repoId: 'content-1',
};
getMostActiveDevs(arr).then(el => console.log(el));