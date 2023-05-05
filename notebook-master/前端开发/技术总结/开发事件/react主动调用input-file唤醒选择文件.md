### 事件描述

> 此组件中包涵一个原生Input file元素，它是被隐藏的，当点击我的容器元素的时候，通过refs拿到这个file input元素，调用该元素的click()方法直接就调出文件选择对话框。

react代码示例：

```react
import { Component } from "react";
import ReactDOM from "react-dom";
export default class Demo extends Component {
  handleClick = () => {
    //console.log('点击按钮主动调用input框',this.fileInput.click())
    //需要获取真实的dom元素的点击事件，而不是react实例
    ReactDOM.findDOMNode(this.fileInput).click();
  };
  handleChange = (event) => {
    console.log("测试:", event);
  };
  render() {
    return (
      <div className="container">
        <div onClick={this.handleClick}>按钮</div>
        <input
          id="file"
          type="file"
          name="singlePhoto"
          ref={(el) => (this.fileInput = el)}
          accept="image/*"
          onChange={this.handleChange}
          style={{ display: "none" }}
        />
      </div>
    );
  }
}
```

