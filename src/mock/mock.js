import Mock from 'mockjs';
Mock.mock('/data',()=>{
    return {
        code:'0',
        data:{
            '神兽':[
                {
                    name:'阿尔宙斯',
                    type:'一般'
                },{
                    name:'凤王',
                    type:'火'
                },{
                    name:'洛奇亚',
                    type:'飞行，水'
                }
            ],
            '幻兽':[
                {
                    name:'雪拉比',
                    type:'草'
                },{
                    name:'哲尔尼亚斯',
                    type:'妖精'
                },{
                    name:'梦幻',
                    type:'超能力'
                }
            ], 
            '史诗':[
                {
                    name:'皮卡丘',
                    type:'电鼠'
                },{
                    name:'卡比兽',
                    type:'一般'
                },{
                    name:'喷火龙',
                    type:'火，飞行'
                }
            ]
        }
    }
})