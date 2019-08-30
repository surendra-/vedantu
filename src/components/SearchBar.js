import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const {
        query = "",
        onChange,
        onSearch
    } = props;
    return (
        <div>
            <input name="query" value={query} onChange={onChange} />
            <button onClick={onSearch}>Search </button>
        </div>
    );
}

SearchBar.propTypes = {
    query: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func
};

export default SearchBar;