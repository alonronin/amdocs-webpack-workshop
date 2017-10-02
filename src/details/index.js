import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Details extends Component {
  @observable show = false;

  @action setVisible = show => this.show = show;

  render() {
    return <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at debitis dignissimos, dolorem esse eveniet facere, maiores modi natus nulla odio provident quae repellat soluta temporibus! Eligendi est nihil odit.</p>

      <button onClick={e => this.setVisible(!this.show)}>Show More</button>
      {this.show && <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur consequatur dolores eaque explicabo illum, in odit rem sapiente sint ullam veniam. Accusantium dolorem eligendi est eum magnam, placeat quo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur consequatur dolores eaque explicabo illum, in odit rem sapiente sint ullam veniam. Accusantium dolorem eligendi est eum magnam, placeat quo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consectetur consequatur dolores eaque explicabo illum, in odit rem sapiente sint ullam veniam. Accusantium dolorem eligendi est eum magnam, placeat quo.</p>
      </div>}
    </div>
  }
}

export default Details;
