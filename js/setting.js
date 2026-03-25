function layerDisplay(id){
    if(tmp[id].layerShown===undefined){
        return true
    }
    return tmp[id].layerShown
}

function layerDisplayTotal(id){
    for(i in id){
        let a = layerDisplay(id[i])
        if(a==true){
            return true
        }
    }
}

addLayer("SideTab", {
    name: "AllLayer",
    position: -999,
    row: 0,
    symbol() {return i18n('其他页面', 'Side Tab', false)},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    small: true,
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['Setting','Statistics','Information','Changelog'])},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Setting", {
    name: "Setting",
    position: -998,
    row: 0,
    symbol() {return i18n('设置', 'Setting', false)},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Information", {
    name: "Information",
    position: -997,
    row: 0,
    symbol() {return i18n('信息', 'Information', false)},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Changelog", {
    name: "Changelog",
    position: -996,
    row: 0,
    symbol() {return i18n('更新日志', 'Changelog', false)},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("公式", {
    name: "公式",
    position: -995,
    row: 0,
    symbol() {return "公式"},
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
        ["display-text", function() {
            return `看在球球这么贴心地列出公式的份上，加个QQ群嘛！群号1005676561，快来玩呀！<br>对了，一定一定要仔细看每个稀释域的文字说明！<br><br>
            “稀释 1”层公式：
            <br>一重稀释点获取公式：max(0,floor((log10(${maxedChallenge("p",11) && !inChallenge("p",11) ? "稀释点/(1.1^16/0.01^16)" : "稀释点"})+25)^(0.8${hasUpgrade("p1",16) ? "×(充能倍率^0.1)" : ""})))
            <br>最大一重稀释点增益效果公式：${(hasUpgrade("p1",14) ? "((最大一重稀释点+1)^0.4)^(1+(三个泡泡的购买次数之和^0.1)/10)" : "(最大一重稀释点+1)^0.4")}
            <br>充能按钮长按时间每秒会乘以衰减系数<br>充能按钮长按时间在“稀释 1”层重置与退出稀释域时不会被重置
            <br>倍率系数=1+(((5^0.5-1)/2)×((长按时间+1)^0.08))${hasUpgrade("p1",13) ? "×" + (hasUpgrade("p1",15) ? "(1+(泡泡1的购买次数^0.35)/1.5)^(1+(三个泡泡的购买次数之和^0.1)/10)" : "(1+(泡泡1的购买次数^0.35)/1.5)") : ""}
            <br>充能按钮的充能倍率=1+((倍率系数-1)×(1-1÷((长按时间+1)^0.4)))
            <br>泡泡1价格公式：(2×(购买次数^0.01))^(购买次数^1.022)<br>泡泡2价格公式：(6×(购买次数^0.01))^(购买次数^1.044)<br>泡泡3价格公式：(24×(购买次数^0.01))^(购买次数^1.088)`
        }],
    ],
})