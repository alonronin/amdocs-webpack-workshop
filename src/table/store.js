import { action, observable, computed } from 'mobx';

class Item {
  @observable id;
  @observable first_name;
  @observable last_name;
  @observable email;
  @observable gender;
  @observable ip_address;

  constructor(item) {
    this.setState(item);
  }

  @action setState = ({
    id = this.id,
    first_name = this.first_name,
    last_name = this.last_name,
    email = this.email,
    gender = this.gender,
    ip_address = this.ip_address,
  } = {}) => {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.ip_address = ip_address;
  };

  @computed
  get full_name() {
    return `${this.first_name} ${this.last_name}`;
  }
}

class Store {
  @observable filter = '';
  @observable genders = [];
  @observable items = [];

  @action setItems = items => {
    this.items = items.map(item => new Item(item));
  };

  @action setState = ({
    filter = this.filter,
    genders = this.genders,
  } = {}) => {
    this.filter = filter;
    this.genders = genders;
  };

  @computed
  get data() {
    return this.filter.length ? this.items.filter(item => {
      return item
      .full_name
      .toLowerCase()
      .includes(this.filter.toLowerCase());
    }) : this.items;
  }
}

export default Store;
