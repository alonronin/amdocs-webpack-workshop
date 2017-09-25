import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const div = document.createElement('div');
document.body.append(div);

render(<App />, div);
