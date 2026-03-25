const pLayerUpgradeStyle = {
    width: "146px",
    height: "146px",
    padding: "5px",
    fontSize: "11px",
    marginBottom: "0px",
};

const casl = {
    width: "200px",
    height: "80px",
    padding: "4px",
    marginBottom: "22px",
    backgroundColor: "#00ff59",
};

addLayer("0layer", {
    name: "↓ 实验 ↓",
    position: -2,
    row: 0,
    symbol() {return '↓ 实验 ↓'},
    small: true,
    nodeStyle: {"font-size": "15px", "height": "30px"},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['al'])},
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})

addLayer("1layer", {
    name: "1layer",
    position: -1,
    row: 0,
    symbol() {return '↓ 稀释 ↓'},
    small: true,
    nodeStyle: {"font-size": "15px", "height": "30px"},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['p','p1'])},
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})

addLayer("al", {
    name: "合并场 alpha",
    symbol: "合并场 alpha",
    position: -1,
    row: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff6363",
    type: "none",
    canReset() { return false },
    microtabs:{
        tab:{
            "主合并":{
                name(){return '主合并'},
                content:[
                ],
            },
        },
    },
    tabFormat: [
       ["display-text", function() { return getPointsDisplay() }],
       "blank",
       ["microtabs","tab"]
    ],
    layerShown(){return maxedChallenge("p",11)},
})


addLayer("p", {
    name: "稀释 0",
    symbol: "稀释 0",
    position: 0,
    row: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        vapl: new Decimal(1.1).pow(16).div(new Decimal(0.01).pow(16))
    }},
    color: "#00ff44",
    type: "none",
    canReset() { return false },
    upgrades: {
        11: {
            title: "稀释剂1 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",11) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("10")},
            unlocked(){return true}
        },
        12: {
            title: "稀释剂2 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",12) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("20")},
            unlocked(){return true}
        },
        13: {
            title: "稀释剂3 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",13) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("30")},
            unlocked(){return true}
        },
        14: {
            title: "稀释剂4 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",14) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("40")},
            unlocked(){return true}
        },
        15: {
            title: "稀释剂5 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",15) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("50")},
            unlocked(){return true}
        },
        21: {
            title: "稀释剂6 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",21) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("60")},
            unlocked(){return true}
        },
        22: {
            title: "稀释剂7 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",22) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("70")},
            unlocked(){return true}
        },
        23: {
            title: "稀释剂8 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",23) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("80")},
            unlocked(){return true}
        },
        24: {
            title: "稀释剂9 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",24) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("90")},
            unlocked(){return true}
        },
        25: {
            title: "稀释剂10 原液",
            description(){return `将稀释点获取变为原来的16^(1/10)次方<br>当前效果：^${hasUpgrade("p",25) ? "1.3195" : "1"}`},
            currencyInternalName: "points",
            currencyDisplayName: "稀释点",
            style: pLayerUpgradeStyle,
            cost:function(){return new Decimal("100")},
            unlocked(){return true}
        },
    },
    challenges: {
        11: { 
            name: "一重稀释域",
            challengeDescription: "进入时：重置稀释点，解锁层级“稀释 1”<br>退出时：重置“稀释 1”层的一切内容<br>挑战内：原本为1.1的稀释点获取底数变为0.01，且若稀释点每秒产量x超过y=0.01，将会变为((x/y)^0.6)×y，若稀释点z超过10，将会每秒变为(z-10)×0.94+10，若超过90，还会额外每秒变为(z-90)×0.906+90<br>",
            goalDescription: "稀释点达到100",
            canComplete() {
                return player.points.gte(100);
            },
            rewardDescription: "解锁所有稀释剂的凝浆，解锁“合并场 alpha”层，稀释域内稀释点获取的软上限的阈值y被推迟到100，且稀释点的两重软溢出被移除<br>额外说明：所有泡泡的价格和一重稀释点重置需求在未处于任意稀释域内时变为(1.1^16)/(0.01^16)倍<br>警告：最好不要中途退出任何稀释域，否则在该稀释域内的一切进度都将被丢弃！",
            unlocked() {
                return hasUpgrade("p",11) && hasUpgrade("p",12) && hasUpgrade("p",13) && hasUpgrade("p",14) && hasUpgrade("p",15) && hasUpgrade("p",21) && hasUpgrade("p",22) && hasUpgrade("p",23) && hasUpgrade("p",24) && hasUpgrade("p",25);
            },
            completionLimit: 1,
            onEnter() {
                player.points = new Decimal(0);
            },
            onExit(){
                player.p1.points = new Decimal(0);
                player.p1.mp = new Decimal(0);
                player.p1.abe = new Decimal(0);
                setBuyableAmount("p1",11,new Decimal(0));
                setBuyableAmount("p1",12,new Decimal(0));
                setBuyableAmount("p1",13,new Decimal(0));
                player["p1"].upgrades = [];
                player.points = new Decimal(0);
            },
            style: {
                width: "400px",
                height: "400px",
                padding: "10px",
                fontSize: "15px"
            }
        }
    },
    microtabs:{
        tab:{
            "稀释剂α":{
                name(){return '稀释剂α'},
                content:[
                    ['upgrades', [1]],
                ],
            },
            "稀释剂β":{
                name(){return '稀释剂β'},
                content:[
                    ['upgrades', [2]],
                ],
            },
            "稀释域":{
                name(){return '稀释域'},
                content:[
                    ['challenges', [1]],
                ],
            }
        },
    },
    tabFormat: [
       ["display-text", function() { return getPointsDisplay() }],
       "blank",
       ["microtabs","tab"]
    ],
    layerShown(){return true},
})

