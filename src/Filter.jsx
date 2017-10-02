import React from 'react';
import { observer } from 'mobx-react';

function Filter({ onChange }) {
  return <form className="m-2">
    <input
      className="form-control"
      type="text"
      onChange={e => {onChange(e.target.value)}}
    />
  </form>;
}

export default observer(Filter);
