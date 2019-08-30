import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import {searchRepositoryByQuery} from  '../controllers/Controller'
import styles from '../styles'
import CardContainer from '../containers/CardContainer';

class GitSearch extends Component {
    constructor(props){
        super(props);
        this.state={
            query:'',
            currentPage:1,
            repos:[],
            totalPages:1
        }
    }

    handleQueryChange=(event)=>{
        const { value } = event.target;
        this.setState({
            query: value
        })
    }

    handleSearch = (currentPage = 1) =>{
        const { query } = this.state;
        searchRepositoryByQuery(query, currentPage, (err, res)=>{
            if(err) this.setState({repos:[]});
            else {
                const { total_count, items=[], size=30} = res;
                let totalPages = parseInt(total_count/size);
                if(total_count%size!==0) totalPages+=1;
                this.setState({
                    totalPages,
                    repos: items,
                    size,
                    currentPage
                })
            }
        });
    }

    render() {
        const { query, repos, totalPages, currentPage } = this.state;
        return (
            <div style={styles.rootContainer}>
                <SearchBar 
                    query={query}
                    onChange={this.handleQueryChange}
                    onSearch={()=>this.handleSearch(1)}
                />
               <CardContainer data={repos}/>
                <div style={styles.pagination}>
                   {
                       totalPages>1 && 
                       <div>
                           { currentPage > 1 && <button onClick={()=>this.handleSearch(currentPage-1)}>Prev</button>}
                           { totalPages>currentPage && <button onClick={()=>this.handleSearch(currentPage+1)}>Next</button>}
                       </div>
                   } 
                </div>
            </div>
        );
    }
}

export default GitSearch;