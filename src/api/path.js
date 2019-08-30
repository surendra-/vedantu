
const repositoryPath = (query, page=1) =>`https://api.github.com/search/repositories?q=${query}&page=${page}` 

export  {
    repositoryPath
}