import React from 'react';
import { observer } from 'mobx-react';

import store from './store';

function Form() {
  return <div>
    <h2>{store.first.name}</h2>

    <p>
      {store.first.age}
    </p>
  </div>
}

export default observer(Form);
