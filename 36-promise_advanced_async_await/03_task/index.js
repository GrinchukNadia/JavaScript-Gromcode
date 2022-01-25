const fethcData = id => fetch(`https://api.github.com/users/${id}`).then(respons => respons.json())

export const getUsersBlogs = async userId => {
  const users = userId.map((el) => fethcData(el));
  const result = await Promise.all(users)
    .then(datas => datas.map(el => el.blog))

    return result;
}

getUsersBlogs(['google', 'facebook', 'twitter']).then(linksList => console.log(linksList))