import logo from './logo.svg';
import * as Papa from 'papaparse';
import './App.css';

function App() {
  function armorItem(vnum,area,short,level,urc,slot,good,neutral,evil1,avgarmor,weight,spellforged,vulnweapon,flaming,frost,vampiric,sharp,vorpal,twohands,shocking,poison,paralyze,wounds,deadly,bless,evil2,nodisarm,nodrop,parry,skill,addaffect,addimmune,addresist,addvuln,str,dex,int,wis,con,luck,size,mana,hp,move,ac,hitroll,damroll,savingaff,savingmal,savingmental,savingbreath,savingspell,spelllevel,affpen,malpen,mentalpen,breathpen,spellpen,afflevel,mallevel,mentallevel,skilllearn,spelllearn,hitgain,managain,movegain,socketable,burnproof,rotdeath,meltdrop,autospell) {
    this.vnum = vnum
    this.area = area
    this.short = short
    this.level = level
    this.urc = urc
    this.slot = slot
    this.good = good
    this.neutral = neutral
    this.evil1 = evil1
    this.avgarmor = avgarmor
    this.weight = weight
    this.spellforged = spellforged
    this.vulnweapon = vulnweapon
    this.flaming = flaming
    this.frost = frost
    this.vampiric = vampiric
    this.sharp = sharp
    this.vorpal = vorpal
    this.twohands = twohands
    this.shocking = shocking
    this.poison = poison
    this.paralyze = paralyze
    this.wounds = wounds
    this.deadly = deadly
    this.bless = bless
    this.evil2 = evil2
    this.nodisarm = nodisarm
    this.nodrop = nodrop
    this.parry = parry
    this.skill = skill
    this.addaffect = addaffect
    this.addimmune = addimmune
    this.addresist = addresist
    this.addvuln = addvuln
    this.str = str
    this.dex = dex
    this.int = int
    this.wis = wis
    this.con = con
    this.luck = luck
    this.size = size
    this.mana = mana
    this.hp = hp
    this.move = move
    this.ac = ac
    this.hitroll = hitroll
    this.damroll = damroll
    this.savingaff = savingaff
    this.savingmal = savingmal
    this.savingmental = savingmental
    this.savingbreath = savingbreath
    this.savingspell = savingspell
    this.spelllevel = spelllevel
    this.affpen = affpen
    this.malpen = malpen
    this.mentalpen = mentalpen
    this.breathpen = breathpen
    this.spellpen = spellpen
    this.afflevel = afflevel
    this.mallevel = mallevel
    this.mentallevel = mentallevel
    this.skilllearn = skilllearn
    this.spelllearn = spelllearn
    this.hitgain = hitgain
    this.managain = managain
    this.movegain = movegain
    this.socketable = socketable
    this.burnproof = burnproof
    this.rotdeath = rotdeath
    this.meltdrop = meltdrop
    this.autospell = autospell
  }

  function weaponItem(vnum,area,short,level,urc,slot,good,neutral,evil1,avgdam,weapontype,dicecount,dicetype,damagetype,damagenoun,weight,spellforged,vulnweapon,flaming,frost,vampiric,sharp,vorpal,twohands,shocking,poison,paralyze,wounds,deadly,bless,evil2,nodisarm,nodrop,parry,skill,addaffect,addimmune,addresist,addvuln,str,dex,int,wis,con,luck,size,mana,hp,move,ac,hitroll,damroll,savingaff,savingmal,savingmental,savingbreath,savingspell,spelllevel,affpen,malpen,mentalpen,breathpen,spellpen,afflevel,mallevel,mentallevel,skilllearn,spelllearn,hitgain,managain,movegain,socketable,burnproof,rotdeath,meltdrop,autospell){
    this.vnum = vnum
    this.area = area
    this.short = short
    this.level = level
    this.urc = urc
    this.slot = slot
    this.good = good
    this.neutral = neutral
    this.evil1 = evil1
    this.avgdam = avgdam
    this.weapontype = weapontype
    this.dicecount = dicecount
    this.dicetype = dicetype
    this.damagetype = damagetype
    this.damagenoun = damagenoun
    this.weight = weight
    this.spellforged = spellforged
    this.vulnweapon = vulnweapon
    this.flaming = flaming
    this.frost = frost
    this.vampiric = vampiric
    this.sharp = sharp
    this.vorpal = vorpal
    this.twohands = twohands
    this.shocking = shocking
    this.poison = poison
    this.paralyze = paralyze
    this.wounds = wounds
    this.deadly = deadly
    this.bless = bless
    this.evil2 = evil2
    this.nodisarm = nodisarm
    this.nodrop = nodrop
    this.parry = parry
    this.skill = skill
    this.addaffect = addaffect
    this.addimmune = addimmune
    this.addresist = addresist
    this.addvuln = addvuln
    this.str = str
    this.dex = dex
    this.int = int
    this.wis = wis
    this.con = con
    this.luck = luck
    this.size = size
    this.mana = mana
    this.hp = hp
    this.move = move
    this.ac = ac
    this.hitroll = hitroll
    this.damroll = damroll
    this.savingaff = savingaff
    this.savingmal = savingmal
    this.savingmental = savingmental
    this.savingbreath = savingbreath
    this.savingspell = savingspell
    this.spelllevel = spelllevel
    this.affpen = affpen
    this.malpen = malpen
    this.mentalpen = mentalpen
    this.breathpen = breathpen
    this.spellpen = spellpen
    this.afflevel = afflevel
    this.mallevel = mallevel
    this.mentallevel = mentallevel
    this.skilllearn = skilllearn
    this.spelllearn = spelllearn
    this.hitgain = hitgain
    this.managain = managain
    this.movegain = movegain
    this.socketable = socketable
    this.burnproof = burnproof
    this.rotdeath = rotdeath
    this.meltdrop = meltdrop
    this.autospell = autospell
  }

  function consumableItem(vnum,area,type,short,level,affect){
    this.vnum = vnum
    this.area = area
    this.type = type
    this.short = short
    this.level = level
    this.affect = affect
  }

  let itemUrls = ['http://play.aelisus.com/eq/armor.csv', 
                  'http://play.aelisus.com/eq/consumables.csv', 
                  'http://play.aelisus.com/eq/weapons.csv']

  let armors = []
  let weapons = []
  let consumables = []
  console.log('hi')
  for(let x=0; x<itemUrls.length; x++) {
    let tempItemList = []
    Papa.parse(itemUrls[x], {
      download: true,
      complete: function(result) {
        tempItemList = result.data
        tempItemList.shift()
        if(x===0){
          for(let i = 0; i<tempItemList.length; i++){
            let tempItem = new armorItem()
            for(let y = 0 ; y<=tempItemList[i].length; y++){
              let keys = Object.keys(tempItem)
              tempItem[keys[y]] = tempItemList[i][y]
            }
            armors.push(tempItem)
          }
          console.log(armors)
        }
        if(x===2){
          for(let i = 0; i<tempItemList.length; i++){
            let tempItem = new weaponItem()
            for(let y = 0 ; y<=tempItemList[i].length; y++){
              let keys = Object.keys(tempItem)
              tempItem[keys[y]] = tempItemList[i][y]
            }
            weapons.push(tempItem)
          }
          console.log(weapons)
        }
        if(x===1){
          for(let i = 0; i<tempItemList.length; i++){
            let tempItem = new consumableItem()
            for(let y = 0 ; y<=tempItemList[i].length; y++){
              let keys = Object.keys(tempItem)
              tempItem[keys[y]] = tempItemList[i][y]
            }
            consumables.push(tempItem)
          }
          console.log(consumables)
        }
      } 
    })
  }

  //console.log(armors)
  //console.log(weapons)
  //console.log(consumables)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"c
        >
          Learn React
        </a>
      </header>
      <div>
        <table className='items'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Area</th>
              <th>vNum</th>
            </tr>
          </thead>
          
        </table>
      </div>
    </div>
  );
}

export default App;
