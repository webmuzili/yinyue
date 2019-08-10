import React, { Component } from 'react';
import './header.css'
class header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cen:[
                {title:"首页"},
                {title:"MV"},
                {title:"悦单"},
                {title:"娱乐"},
                {title:"商城"},
            ]
         };
    }
    render() {
        return (
            <div className="header">
                <div className="headerout">
                    {/* 左边 logo */}
                    <div className="headerlogo">
                    </div>
                    <div className="headercenter">
                        <ul>
                            {this.state.cen.map((value,key)=>{
                            return (
                                <li key={key}>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">{value.title}</a>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* 最右边登陆注册 */}
                    <div className="denglu">
                        <a href="http://" target="_blank" rel="noopener noreferrer">登陆</a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">注册</a>
                    </div>
                    {/* 中间的vip部分 */}
                    <div className="centervip">
                        <div className="vip">
                            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                        <div className="centerapp">
                            <div className="app">
                                <ul>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">移动客户端</a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">PC客户端</a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Star明星直播</a></li>
                                </ul>
                            </div>
                        </div>
                        <span className="centerupload"></span>
                        <span className="centerheart"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;