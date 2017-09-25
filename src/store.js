import { action, observable, computed } from 'mobx';

class Store {
  @observable first = {
    title: 'Mr.',
    name: 'Mattan',
    age: 2
  };
  @observable last = 'Bitner';

  @action setState = ({
    first = this.first,
    last = this.last,
  } = {}) => {
    this.first = {...this.first, ...first};
    this.last = last;
  };

  @action changeName = name => this.first.name = name;

  @computed
  get fullName() {
    return this.first.name + ' ' + this.last;
  }
}

export default new Store();
