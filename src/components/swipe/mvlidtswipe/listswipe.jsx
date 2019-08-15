import React, { Component } from 'react';

import './listswipe.css'
class listswipe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {p:'YOUNG MV纪录片',h5:"双胞胎女儿声音首秀",img:require('../../../assets/images/listswipe/listswipe1.jpg')},
                {p:'《大胆》MV',h5:"JA符龙飞 “大胆”要给你好看",img:require('../../../assets/images/listswipe/listswipe2.jpg')}
            ]
         };
    }
    componentDidMount(){
        var out=document.querySelector('#listswipe').offsetWidth
        var ul=document.querySelector("#listswipe ul")
        var num=this.state.list.length+2
        console.log(num)
        var ulWidth=out*num
        ul.style.width=ulWidth+"px"
        var lis=document.querySelectorAll("#listswipe ul li")
        var li1=lis[0].cloneNode(true)
        var li2=lis[lis.length-1].cloneNode(true)
        ul.appendChild(li1)
        ul.insertBefore(li2,lis[0])

        var left=document.querySelector('.leftswipe')
        var right=document.querySelector('.rightswipe')
        var index=0
        var silde=0
        var flag=true;
        right.addEventListener('click',function(){
            if(flag){
                flag=false
                index++
                silde=-out*index
                ul.style.transform='translateX('+silde+'px)';
                ul.style.transition="all 0.5s"
            }
        })
        left.addEventListener('click',function(){ 
            if(flag){
                flag=false
                index--
                silde=-out*index
                ul.style.transform='translateX('+silde+'px)';
                ul.style.transition="all 0.5s" 
            } 
        })
        ul.addEventListener("transitionend",function(){
            flag=true
            if(index>1){
                index=0
                silde=-out*index
                ul.style.transition="none"
                ul.style.transform='translateX('+silde+'px)';
            }
            if(index<0){
                index=1
                silde=-out*index
                ul.style.transform='translateX('+silde+'px)';
                ul.style.transition="none"
            } 
        })
    }
    render() {
        return (
            <li id="listswipe">
                <div className="leftswipe"></div>
                <div className="rightswipe"></div>
                <ul >
                    {this.state.list.map((value,key)=>{
                        return (
                            <li key={key}>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={value.img} alt=""/>
                                <h5>{value.p}</h5>
                                <p>{value.h5}</p>
                                </a>
                             </li>
                        )
                    })}
                </ul>
            </li>
        );
    }
}

export default listswipe;