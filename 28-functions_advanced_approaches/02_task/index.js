const favorotes = ['id-2'];

const treeArr = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};

export function markFavorites(tree, favorites) {
  const isFavorite = favorites.includes(tree.id)
    return {
      ...tree,
      isFavorite,
      nodes: tree.nodes.map(childNode =>
        markFavorites(childNode, favorites)
      )
    }
}

const result = markFavorites(treeArr, favorotes)
console.log(result)