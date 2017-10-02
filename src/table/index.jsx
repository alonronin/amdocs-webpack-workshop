import React from 'react';
import { observer } from 'mobx-react';

function Table({ store }) {
  return <table className="table">
    <thead>
      <tr>
        <th>Full Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Ip</th>
      </tr>
    </thead>
    <tbody>
      {store.data.map(({id, full_name, email, gender, ip_address}) => <tr key={id}>
        <td>{full_name}</td>
        <td>{email}</td>
        <td><select disabled>
          {store.genders.map(item => <option selected={gender === item}>{item}</option>)}
        </select></td>
        <td>{ip_address}</td>
      </tr>)}
    </tbody>
  </table>
}

export default observer(Table);
