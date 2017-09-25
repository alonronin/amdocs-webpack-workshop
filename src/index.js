import 'bootstrap/dist/css/bootstrap.css';

import content from './content';
import './style.scss';

const div = document.createElement('div');
div.innerHTML = content;

document.body.append(div);
