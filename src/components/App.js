import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentFilter: null,
      fruit: [],
      filters: []
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return(
      <FruitBasket 
        fruit={this.state.fruit} 
        filters={this.state.filters} 
        handleChange={this.handleFilterChange} 
        currentFilter={this.state.currentFilter} />
    )
  }
}

export default App;
