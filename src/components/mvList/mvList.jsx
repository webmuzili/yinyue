import React, { Component } from 'react';

import './mvList.css'
class mvList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:{
                title:"首播",
                array:[
                    {line:"全部",attr:"all"},
                    {line:"内地",attr:"in"},
                    {line:"港台",attr:"tai"},
                    {line:"欧美",attr:"mei"},
                    {line:"韩国",attr:"kr"},
                    {line:"日本",attr:"ja"},
                ]
            },
            ceshi:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
         };
    }
    componentDidMount(){
        // 动态生成ul长度
        var li=document.querySelector('.mvListInclude li')
        var lis=document.querySelectorAll('.mvListInclude li')
        var width=(li.offsetWidth+30)*lis.length
        var ul=document.querySelector('.mvListInclude ul')
        ul.style.width=width+'px'

        // 切换ul
        var step=document.querySelector('.mvListInclude').offsetWidth+30
        var num=0;
        var right=document.querySelector('.mvListRight')
        var left=document.querySelector('.mvListLeft')
        left.style.display="none"
        right.addEventListener('click',function(){
            num++
            var silde=-step*num
            ul.style.transform='translateX('+silde+'px)';
            left.style.display="block"
            if(num===3){
                right.style.display="none"
            }
        })
        left.addEventListener('click',function(){
            num--
            var silde=-step*num
            ul.style.transform='translateX('+silde+'px)';
            right.style.display="block"
            if(num===0){
                left.style.display="none"
            }
        })
    }
    changelist=(e)=>{
        var ali=document.querySelectorAll('.mvListTitleRight li')
        for(var i=0;i<ali.length;i++){
            ali[i].querySelector("span").style.color="#666"
            ali[i].querySelector("span").style.borderBottom="none"
        }
        e.target.style.color="#52e2c0"
        e.target.style.borderBottom="2px solid #52e2c0"
    }
    render() {
        return (
            <div className="mvList">
                <div className="mvListout">
                    <div className="mvListLeft"></div>
                    <div className="mvListRight"></div>
                    <div className="mvListin">
                        <div className="mvListTitle">
                            <h3 className="mvListTitleLeft">{this.state.data.title}</h3>
                            <ul className="mvListTitleRight">
                                {this.state.data.array.map((value,key)=>{
                                    return (
                                        <li key={key}>
                                            <span data-attr={value.attr} onClick={this.changelist}>{value.line}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="line"></div>
                        <div className="mvListInclude">
                            <ul>
                                {this.state.ceshi.map((value,key)=>{
                                    return (
                                        <li key={key}>
                                        <div className="include">
                                         <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <img src={require('../../assets/images/list1.jpg')} alt=""/> 
                                            <h5>小小鸟 电影《愤怒的小鸟2》中国区推广曲</h5>  
                                            <p>吴宣仪(火箭少女101)</p>
                                       </a> 
                                    </div>
                                    <div className="include">
                                       <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <img src={require('../../assets/images/list1.jpg')} alt=""/> 
                                            <h5>小小鸟 电影《愤怒的小鸟2》中国区推广曲</h5>  
                                            <p>吴宣仪(火箭少女101)</p>
                                       </a> 
                                    </div>
                                </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mvList;