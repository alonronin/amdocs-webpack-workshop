import data1 from './data1.json';
import data2 from './data2.json';

function get1() {
  return Promise.resolve(data1);
}

function get2() {
  return Promise.resolve(data2);
}

function getGenders() {
  return Promise.resolve([
    'Male',
    'Female',
    'TransGender'
  ])
}

export {
  get1,
  get2,
  getGenders
};
