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
            ],
            top:[
                {title:"最爱表达爱意的男团成员是"},
                {title:'男爱豆"中毒身亡"现场'},
                {title:"零零后男孩故事在线翻天"},
                {title:"原来千禧年的爱豆是这样拍照的"},
                {title:'可爱强东玥 在线"借钱"'},
                {title:"豹笑新人女团来面试"},
                {title:'新人"相声组"李聪&Veengee专访'},
                {title:"男团面试当场刮彩票"},
                {title:"李希侃晋升面试表情大"},
                {title:"BOY STORY社内突袭访问"},
            ],
            inputValue:""
         };
    }
    inputChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    inputFous=(e)=>{
        e.target.value=""
        var centerinput= document.querySelector('.centerinput')
        centerinput.style.backgroundColor="#fff"
        var topelse=document.querySelector('.topelse')
        topelse.style.display="block"
        
    }
    inputBlur=(e)=>{
        var centerinput= document.querySelector('.centerinput')
        centerinput.style.backgroundColor="#dcdbdb"
        var topelse=document.querySelector('.topelse')
        topelse.style.display="none"
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
                            <a href="http://" target="_blank" rel="noopener noreferrer"> </a>
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
                        <div className="centerupload">
                            <div className="upload">
                                <ul>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">上传视频</a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">视频管理</a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">悦单管理</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="centerheart">

                             <a href="http://" target="_blank" rel="noopener noreferrer"> </a>
                        </div>
                    </div>
                     {/* 输入框 */}
                    <div className="centerinput">
                            <div className="kong"></div>
                            <div className="input">
                                <form>
                                    <input type="text" value={this.state.inputValue} onChange={this.inputChange} onFocus={this.inputFous} onBlur={this.inputBlur} placeholder="这些艺人的另一个身份是铲屎官"/>
                                </form>
                            </div>
                            <button></button>
                            {/* 搜索排行榜 */}
                            <div className="topelse">
                                <ul>
                                    {
                                        this.state.top.map((value,key)=>{
                                            return (
                                                <li key={key}>
                                                    <div className="number">{key+1}</div> {value.title}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;