import { version } from '../package.json';
import { caps } from './utils';

const title = caps('Amdocs Webpack Workshop');

export default `
  <h1>${title}</h1>
  
  <p class="page-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam aut consequuntur cumque dolorem, illum maiores maxime non odit officia omnis quam quisquam rem suscipit tempore ut vel vitae voluptatem!</p>
  <p>Version: ${version}</p>
`;
