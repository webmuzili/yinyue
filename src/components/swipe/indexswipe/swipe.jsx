import React, { Component } from 'react';
import axios from 'axios'

import './swipe.css'
class swipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swipe:[
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""},
                {title:"",img:""}
            ], 
            // swipe1:[
            //     {title:"五月天《玫瑰少年》MV首秀",img:require('../../../assets/images/swipeimage/swipe1.jpg')},
            //     {title:"薛之谦《这么久没见》MV首秀",img:require('../../../assets/images/swipeimage/swipe2.jpg')},
            //     {title:"江映蓉《我是你的猫》舞蹈版MV首",img:require('../../../assets/images/swipeimage/swipe3.png')},
            //     {title:"Tiffany Young《Magnetic Moon》MV首播",img:require('../../../assets/images/swipeimage/swipe4.jpg')},
            //     {title:"Ariana Grande《Boyfriend》MV首播",img:require('../../../assets/images/swipeimage/swipe5.jpg')},
            //     {title:"蔡徐坤《YOUNG》MV首秀",img:require('../../../assets/images/swipeimage/swipe6.jpg')},
            //     {title:"李宇春《哇》MV首秀",img:require('../../../assets/images/swipeimage/swipe7.png')},
            //     {title:"五月天《转眼》MV首秀",img:require('../../../assets/images/swipeimage/swipe8.jpg')},
            //     {title:"袁维娅《Trust Myself》MV首秀",img:require('../../../assets/images/swipeimage/swipe9.jpg')},
            //     {title:"StrayKids《Side Effects》MV首播",img:require('../../../assets/images/swipeimage/swipe10.jpg')},
            // ],
            timer:null,
            num:1
         };
    }
    lienter=()=>{
        clearInterval(this.state.timer)
    }
    lileave=()=>{
        var imgs=document.querySelectorAll(".swipeimg ul li")
        var tops=document.querySelectorAll(".swipetitle a")
        var shi=setInterval(()=>{
            this.change(tops,imgs)
        },5000)
        this.setState({
            timer:shi
        })
    }
    titleover=(e)=>{
        clearInterval(this.state.timer)
        var index=e.target.dataset.index
        var swipeimgs=document.querySelectorAll(".swipeimg ul li")
        var titles=document.querySelectorAll(".swipetitle a")
        for(var j=0;j<titles.length;j++){
            titles[j].style.color="#fff"
        }
        e.target.style.color="#00ffc3"
        for(var i=0;i<swipeimgs.length;i++){
            swipeimgs[i].querySelector("img").style.opacity="0"
            swipeimgs[i].querySelector("img").style.zIndex="0"
        }
        swipeimgs[index].querySelector("img").style.opacity="1"
        swipeimgs[index].querySelector("img").style.zIndex="1"
        index++
        this.setState({
            num:index
        })
    }
    componentDidMount=()=>{
        // 为了避免数据更新找不到元素,在static中放置空的数据
        var url="http://127.0.0.1:3001/swipe"
        axios.get(url).then((res)=>{
            this.setState({
                swipe:res.data
            })
        })

        var imgs=document.querySelectorAll(".swipeimg ul li")
        var tops=document.querySelectorAll(".swipetitle a")
        var timers=setInterval(()=>{
            this.change(tops,imgs)
        },5000)
        this.setState({
            timer:timers
        })
    }

    change=function(tops,imgs){
        var num=this.state.num
        if(num>tops.length-1){
            num=0
        }
        for(var j=0;j<tops.length;j++){
            tops[j].style.color="#fff"
        }
        tops[num].style.color="#00ffc3"
        for(var i=0;i<imgs.length;i++){
            imgs[i].querySelector("img").style.opacity="0"
            imgs[i].querySelector("img").style.zIndex="0"
        }
        imgs[num].querySelector("img").style.opacity="1"
        imgs[num].querySelector("img").style.zIndex="1"
        num++
        this.setState({
            num:num
        })
    }
    render() {
        return (
            <div className="swipe">
                <div className="swipeinclude">
                    <div className="swipeimg">
                        <ul>
                            {this.state.swipe.map((value,key)=>{
                                return (
                                    <li key={key} onMouseEnter={this.lienter} onMouseLeave={this.lileave}>
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <img src={value.img} alt=""/>
                                        </a>
                                    </li>
                                )
                            })}   
                        </ul>
                    </div>
                    <div className="swipetitle">
                        <ul>
                            {this.state.swipe.map((value,key)=>{
                                return (
                                   <a key={key} data-index={key} onMouseOver={this.titleover} onMouseLeave={this.titleleave} href="http://" target="_blank" rel="noopener noreferrer">
                                        {value.title}
                                   </a>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default swipe;