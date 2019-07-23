import React from 'react'
import style from './text.scss'

export default class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={"text"}>
        <span className={"font"}> 测试字体</span>
        <div className={"font-other"}>
          <p className={"p1"}>aerjafj;asdjf;asdkjf;asdkfj;asdfasdfgsdfgsdfgksdf;gsdfgsfdgfsdgsdf</p>
          <p className={"p2"}>aerjafj;asdjf;asdkjf;asdkfj;asdsdfgsdfgsdfgsdfgsdfgsdfgsdfsdfgsd</p>
          <p className={"p3"}>
            import React from "react";
            
            
            export default () => (
            div
            h1 Welcome to React course! /h1
            p Click the left side menu to navigate. /p
            /div
            );
          </p>
          <p
            className={"p4"}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaa</p>
          <p className={"p5"}>阴影</p>
          <p className={"p6"}>天涯若比邻,千里共婵娟</p>
        </div>
      </div>
    );
  }
}