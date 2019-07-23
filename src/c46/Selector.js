import React from 'react';
import styles from './selector.scss'

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={"selector"}>
        this is selector
        <p>段落一</p>
        <p>段落二</p>
        <div className={"head"}>
          类选择器
        </div>
        <div id={"banner"}>
          轮播
        </div>
        <div>
          <input disabled type='text' value={"张山"} onChange={() => {
          }}/>
          <input type='password' value={""} onChange={() => {
          }}/>
        </div>
        <form action={""}>
          <input type={"button"} value={"button"} onChange={() => {
          }}/>
          <input type={"text"} value={"title"} onChange={() => {
          }}/>
        </form>
        <div>
          <h1 className={"text sport"}>我是第一号标题</h1>
          <p className={"sport"}>afasdfasd</p>
        </div>
        <a href={"www.baidu.com"}> 百度 </a>
        <p>我们会定期对 W3School 的 CSS 参考手册进行浏览器测试。CSS3 选择器在CSS 中,选择器是一种模式,用于选择需要添加样式的元素。
          "CSS" 列指示该属性是在哪个 CSS</p>
        <div className={"content"}>
          <h2>段落二，子选择器</h2>
          <div>
            <h2>段落，后代选择器</h2>
            <span>adfasfasdfasf</span>
          </div>
        </div>
        <div className={"brother"}>
          <h1>标题一，兄弟选择器</h1>
          <h2>标题二，兄弟选择器</h2>
          <h3>标题三，兄弟选择器</h3>
          <p>段落一，兄弟选择器</p>
          <p>段落二，兄弟选择器</p>
          <p>段落三，兄弟选择器</p>
          <span>sfsadfasdf</span>
        </div>
        
        <div className="inherit">
          <dl>
            <dt>Coffee</dt>
            <dd>Black hot drink</dd>
            <dt>Milk</dt>
            <dd>White cold drink</dd>
          </dl>
          <button> 确定 </button>
        </div>
        
      </div>
    );
  }
}