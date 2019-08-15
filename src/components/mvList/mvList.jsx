import React, { Component } from 'react';
import Listswipe from '../swipe/mvlidtswipe/listswipe.jsx'

import './mvList.css'
class mvList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:{
                title:"首播",
                array:[
                    {line:"全部",attr:"all",direction:1},
                    {line:"内地",attr:"in",direction:2},
                    {line:"港台",attr:"tai",direction:3},
                    {line:"欧美",attr:"mei",direction:2},
                    {line:"韩国",attr:"kr",direction:2},
                    {line:"日本",attr:"ja",direction:2},
                ]
            },
            ceshi:[
                {top:{p:'Let the Dolphins Fly',h5:"查可欣",img:require('../../assets/images/mvlistimg/list40.jpg')},
                bottom:{p:'短歌行电视剧《长安十二时辰》主题推广曲',h5:"萨顶顶",img:require('../../assets/images/mvlistimg/list41.jpg')}},
                {top:{p:'小心肝',h5:"八三夭乐团",img:require('../../assets/images/mvlistimg/list42.jpg')},
                bottom:{p:'有一种悲伤 A Kind of Sorrow',h5:"刘以豪",img:require('../../assets/images/mvlistimg/list43.jpg')}},
                {top:{p:'大胆 官方版',h5:"JA符飞龙",img:require('../../assets/images/mvlistimg/list2.jpg')},
                bottom:{p:'小小鸟 电影《愤怒的小鸟2》中国区推广曲',h5:"吴宣仪(火箭少女101)",img:require('../../assets/images/mvlistimg/list3.jpg')}},
                {top:{p:'飒小姐 官方版',h5:"火箭少女101",img:require('../../assets/images/mvlistimg/list4.jpg')},
                bottom:{p:'逆流而上 官方版',h5:"罗云熙",img:require('../../assets/images/mvlistimg/list5.jpg')}},
                {top:{p:'都是月老的惹的祸',h5:"丁当",img:require('../../assets/images/mvlistimg/list6.jpg')},
                bottom:{p:'一生守候  电影《保持沉默》主题曲',h5:"周迅",img:require('../../assets/images/mvlistimg/list7.jpg')}},
                {top:{p:'我是你的猫 舞蹈版',h5:"江映蓉",img:require('../../assets/images/mvlistimg/list8.png')},
                bottom:{p:'第七日 官方版',h5:"陈粒",img:require('../../assets/images/mvlistimg/list8.jpg')}},
                {top:{p:'这么久没见 官方版',h5:"薛之谦",img:require('../../assets/images/mvlistimg/list9.jpg')},
                bottom:{p:'如果不能结婚',h5:"胡杨林",img:require('../../assets/images/mvlistimg/list10.jpg')}},
                {top:{p:'骑单车 官方版',h5:"易安音乐社",img:require('../../assets/images/mvlistimg/list11.jpg')},
                bottom:{p:'世界末日  电影《上海堡垒》主题曲',h5:"鹿晗",img:require('../../assets/images/mvlistimg/list12.jpg')}},
                {top:{p:'无话，不说',h5:"李莎旻子",img:require('../../assets/images/mvlistimg/list13.jpg')},
                bottom:{p:'别哭,我最爱的人 电影《烈火英雄》致敬宣传曲',h5:"黄晓明",img:require('../../assets/images/mvlistimg/list14.jpg')}},
                {top:{p:'YOUNG 练习室版',h5:"蔡徐坤",img:require('../../assets/images/mvlistimg/list15.jpg')},
                bottom:{p:'守候 电视剧《加油,你是最棒的》插曲',h5:"马思纯",img:require('../../assets/images/mvlistimg/list16.jpg')}},
                {top:{p:'突然想爱你 电视剧《加油,你是最棒的》插曲',h5:"邓伦",img:require('../../assets/images/mvlistimg/list17.jpg')},
                bottom:{p:'Couldn’t Leave  电视剧《亲爱的,热爱的》插曲',h5:"迪玛希·库达依别列根",img:require('../../assets/images/mvlistimg/list18.jpg')}},
                {top:{p:'一番星  电影《银河补习班》共鸣曲',h5:"摩登兄弟刘宇宁",img:require('../../assets/images/mvlistimg/list19.jpg')},
                bottom:{p:'YOUNG 官方版',h5:"蔡徐坤",img:require('../../assets/images/mvlistimg/list20.jpg')}},
                {top:{p:'一起走的幸福  电视剧《亲爱的,热爱的》插曲',h5:"段奥娟(火箭少女101)",img:require('../../assets/images/mvlistimg/list21.jpg')},
                bottom:{p:'外婆桥 官方版',h5:"沈煜伦",img:require('../../assets/images/mvlistimg/list22.jpg')}},
                {top:{p:'安心 重制版',h5:"印子月",img:require('../../assets/images/mvlistimg/list23.jpg')},
                bottom:{p:'银河里最像的人  《银河补习班》邓超主题曲',h5:"邓超",img:require('../../assets/images/mvlistimg/list23.jpg')}},
                {top:{p:'云野 官方版',h5:"好妹妹乐队",img:require('../../assets/images/mvlistimg/list24.jpg')},
                bottom:{p:'巅峰荣耀  电影《全职高手之巅峰荣耀》主题曲',h5:"阿云嘎 & 郑云龙",img:require('../../assets/images/mvlistimg/list25.jpg')}},
                {top:{p:'Don’t Wait Any More 电影《舞出我人生之舞所不能》 主题曲',h5:"孟美岐(火箭少女101) & Justin黄明昊",img:require('../../assets/images/mvlistimg/list26.jpg')},
                bottom:{p:'姗姗  电影《跳舞吧!大象》插曲',h5:"金玟岐",img:require('../../assets/images/mvlistimg/list27.jpg')}},
                {top:{p:'今后我与自己流浪  《哪吒之魔童降世》片尾曲',h5:"张碧晨",img:require('../../assets/images/mvlistimg/list28.jpg')},
                bottom:{p:'时光尽头 电视剧《归还世界给你》沈忆恩人物曲',h5:"娜扎",img:require('../../assets/images/mvlistimg/list29.jpg')}},
                {top:{p:'没你的下雨天 官方版',h5:"张伦硕",img:require('../../assets/images/mvlistimg/34.jpg')},
                bottom:{p:'别说 官方版',h5:"胡家豪",img:require('../../assets/images/mvlistimg/23.jpg')}},
                {top:{p:'Summer Time 官方版',h5:"易安音乐社",img:require('../../assets/images/mvlistimg/list34.jpg')},
                bottom:{p:'宇宙之光 电影《素人特工》主题曲',h5:"许魏洲",img:require('../../assets/images/mvlistimg/list35.jpg')}},
                {top:{p:'都是夜归人 电影《深夜食堂》片尾曲',h5:"阿云嘎 & 郑云龙",img:require('../../assets/images/mvlistimg/list36.jpg')},
                bottom:{p:'你得到了你想要的',h5:"谢容儿",img:require('../../assets/images/mvlistimg/list37.jpg')}}
            ],
            ceshi1:[
                {top:{p:'大胆 官方版',h5:"JA符飞龙",img:require('../../assets/images/mvlistimg/list2.jpg')},
                bottom:{p:'小小鸟 电影《愤怒的小鸟2》中国区推广曲',h5:"吴宣仪(火箭少女101)",img:require('../../assets/images/mvlistimg/list3.jpg')}},
                {top:{p:'飒小姐 官方版',h5:"火箭少女101",img:require('../../assets/images/mvlistimg/list4.jpg')},
                bottom:{p:'逆流而上 官方版',h5:"罗云熙",img:require('../../assets/images/mvlistimg/list5.jpg')}},
                {top:{p:'都是月老的惹的祸',h5:"丁当",img:require('../../assets/images/mvlistimg/list6.jpg')},
                bottom:{p:'一生守候  电影《保持沉默》主题曲',h5:"周迅",img:require('../../assets/images/mvlistimg/list7.jpg')}},
                {top:{p:'我是你的猫 舞蹈版',h5:"江映蓉",img:require('../../assets/images/mvlistimg/list8.png')},
                bottom:{p:'第七日 官方版',h5:"陈粒",img:require('../../assets/images/mvlistimg/list8.jpg')}},
                {top:{p:'这么久没见 官方版',h5:"薛之谦",img:require('../../assets/images/mvlistimg/list9.jpg')},
                bottom:{p:'如果不能结婚',h5:"胡杨林",img:require('../../assets/images/mvlistimg/list10.jpg')}},
                {top:{p:'骑单车 官方版',h5:"易安音乐社",img:require('../../assets/images/mvlistimg/list11.jpg')},
                bottom:{p:'世界末日  电影《上海堡垒》主题曲',h5:"鹿晗",img:require('../../assets/images/mvlistimg/list12.jpg')}},
                {top:{p:'无话，不说',h5:"李莎旻子",img:require('../../assets/images/mvlistimg/list13.jpg')},
                bottom:{p:'别哭,我最爱的人 电影《烈火英雄》致敬宣传曲',h5:"黄晓明",img:require('../../assets/images/mvlistimg/list14.jpg')}},
                {top:{p:'YOUNG 练习室版',h5:"蔡徐坤",img:require('../../assets/images/mvlistimg/list15.jpg')},
                bottom:{p:'守候 电视剧《加油,你是最棒的》插曲',h5:"马思纯",img:require('../../assets/images/mvlistimg/list16.jpg')}},
                {top:{p:'突然想爱你 电视剧《加油,你是最棒的》插曲',h5:"邓伦",img:require('../../assets/images/mvlistimg/list17.jpg')},
                bottom:{p:'Couldn’t Leave  电视剧《亲爱的,热爱的》插曲',h5:"迪玛希·库达依别列根",img:require('../../assets/images/mvlistimg/list18.jpg')}},
                {top:{p:'一番星  电影《银河补习班》共鸣曲',h5:"摩登兄弟刘宇宁",img:require('../../assets/images/mvlistimg/list19.jpg')},
                bottom:{p:'YOUNG 官方版',h5:"蔡徐坤",img:require('../../assets/images/mvlistimg/list20.jpg')}},
                {top:{p:'一起走的幸福  电视剧《亲爱的,热爱的》插曲',h5:"段奥娟(火箭少女101)",img:require('../../assets/images/mvlistimg/list21.jpg')},
                bottom:{p:'外婆桥 官方版',h5:"沈煜伦",img:require('../../assets/images/mvlistimg/list22.jpg')}},
                {top:{p:'安心 重制版',h5:"印子月",img:require('../../assets/images/mvlistimg/list23.jpg')},
                bottom:{p:'银河里最像的人  《银河补习班》邓超主题曲',h5:"邓超",img:require('../../assets/images/mvlistimg/list23.jpg')}},
                {top:{p:'云野 官方版',h5:"好妹妹乐队",img:require('../../assets/images/mvlistimg/list24.jpg')},
                bottom:{p:'巅峰荣耀  电影《全职高手之巅峰荣耀》主题曲',h5:"阿云嘎 & 郑云龙",img:require('../../assets/images/mvlistimg/list25.jpg')}},
                {top:{p:'Don’t Wait Any More 电影《舞出我人生之舞所不能》 主题曲',h5:"孟美岐(火箭少女101) & Justin黄明昊",img:require('../../assets/images/mvlistimg/list26.jpg')},
                bottom:{p:'姗姗  电影《跳舞吧!大象》插曲',h5:"金玟岐",img:require('../../assets/images/mvlistimg/list27.jpg')}},
                {top:{p:'今后我与自己流浪  《哪吒之魔童降世》片尾曲',h5:"张碧晨",img:require('../../assets/images/mvlistimg/list28.jpg')},
                bottom:{p:'时光尽头 电视剧《归还世界给你》沈忆恩人物曲',h5:"娜扎",img:require('../../assets/images/mvlistimg/list29.jpg')}},
                {top:{p:'没你的下雨天 官方版',h5:"张伦硕",img:require('../../assets/images/mvlistimg/34.jpg')},
                bottom:{p:'别说 官方版',h5:"胡家豪",img:require('../../assets/images/mvlistimg/23.jpg')}},
                {top:{p:'Summer Time 官方版',h5:"易安音乐社",img:require('../../assets/images/mvlistimg/list34.jpg')},
                bottom:{p:'宇宙之光 电影《素人特工》主题曲',h5:"许魏洲",img:require('../../assets/images/mvlistimg/list35.jpg')}},
                {top:{p:'都是夜归人 电影《深夜食堂》片尾曲',h5:"阿云嘎 & 郑云龙",img:require('../../assets/images/mvlistimg/list36.jpg')},
                bottom:{p:'你得到了你想要的',h5:"谢容儿",img:require('../../assets/images/mvlistimg/list37.jpg')}}
            ],
            ceshi2:[
                {p:'张杰"未 LIVE"巡回演唱会 北京站',h5:"双胞胎女儿声音首秀",img:require('../../assets/images/mvlistimg/list1.png')},
                {top:{p:'大胆 官方版',h5:"JA符飞龙",img:require('../../assets/images/mvlistimg/list2.jpg')},
                bottom:{p:'小小鸟 电影《愤怒的小鸟2》中国区推广曲',h5:"吴宣仪(火箭少女101)",img:require('../../assets/images/mvlistimg/list3.jpg')}},
                {top:{p:'飒小姐 官方版',h5:"火箭少女101",img:require('../../assets/images/mvlistimg/list4.jpg')},
                bottom:{p:'逆流而上 官方版',h5:"罗云熙",img:require('../../assets/images/mvlistimg/list5.jpg')}},
                {top:{p:'都是月老的惹的祸',h5:"丁当",img:require('../../assets/images/mvlistimg/list6.jpg')},
                bottom:{p:'一生守候  电影《保持沉默》主题曲',h5:"周迅",img:require('../../assets/images/mvlistimg/list7.jpg')}},
                {top:{p:'我是你的猫 舞蹈版',h5:"江映蓉",img:require('../../assets/images/mvlistimg/list8.png')},
                bottom:{p:'第七日 官方版',h5:"陈粒",img:require('../../assets/images/mvlistimg/list8.jpg')}},
                {top:{p:'这么久没见 官方版',h5:"薛之谦",img:require('../../assets/images/mvlistimg/list9.jpg')},
                bottom:{p:'如果不能结婚',h5:"胡杨林",img:require('../../assets/images/mvlistimg/list10.jpg')}},
                {top:{p:'骑单车 官方版',h5:"易安音乐社",img:require('../../assets/images/mvlistimg/list11.jpg')},
                bottom:{p:'世界末日  电影《上海堡垒》主题曲',h5:"鹿晗",img:require('../../assets/images/mvlistimg/list12.jpg')}},
                {top:{p:'无话，不说',h5:"李莎旻子",img:require('../../assets/images/mvlistimg/list13.jpg')},
                bottom:{p:'别哭,我最爱的人 电影《烈火英雄》致敬宣传曲',h5:"黄晓明",img:require('../../assets/images/mvlistimg/list14.jpg')}},
                {top:{p:'YOUNG 练习室版',h5:"蔡徐坤",img:require('../../assets/images/mvlistimg/list15.jpg')},
                bottom:{p:'守候 电视剧《加油,你是最棒的》插曲',h5:"马思纯",img:require('../../assets/images/mvlistimg/list16.jpg')}},
                {top:{p:'突然想爱你 电视剧《加油,你是最棒的》插曲',h5:"邓伦",img:require('../../assets/images/mvlistimg/list17.jpg')},
                bottom:{p:'Couldn’t Leave  电视剧《亲爱的,热爱的》插曲',h5:"迪玛希·库达依别列根",img:require('../../assets/images/mvlistimg/list18.jpg')}},
                {top:{p:'一番星  电影《银河补习班》共鸣曲',h5:"摩登兄弟刘宇宁",img:require('../../assets/images/mvlistimg/list19.jpg')},
                bottom:{p:'YOUNG 官方版',h5:"蔡徐坤",img:require('../../assets/images/mvlistimg/list20.jpg')}},
                {top:{p:'一起走的幸福  电视剧《亲爱的,热爱的》插曲',h5:"段奥娟(火箭少女101)",img:require('../../assets/images/mvlistimg/list21.jpg')},
                bottom:{p:'外婆桥 官方版',h5:"沈煜伦",img:require('../../assets/images/mvlistimg/list22.jpg')}},
                {top:{p:'安心 重制版',h5:"印子月",img:require('../../assets/images/mvlistimg/list23.jpg')},
                bottom:{p:'银河里最像的人  《银河补习班》邓超主题曲',h5:"邓超",img:require('../../assets/images/mvlistimg/list23.jpg')}},
                {top:{p:'云野 官方版',h5:"好妹妹乐队",img:require('../../assets/images/mvlistimg/list24.jpg')},
                bottom:{p:'巅峰荣耀  电影《全职高手之巅峰荣耀》主题曲',h5:"阿云嘎 & 郑云龙",img:require('../../assets/images/mvlistimg/list25.jpg')}},
                {top:{p:'Don’t Wait Any More 电影《舞出我人生之舞所不能》 主题曲',h5:"孟美岐(火箭少女101) & Justin黄明昊",img:require('../../assets/images/mvlistimg/list26.jpg')},
                bottom:{p:'姗姗  电影《跳舞吧!大象》插曲',h5:"金玟岐",img:require('../../assets/images/mvlistimg/list27.jpg')}},
                {top:{p:'今后我与自己流浪  《哪吒之魔童降世》片尾曲',h5:"张碧晨",img:require('../../assets/images/mvlistimg/list28.jpg')},
                bottom:{p:'时光尽头 电视剧《归还世界给你》沈忆恩人物曲',h5:"娜扎",img:require('../../assets/images/mvlistimg/list29.jpg')}},
                {top:{p:'没你的下雨天 官方版',h5:"张伦硕",img:require('../../assets/images/mvlistimg/34.jpg')},
                bottom:{p:'别说 官方版',h5:"胡家豪",img:require('../../assets/images/mvlistimg/23.jpg')}},
                {top:{p:'Summer Time 官方版',h5:"易安音乐社",img:require('../../assets/images/mvlistimg/list34.jpg')},
                bottom:{p:'宇宙之光 电影《素人特工》主题曲',h5:"许魏洲",img:require('../../assets/images/mvlistimg/list35.jpg')}},
                {top:{p:'都是夜归人 电影《深夜食堂》片尾曲',h5:"阿云嘎 & 郑云龙",img:require('../../assets/images/mvlistimg/list36.jpg')},
                bottom:{p:'你得到了你想要的',h5:"谢容儿",img:require('../../assets/images/mvlistimg/list37.jpg')}}
            ],
            directi:1
         };
    }
    componentDidMount(){
        // 动态生成ul长度
        var li=document.querySelector('.mvListInclude li')
        var lis=document.querySelectorAll('.mvListInclude li')
        var width=(li.offsetWidth+30)*(lis.length+1)
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

        var status=e.target.dataset.dir
        this.setState({
            directi:status
        })

        var li=document.querySelector('.mvListInclude li')
        var lis=document.querySelectorAll('.mvListInclude li')
        var ul=document.querySelector('.mvListInclude ul')
        var width=0
        if(parseInt(status)===2){ 
            width=(li.offsetWidth+30)*lis.length
            ul.style.width=width+'px'
        }else{
            width=(li.offsetWidth+30)*(lis.length+1)
            ul.style.width=width+'px'
        }
    }
    changeMvlist=()=>{
        if(parseInt(this.state.directi)===2){
            return (
                this.state.ceshi.map((value,key)=>{
                    return (
                        <li key={key}>
                        <div className="include">
                         <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={value.top.img} alt=""/> 
                            <h5>{value.top.p}</h5>  
                            <p>{value.top.h5}</p>
                       </a> 
                    </div>
                    <div className="include">
                       <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={value.bottom.img} alt=""/> 
                            <h5>{value.bottom.p}</h5>  
                            <p>{value.bottom.h5}</p>
                       </a> 
                    </div>
                </li>
                    )
                })
            )
        }else if(parseInt(this.state.directi)===1){
            return (
                this.state.ceshi2.map((value,key)=>{
                    if(key===0){
                        return (
                            <li id="otherchange" key={key}>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                 <img src={value.img} alt=""/> 
                                 <h5>{value.h5}</h5>
                                 <p>{value.p}</p>
                            </a> 
                         </li> 
                        )
                    }
                    return (
                        <li key={key}>
                        <div className="include">
                         <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={value.top.img} alt=""/> 
                            <h5>{value.top.p}</h5>  
                            <p>{value.top.h5}</p>
                       </a> 
                    </div>
                    <div className="include">
                       <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={value.bottom.img} alt=""/> 
                            <h5>{value.bottom.p}</h5>  
                            <p>{value.bottom.h5}</p>
                       </a> 
                    </div>
                </li>
                    )
                })
            )
        }else if(parseInt(this.state.directi)===3){
            return (
                <div>
                   <Listswipe></Listswipe>
                    {this.state.ceshi1.map((value,key)=>{
                    return (
                        <li key={key}>
                        <div className="include">
                         <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={value.top.img} alt=""/> 
                            <h5>{value.top.p}</h5>  
                            <p>{value.top.h5}</p>
                       </a> 
                    </div>
                    <div className="include">
                       <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={value.bottom.img} alt=""/> 
                            <h5>{value.bottom.p}</h5>  
                            <p>{value.bottom.h5}</p>
                       </a> 
                    </div>
                    </li>
                    )
                })}
                </div>
            )
        }
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
                                            <span data-attr={value.attr} data-dir={value.direction} onClick={this.changelist}>{value.line}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="line"></div>
                        <div className="mvListInclude">
                            <ul>
                                {this.changeMvlist()} 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default mvList;