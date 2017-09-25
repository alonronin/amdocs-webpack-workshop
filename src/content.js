import { version } from '../package.json';
import { caps } from './utils';

import style from './style.scss';
const title = caps('Amdocs Webpack Workshop');

export default `
  <h1 class="red">${title}</h1>
  
  <p class="${style.pageDescription}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam aut consequuntur cumque dolorem, illum maiores maxime non odit officia omnis quam quisquam rem suscipit tempore ut vel vitae voluptatem!</p>
  <p>Version: ${version}</p>
`;
