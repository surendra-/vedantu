import { repositoryPath } from '../api/path';
import API from '../api/networkHandler'

const searchRepositoryByQuery = (query, page, callback) =>{
    API.sendRequest('GET', repositoryPath(query, page), '', callback);
}


export {
    searchRepositoryByQuery
}