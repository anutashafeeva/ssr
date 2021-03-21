import React from 'react';
import FilterBy from './FilterBy.js';
import SortBy from './SortBy.js';

const Sort = () => (
  <div className='search-options'>
    <FilterBy/>
    <SortBy/>
  </div>
);
  
export default Sort;