addLayer("p1", {
    name: "稀释 1",
    symbol: "稀释 1",
    position: 1,
    row: 0,
    unlocked() {
        return inChallenge("p",11) || maxedChallenge("p",11);
    },
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        d: new Decimal(1),
        abe: new Decimal(1),
        mp: new Decimal(0),
        ht: new Decimal(0),
        htb: new Decimal(1),
        pb: new Decimal(1),
        bx: ((((new Decimal(5)).root(2)).sub(1)).div(2)),
        bdx: new Decimal(0.95),
        iac: false,
    }},
    color: "#00ff59",
    requires: new Decimal("e-24"),
    resource: "一重稀释点",
    baseResource: "points",
    baseAmount() {return (player.points)},
    type: "normal",
    exponent: 1,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    layerShown(){
        return inChallenge("p",11) || maxedChallenge("p",11)
    },
    onPrestige(gain){
        setBuyableAmount("p1",11,new Decimal(0));
        setBuyableAmount("p1",12,new Decimal(0));
        setBuyableAmount("p1",13,new Decimal(0));
        player.points = new Decimal(0);
        player.p1.abe = new Decimal(0);
    },
    upgrades: {
        11: {
            title: "一重协同", 
            description: function(){return `为${hasUpgrade("p1",17) ? "三个泡泡" : "泡泡1和泡泡2"}提供(泡泡3的购买次数)/${hasUpgrade("p1",17) ? "9" : "10"}免费等级<br>当前效果：+${format(this.effect())}`},
            currencyInternalName: "points",
            currencyDisplayName: "一重稀释点",
            currencyLayer: "p1",
            effect(){
                let temp = hasUpgrade("p1",11) ? new Decimal(getBuyableAmount("p1",13).div(hasUpgrade("p1",17) ? 9 : 10)) : 0
                if(hasUpgrade("p1",15)){
                    return temp.add(1).pow(upgradeEffect("p1",14)).sub(1)
                }else{
                    return temp
                }
            },
            style: pLayerUpgradeStyle, 
            cost:function(){return new Decimal("1")},
            unlocked(){return true}
        },
        12: {
            title: "二重协同",
            description: function(){return `为泡泡1提供(泡泡2的购买次数)/10免费等级<br>当前效果：+${format(this.effect())}`},
            currencyInternalName: "points",
            currencyDisplayName: "一重稀释点",
            currencyLayer: "p1",
            effect(){
                let temp = hasUpgrade("p1",12) ? new Decimal((hasUpgrade("p1",17) ? buyableRealAmount("p1",12) : getBuyableAmount("p1",12)).div(10)) : 0
                if(hasUpgrade("p1",15)){
                    return temp.add(1).pow(upgradeEffect("p1",14)).sub(1)
                }else{
                    return temp
                }
            },
            style: pLayerUpgradeStyle, 
            cost:function(){return new Decimal("4")},
            unlocked(){return true}
        },
        13: {
            title: "蓄能协同",
            description: function(){return `将充能按钮的倍率系数x变为1+(x-1)×(1+(泡泡1的购买次数^0.35)/1.5)<br>当前效果：×${format(this.effect())}`},
            currencyInternalName: "points",
            currencyDisplayName: "一重稀释点",
            currencyLayer: "p1",
            effect(){
                let temp = hasUpgrade("p1",13) ? new Decimal(getBuyableAmount("p1",11).pow(0.35).div(1.5).add(1)) : 1
                if(hasUpgrade("p1",15)){
                    return temp.pow(upgradeEffect("p1",14))
                }else{
                    return temp
                }
            },
            
            style: pLayerUpgradeStyle, 
            cost:function(){return new Decimal("9")},
            unlocked(){return true}
        },
        14: {
            title: "集成协同",
            description: function(){return `将最大一重稀释点增益的效果变为(1+(三个泡泡的购买次数之和^0.1)/10)次方<br>当前效果：^${format(this.effect())}`},
            currencyInternalName: "points",
            currencyDisplayName: "一重稀释点",
            currencyLayer: "p1",
            effect(){return new Decimal(hasUpgrade("p1",14) && ((getBuyableAmount("p1",11).add(getBuyableAmount("p1",12).add(getBuyableAmount("p1",13)))).pow(0.1).div(10))).add(1)},
            style: pLayerUpgradeStyle, 
            cost:function(){return new Decimal("16")},
            unlocked(){return true}
        },
        15: {
            title: "魔力协同",
            description: function(){return `联合协同对充能协同的效果生效，对一重协同与二重协同的效果先+1，再生效，最后-1<br>当前效果：${this.effect()}`},
            currencyInternalName: "points",
            currencyDisplayName: "一重稀释点",
            currencyLayer: "p1",
            effect(){return hasUpgrade("p1",15) ? "已生效" : "未生效"},
            style: pLayerUpgradeStyle, 
            cost:function(){return new Decimal("25")},
            unlocked(){return true}
        },
        16: {
            title: "稀释协同",
            description: function(){return `充能倍率x将一重稀释点获取公式中生效的稀释点的指数变为x^0.1倍，且倍率系数变为1.7倍<br>当前效果：×${format(this.effect())}`},
            currencyInternalName: "points",
            currencyDisplayName: "一重稀释点",
            currencyLayer: "p1",
            effect(){return hasUpgrade("p1",16) ? (player.p1.htb).pow(0.1) : new Decimal(1)},
            style: pLayerUpgradeStyle, 
            cost:function(){return new Decimal("36")},
            unlocked(){return true}
        },
        17: {
            title: "联合协同",
            description: function(){return `二重协同的效果中的“购买次数”改为“生效等级”，一重协同对泡泡3生效，且效果中的10改为9<br>当前效果：${this.effect()}`},
            currencyInternalName: "points",
            currencyDisplayName: "一重稀释点",
            currencyLayer: "p1",
            effect(){return hasUpgrade("p1",17) ? "已生效" : "未生效"},
            style: pLayerUpgradeStyle, 
            cost:function(){return new Decimal("49")},
            unlocked(){return true}
        },
    },
    challenges: {
    },
    clickables: {
        11: {
            display() {return "长按充能：" + format(player.p1.ht) + "秒<br>充能倍率：" + format(player.p1.htb,3) + "倍<br>倍率系数：" + format((player.p1.bx).add(1),3) + "<br>衰减系数：" + format((player.p1.bdx),3)},
            canClick(){return true},
            onHold(){
                player.p1.ht = (player.p1.ht.add(new Decimal(diffout).div(2)))
            },
            style: casl,
        }
    },
    buyables: {
        11: {
            cost(x) {return (player.p1.iac ? new Decimal("e-31") : new Decimal("e-31").mul(player.p.vapl)).mul((new Decimal(2).mul(x.pow(0.01))).pow(x.pow(1.022)))},
            realAmount(){
                return getBuyableAmount(this.layer,this.id).add(upgradeEffect("p1",11)).add(upgradeEffect("p1",12))
            },
            display() {return "泡泡 1<br>效果说明：将稀释点获取乘以x<br>x=((√5+1)/2)^生效等级<br>当前效果：x=" + format(buyableEffect(this.layer,this.id)) + "<br>购买次数：" + getBuyableAmount(this.layer, this.id) + "<br>生效等级：" + format(buyableRealAmount(this.layer, this.id)) + "<br>下一级价格：" + formatSmall(this.cost()) + "稀释点"},
            canAfford() { return player.points.gte(this.cost()) },
            currencyInternalName: "points",
            effect(){return ((((new Decimal(5)).root(2)).add(1)).div(2)).pow(buyableRealAmount("p1",11))},
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        12: {
            cost(x) {return (player.p1.iac ? new Decimal("e-30") : new Decimal("e-30").mul(player.p.vapl)).mul((new Decimal(6).mul(x.pow(0.01))).pow(x.pow(1.044)))},
            realAmount(){
                return getBuyableAmount(this.layer,this.id).add(upgradeEffect("p1",11))
            },
            display() {return "泡泡 2<br>效果说明：将稀释点获取乘以x<br>x=((√5+1)/2)^生效等级<br>当前效果：x=" + format(buyableEffect(this.layer,this.id)) + "<br>购买次数：" + getBuyableAmount(this.layer, this.id) + "<br>生效等级：" + format(buyableRealAmount(this.layer, this.id)) + "<br>下一级价格：" + formatSmall(this.cost()) + "稀释点"},
            canAfford() { return player.points.gte(this.cost()) },
            currencyInternalName: "points",
            effect(){return ((((new Decimal(5)).root(2)).add(1)).div(2)).pow(buyableRealAmount("p1",12))},
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        13: {
            cost(x) {return (player.p1.iac ? new Decimal("e-28") : new Decimal("e-28").mul(player.p.vapl)).mul((new Decimal(24).mul(x.pow(0.01))).pow(x.pow(1.088)))},
            realAmount(){
                return getBuyableAmount(this.layer,this.id).add(hasUpgrade("p1",17) ? upgradeEffect("p1",11) : 0)
            },
            display() {return "泡泡 3<br>效果说明：将稀释点获取乘以x<br>x=((√5+1)/2)^生效等级<br>当前效果：x=" + format(buyableEffect(this.layer,this.id)) + "<br>购买次数：" + getBuyableAmount(this.layer, this.id) + "<br>生效等级：" + format(buyableRealAmount(this.layer, this.id)) + "<br>下一级价格：" + formatSmall(this.cost()) + "稀释点"},
            canAfford() { return player.points.gte(this.cost()) },
            currencyInternalName: "points",
            effect(){return ((((new Decimal(5)).root(2)).add(1)).div(2)).pow(buyableRealAmount("p1",13))},
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    },
    microtabs:{
        tab:{
            "泡泡":{
                name(){return '泡泡'},
                content:[
                    ['clickables', [1]],
                    ['buyables', [1]],
                ],
            },
            "升级":{
                name(){return '升级'},
                content:[
                    ['clickables', [1]],
                    ['upgrades', [1,2]],
                ],
            },
        },
    },
    tabFormat: [
       ["display-text", function() { return getPointsDisplay() }],
       ["display-text", function() { return `你拥有 <h2 style="color: #00ff59; text-shadow: 0px 0px 10px #00ff59; display: inline;">${format(player.p1.points,0)}</h2> 一重稀释点`}],
       ["display-text", function() { return `你拥有过的最多的 <h2 style="color: #00ff59; text-shadow: 0px 0px 10px #00ff59; display: inline;">${format(player.p1.mp,0)}</h2> 一重稀释点将稀释点获取乘以 <h2 style="color: #00ff59; text-shadow: 0px 0px 10px #00ff59; display: inline;">${format(player.p1.pb)}</h2>`}],
       "blank",
       "prestige-button",
       "blank",
       ["microtabs","tab"]
    ],
    update(diff){
        player.p1.abe = (buyableEffect("p1",11)).mul(buyableEffect("p1",12).mul(buyableEffect("p1",13)))
        player.p1.mp = (player.p1.mp).max(player.p1.points)
        player.p1.pb = ((new Decimal(player.p1.mp).add(1)).pow(0.4)).pow(upgradeEffect("p1",14))
        player.p1.iac = inChallenge("p",11)
        player.p1.bdx = new Decimal(0.95)
        player.p1.ht = (player.p1.ht).mul((player.p1.bdx).pow(new Decimal(diffout).div(2)))
        player.p1.bx = ((((((new Decimal(5)).root(2)).sub(1)).div(2)).mul(((player.p1.ht).add(1)).pow(0.08))).mul(upgradeEffect("p1",13))).mul(hasUpgrade("p1",16) ? new Decimal(1.7) : new Decimal(1))
        player.p1.htb = (new Decimal(1)).add(player.p1.bx.mul((new Decimal(1)).sub((new Decimal(1)).div(((player.p1.ht).add(1)).pow(0.4)))))
        player.p.vapl = new Decimal(maxedChallenge("p",11) && !inChallenge("p",11) ? new Decimal(1.1).pow(16).div(new Decimal(0.01).pow(16)) : 1)
        if(inChallenge("p",11)){
		    if(player.points.gte(100)){
		    	player.points = new Decimal(100)
		    }else{
                if(player.points.gte(10)){
                    player.points = new Decimal((player.points).sub(10).mul(new Decimal(0.94).pow(new Decimal(diffout))).add(10))
                }
                if(player.points.gte(90)){
                    player.points = new Decimal((player.points).sub(90).mul(new Decimal(0.906).pow(new Decimal(diffout))).add(90))
                }
            }
        }
    }
})

/*
player.points = new Decimal("100")
player.p1.ht = new Decimal("32")
*/