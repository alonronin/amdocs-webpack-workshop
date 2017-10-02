import { observable, action } from 'mobx';

class Store {
  @observable genders = [];

  @action setState = ({
    genders = this.genders,
  } = {}) => {
    this.genders = genders;
  }
}
