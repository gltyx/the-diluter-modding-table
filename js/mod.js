let modInfo = {
	name: "稀释增量页",
	nameI18N: "The ??? Table",// When you enabled the internationalizationMod, this is the name in the second language
	id: "mymod2",
	author: "球球",
	pointsName: "稀释点",
	modFiles: ["layers.js", "tree.js"],

	internationalizationMod: false,
	// When enabled, it will ask the player to choose a language at the beginning of the game
	changedDefaultLanguage: true,
	// Changes the mod default language. false -> English, true -> Chinese

	initialStartPoints: new Decimal ("0"), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

var colors = {
	button: {
		width: '250px',// Table Button
		height: '40px',// Table Button
		font: '25px',// Table Button
		border: '3px'// Table Button
	},
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#00ff1a",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
}

// When enabled, it will hidden left table
function hiddenLeftTable(){
	return false
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

function changelog(){
	return `
		<br><br><br><h1>更新日志:</h1><br>
		<span style="font-size: 17px;">
			<br><h3>α0.0.0</h3><br>
				球球从Github找到了大佬写的模组页模板！这就回来改造一番~<br>目前制作到了一重稀释域结束的部分，欢迎大家来找bug！<br>残局：完成一重稀释域
			<br><br>
		`
} 

function winText(){
	return i18n(`你暂时完成了游戏!`, `Congratulations! You have reached the end and beaten this game, but for now...`, false)
}

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(1.1-(1.09*inChallenge("p", 11))).pow(new Decimal(16).pow((hasUpgrade("p",11)+hasUpgrade("p",12)+hasUpgrade("p",13)+hasUpgrade("p",14)+hasUpgrade("p",15)+hasUpgrade("p",21)+hasUpgrade("p",22)+hasUpgrade("p",23)+hasUpgrade("p",24)+hasUpgrade("p",25))/10))
	gain = gain.mul(player.p1.abe)
	gain = gain.mul(player.p1.pb)
	gain = gain.mul(player.p1.htb)
	if(inChallenge("p",11)){
		if(gain.gte(0.01)){
			gain = gain.mul(100).pow(0.6).div(100)
		}
	}else{
		if(maxedChallenge("p",11) && gain.gte(100)){
			gain = gain.div(100).pow(0.6).mul(100)
		}
	}
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra information at the top of the page
var displayThings = [
	function() {
		if(options.ch==undefined && modInfo.internationalizationMod==true){return '<big><br>You should choose your language first<br>你需要先选择语言</big>'}
		return '<div class="res">'+displayThingsRes()+'</div><br><div class="vl2"></div></span>'
	}
]

// You can write code here to easily display information in the top-left corner
function displayThingsRes(){
	return 'Points: '+format(player.points)+' | '
}

// Determines when the game "ends"
function isEndgame() {
	return false
}

function getPointsDisplay(){
	let a = ''
	if(player.devSpeed && player.devSpeed!=1){
		a += options.ch ? '<br>时间加速: '+format(player.devSpeed)+'x' : '<br>时间加速: '+format(player.devSpeed)+'x'
	}
	if(player.offTime!==undefined){
		a += options.ch ? '<br>离线加速: '+formatTime(player.offTime.remain) : '<br>离线加速: '+formatTime(player.offTime.remain)
	}
	a += '<br>'
	if(!(options.ch==undefined && modInfo.internationalizationMod==true)){
		a += `<span class="overlayThing">${(i18n("你有", "You have", false))} <h2 class="overlayThing" id="points"> ${formatSmall(player.points)}</h2> ${i18n(modInfo.pointsName, modInfo.pointsNameI18N)}</span>`
		if(canGenPoints()){
			a += `<br><span class="overlayThing">(`+(tmp.other.oompsMag != 0 ? format(tmp.other.oomps) + " OoM" + (tmp.other.oompsMag < 0 ? "^OoM" : tmp.other.oompsMag > 1 ? "^" + tmp.other.oompsMag : "") + "s" : formatSmall(getPointGen()))+`/sec)</span>`
		}
		a += `<div style="margin-top: 3px"></div>`
	}
	a += tmp.displayThings
	a += '<br><br>'
	return a
}

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
