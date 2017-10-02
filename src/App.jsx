import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Table from 'amdocs-components';
import Filter from './Filter';
import filterStore from './filter/store';

import Store from 'amdocs-components/dist/store';
import { get1, get2, getGenders } from './Service';

const table1 = new Store();
const table2 = new Store();

get1().then(items => {
  table1.setItems(items);
});

get2().then(items => {
  table2.setItems(items);
});

getGenders().then(genders => {
  table1.setState({ genders });
  table2.setState({ genders });
  filterStore.setState({ genders });
});

import Details from './details';

@observer
class App extends Component {
  render() {
    return <div>
      {/*<Details />*/}
      <h1>Table</h1>

      <Filter onChange={filter => table1.setState({ filter })} />
      <Table store={table1} />

      <Filter onChange={filter => table2.setState({ filter })} />
      <Table store={table2} />
    </div>;
  }
}

export default App;
