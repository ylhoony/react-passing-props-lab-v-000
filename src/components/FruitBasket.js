import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, handleChange, currentFilter}) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={handleChange} filters={filters}/>
      <FilteredFruitList filter={currentFilter} fruit={fruit}/>
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;
