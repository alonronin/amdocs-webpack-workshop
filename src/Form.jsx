import React from 'react';
import { observer } from 'mobx-react';

import { title } from './style.scss';
import store from './store';

function Form() {
  return <div>
    <h1 className={title}>Amdocs Workshop</h1>

    <label htmlFor="">first:</label>
    <p><input type="text" value={store.first.name} onChange={e => store.setState({ first: { name: e.target.value } })} /></p>

    <label htmlFor="">last:</label>
    <p><input type="text" value={store.last} onChange={e => store.setState({ last: e.target.value })} /></p>

    <label htmlFor="">full name:</label>
    <p>{store.fullName}</p>
  </div>
}

export default observer(Form);
