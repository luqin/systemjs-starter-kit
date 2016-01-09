import BaseComponent from '../../common/BaseComponent';
import demo from '../demo';

class Three extends BaseComponent {

  init() {
    demo.init(this.getContainer());
  }

}

export default Three;
