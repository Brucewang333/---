### 获取DOM添加删除class

- react中

```react
import React from "react";
import { Steps } from "antd";
import styles from "./index.less";
const { Step } = Steps;
export default class Index extends React.Component {
  //设置可以传递参数的默认值
  static defaultProps = {
    direction: "horizontal", //默认水平方向
    current: 0, //当前步骤
    config: [], //步骤流程
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (item, index) => {
    console.log("测试:", item, index);
    const { onChange } = this.props;
    if (onChange) onChange(item, index);
  };

  render() {
    const { config, current, direction } = this.props;
    /* 解决antd步骤条水平方向布局兼容问题---start */
    const stepsElementClassList =
      this.refs.main?.getElementsByClassName("ant-steps")[0]?.classList;
    if (direction === "horizontal" && stepsElementClassList) {
      stepsElementClassList.remove("ant-steps-vertical");
      stepsElementClassList.add("ant-steps-horizontal");
      stepsElementClassList.add("ant-steps-label-horizontal");
    }
    /* 解决步骤条水平方向布局兼容问题---end */
    let bgc = "rgba(0, 0, 0, 0.25098039215686274)";
    return (
      <div className={styles.main} ref="main">
        <Steps current={current} direction={direction}>
          {config.map((item, index) => {
            let status = "";
            if (current === index) {
              status = "process";
              bgc =
                item.SFYT === "1"
                  ? "#1890ff"
                  : "rgba(0, 0, 0, 0.25098039215686274)";
            } else {
              status = item.SFYT === "1" ? "finish" : "wait";
            }
            return (
              <Step
                key={index}
                status={status}
                onClick={() => {
                  this.handleClick(item, index);
                }}
              />
            );
          })}
        </Steps>
        <style jsx="true">
          {`
            .ant-steps-item-active
              > .ant-steps-item-container
              > .ant-steps-item-content
              > .ant-steps-item-title::after {
              background-color: ${bgc};
            }
            .ant-steps-item-wait
              > .ant-steps-item-container
              > .ant-steps-item-content
              > .ant-steps-item-title::after {
              background-color: rgba(0, 0, 0, 0.25098039215686274);
            }
          `}
        </style>
      </div>
    );
  }
}
```

- 原生js操作

```js
const elementClassList = document.getElementsByClassName("class属性名")[0]?.classList;
if (elementClassList) {
  elementClassList.remove("class属性名");//移除
  elementClassList.add("class属性名");//添加
}
```

