import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles'

const RepoCard =(props)=> {
    const {
        data
    } = props;
    const { name, owner={}, 
        forks, open_issues: openIssues, 
        stargazers_count: stars,
        description='',
        html_url: link = ''
    } = data;
    const { avatar_url: avatar } = owner
    return (
        <div style={styles.card}>
            <img src={avatar} alt="repo avatar" style={styles.image} />
            <h4>{name.length > 15 ? `${name.substr(0, 15)}...`: name}</h4>
            <div style={styles.chipContainer}>
                <span style={styles.chip}>&#9733; {stars}</span>
                <span style={styles.chip}>{forks} forks</span>
                <span style={styles.chip}>{openIssues} open Issues</span>
            </div>
            <div style={styles.description}>
                {description &&  description.substr(0, 20)}
            </div>
            <div style={styles.viewProfile}>
                <a href={link}>View Profile</a>
            </div>
        </div>
    );
}

RepoCard.propTypes = {
    data: PropTypes.instanceOf(Object)
};

export default RepoCard;