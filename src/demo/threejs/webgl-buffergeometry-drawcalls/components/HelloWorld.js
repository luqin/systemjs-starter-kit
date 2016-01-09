import BaseComponent from '../../common/BaseComponent';
import demo from '../demo';

class HelloWorld extends BaseComponent {

  init() {
    demo.init(this.getContainer());
  }

  destroy() {
    demo.destroy();
  }

}

export default HelloWorld;
