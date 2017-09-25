import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Form from './Form';
import Form2 from './Form2';

@observer
class App extends Component {
  render() {
    return <div>
      <Form />
      <Form2 />
    </div>;
  }
}

export default App;
