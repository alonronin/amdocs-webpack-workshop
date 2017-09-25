import React from 'react';
import { useStrict } from 'mobx';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

useStrict(true);
import App from './App';

const div = document.createElement('div');
document.body.append(div);

render(<App />, div);
