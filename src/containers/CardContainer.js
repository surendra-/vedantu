import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';
import RepoCard from '../components/RepoCard';


const CardContainer = (props) => {
        const {
            data = []
        } = props;
        return (
            <div style={styles.cardContainer}>
            {   
                data.length>0?
                data.map(repo=>(
                    <RepoCard key={repo.id} data={repo} />
                )):
                <h3 style={styles.emptyError}>No Data to display.</h3>
            }
            </div>
        );
}

CardContainer.propTypes = {
    data: PropTypes.instanceOf(Array)
};

export default CardContainer;