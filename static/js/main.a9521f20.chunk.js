(this["webpackJsonppvu-dashboard"]=this["webpackJsonppvu-dashboard"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r,n,i=a(1),o=a.n(i),c=a(16),l=a.n(c),s=(a(25),a(26),a(17)),u=a(2),d=a(20),E=a(8),L={Earthquake:{Dark:0,Electro:0,Fire:0,Ice:0,Light:0,Parasite:0,Metal:1,Water:0,Wind:.5},Volcano:{Dark:0,Electro:0,Fire:1,Ice:-.4,Light:0,Parasite:0,Metal:.4,Water:-.2,Wind:0},Hurricanes:{Dark:.4,Electro:.5,Fire:-.4,Ice:.4,Light:-.2,Parasite:0,Metal:0,Water:.5,Wind:.5},Thunderstorm:{Dark:1,Electro:1,Fire:0,Ice:0,Light:-.2,Parasite:0,Metal:-.2,Water:.1,Wind:0},Tsunami:{Dark:.2,Electro:0,Fire:-.4,Ice:.3,Light:-.2,Parasite:0,Metal:-.6,Water:.6,Wind:0},Tornado:{Dark:.5,Electro:.5,Fire:0,Ice:0,Light:-.4,Parasite:0,Metal:0,Water:.2,Wind:1},Flood:{Dark:0,Electro:0,Fire:0,Ice:0,Light:0,Parasite:0,Metal:-1,Water:1,Wind:0},"Winter Storm":{Dark:0,Electro:.5,Fire:-.4,Ice:.6,Light:-.2,Parasite:0,Metal:0,Water:0,Wind:.5},Rainy:{Dark:0,Electro:0,Fire:-.3,Ice:0,Light:0,Parasite:0,Metal:-.3,Water:1,Wind:0},Sunny:{Dark:0,Electro:0,Fire:.6,Ice:0,Light:0,Parasite:0,Metal:0,Water:-.3,Wind:0},Cloudy:{Dark:0,Electro:0,Fire:0,Ice:0,Light:-.1,Parasite:0,Metal:0,Water:0,Wind:-.5},Windy:{Dark:0,Electro:0,Fire:0,Ice:0,Light:.2,Parasite:0,Metal:0,Water:0,Wind:.5},"Iron Rain":{Dark:0,Electro:0,Fire:0,Ice:0,Light:0,Parasite:0,Metal:1.2,Water:.4,Wind:0},Moonlight:{Dark:4,Electro:0,Fire:0,Ice:0,Light:0,Parasite:0,Metal:0,Water:0,Wind:0},Malaria:{Dark:0,Electro:0,Fire:0,Ice:0,Light:0,Parasite:1,Metal:0,Water:0,Wind:0},"Heat Wave":{Dark:.1,Electro:0,Fire:1,Ice:-.6,Light:.2,Parasite:0,Metal:0,Water:-.3,Wind:0},"Locusts Swarm":{Dark:0,Electro:0,Fire:0,Ice:0,Light:0,Parasite:1,Metal:0,Water:0,Wind:0},"Rats Swarm":{Dark:0,Electro:0,Fire:0,Ice:0,Light:0,Parasite:1,Metal:0,Water:0,Wind:0},"Coronal Mass Ejection":{Dark:0,Electro:0,Fire:.4,Ice:0,Light:1,Parasite:0,Metal:0,Water:0,Wind:0},"Solar Flares":{Dark:0,Electro:0,Fire:.8,Ice:0,Light:.8,Parasite:0,Metal:0,Water:0,Wind:0},"Solar Maxima":{Dark:0,Electro:0,Fire:.4,Ice:0,Light:1,Parasite:0,Metal:0,Water:0,Wind:0},"Proton Storm":{Dark:0,Electro:0,Fire:0,Ice:0,Light:2,Parasite:0,Metal:0,Water:0,Wind:0},Snowy:{Dark:0,Electro:0,Fire:-.4,Ice:1,Light:0,Parasite:0,Metal:0,Water:.6,Wind:0},"Cold Wave":{Dark:0,Electro:0,Fire:-.6,Ice:1.2,Light:0,Parasite:0,Metal:0,Water:0,Wind:0},"Magnetic Reconnection":{Dark:0,Electro:.5,Fire:0,Ice:0,Light:0,Parasite:0,Metal:.5,Water:0,Wind:0}},m={Autumn:{Hurricanes:L.Hurricanes,Thunderstorm:L.Thunderstorm,Volcano:L.Volcano,Tsunami:L.Tsunami,Earthquake:L.Earthquake,Tornado:L.Tornado,Flood:L.Flood,"Winter Storm":L["Winter Storm"],Rainy:L.Rainy,Sunny:L.Sunny,Cloudy:L.Cloudy,Windy:L.Windy,"Iron Rain":L["Iron Rain"],Moonlight:L.Moonlight,"Locusts Swarm":L["Locusts Swarm"],"Rats Swarm":L["Rats Swarm"],Malaria:L.Malaria},Springer:{Hurricanes:L.Hurricanes,Volcano:L.Volcano,Tsunami:L.Tsunami,Earthquake:L.Earthquake,Rainy:L.Rainy,Sunny:L.Sunny,Cloudy:L.Cloudy,"Iron Rain":L["Iron Rain"],"Locusts Swarm":L["Locusts Swarm"],"Rats Swarm":L["Rats Swarm"],Malaria:L.Malaria},Summer:{"Heat Wave":L["Heat Wave"],Hurricanes:L.Hurricanes,Thunderstorm:L.Thunderstorm,Volcano:L.Volcano,Tsunami:L.Tsunami,Earthquake:L.Earthquake,Tornado:L.Tornado,Rainy:L.Rainy,Sunny:L.Sunny,Cloudy:L.Cloudy,"Locusts Swarm":L["Locusts Swarm"],"Rats Swarm":L["Rats Swarm"],Malaria:L.Malaria,"Coronal Mass Ejection":L["Coronal Mass Ejection"],"Solar Flares":L["Solar Flares"],"Solar Maxima":L["Solar Maxima"],"Proton Storm":L["Proton Storm"]},Winter:{Volcano:L.Volcano,Earthquake:L.Earthquake,Snowy:L.Snowy,"Cold Wave":L["Cold Wave"],"Winter Storm":L["Winter Storm"],"Coronal Mass Ejection":L["Coronal Mass Ejection"],"Solar Flares":L["Solar Flares"],"Solar Maxima":L["Solar Maxima"],"Magnetic Reconnection":L["Magnetic Reconnection"],Windy:L.Windy}}.Winter,p=Object.keys(m).filter((function(e){return"Winter Storm"!==e&&"Magnetic Reconnection"!==e})),h={Metal:"Metal",Electro:"Electrico",Dark:"Oscuridad",Fire:"Fuego",Ice:"Hielo",Light:"Luz",Parasite:"Parasito",Water:"Agua",Wind:"Viento"},j={Common:"Comun",Uncommon:"Poco comun",Rare:"Rara",Mythic:"Mitica"},I={"Very Low":"Muy baja",Low:"Baja",Normal:"Decente",Good:"Buena","Very Good":"Excelente"},g={Plant:"Planta",Tree:"Arbol"},M={Metal:"https://cdn.discordapp.com/emojis/869490822897348679.png",Electro:"https://cdn.discordapp.com/emojis/869490822289195059.png?v=1",Ice:"https://cdn.discordapp.com/emojis/869491703655051304.png?v=1",Fire:"https://cdn.discordapp.com/emojis/869490823685881856.png?v=1",Dark:"https://cdn.discordapp.com/emojis/869490823740407828.png?v=1",Light:"https://cdn.discordapp.com/emojis/869490823497154580.png?v=1",Parasite:"https://cdn.discordapp.com/emojis/869490822737977365.png?v=1",Water:"https://cdn.discordapp.com/emojis/869490823245479956.png?v=1",Wind:"https://cdn.discordapp.com/emojis/869490884771729468.png?v=1"},b={Metal:"#844903",Electro:"#BA7A14",Dark:"#5E4771",Fire:"#7E2121",Ice:"#00647A",Light:"#649CDE",Parasite:"#790B8B",Water:"#1D3AA0",Wind:"#236025"},y={Common:"#337A43",Uncommon:"#4391C7",Rare:"#E54D58",Mythic:"#8C5C9F"},W=(a(27),a(0)),N=function(e){var t=e.element;return Object(W.jsxs)("div",{style:{backgroundColor:b[t]},className:"type-label",children:[Object(W.jsx)("img",{src:M[t],alt:"".concat(t," Icon"),width:"20px"}),Object(W.jsx)("p",{className:"text",children:h[t]})]})},f=(a(29),{Common:1,Uncommon:2,Rare:2,Mythic:3}),O=function(e){var t=e.id,a=e.rarity,r=f[a];return Object(W.jsx)("img",{src:"https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/".concat(t,"_").concat(r,".png"),alt:"Plant Icon",className:"plant-icon"})},x=(a(30),function(e){var t=e.field,a=e.children;return Object(W.jsxs)("div",{className:"stats-row",children:[Object(W.jsxs)("span",{className:"subtext",children:[t,": "]}),a]})}),S=(a(31),function(e){var t=e.plant;return Object(W.jsxs)("div",{className:"plant-info",children:[Object(W.jsx)(O,{id:t.id,rarity:t.rarity}),Object(W.jsxs)("div",{className:"stats-container",children:[Object(W.jsx)(x,{field:"Tipo",children:Object(W.jsx)("div",{className:"type-label",children:Object(W.jsx)("p",{className:"text",children:g[t.type]})})}),Object(W.jsx)(x,{field:"Elemento",children:Object(W.jsx)(N,{element:t.element})}),Object(W.jsx)(x,{field:"Rareza",children:Object(W.jsx)("div",{className:"type-label",children:Object(W.jsx)("p",{style:{color:y[t.rarity]},children:j[t.rarity]})})}),Object(W.jsx)(x,{field:"Produccion",children:Object(W.jsx)("div",{className:"type-label",children:Object(W.jsx)("p",{className:"text",children:I[t.production.quality]})})}),Object(W.jsx)("div",{className:"stats-row",style:{alignSelf:"center"},children:Object(W.jsx)("span",{className:"subtext",children:"".concat(t.production.le,"LE/").concat(t.production.hours,"Horas")})})]})]})}),D=(a(32),function(e){var t=e.plant,a=e.removePlant,r=function(e){var t=p.filter((function(t){return m[t][e.element]>0})).length,a=p.filter((function(t){return m[t][e.element]<0})).length,r=p.filter((function(t){return 0===m[t][e.element]})).length+1,n=t+a+r;return{inFavorProbability:t/n,againstProbability:a/n,neutralProbability:r/n}}(t),n=r.againstProbability,i=r.inFavorProbability,o=r.neutralProbability;return console.log(n,i,o),Object(W.jsxs)("div",{className:"plant-container",children:[Object(W.jsx)("span",{className:"remove",onClick:function(){return a(Number(t.nftId))},children:"X"}),Object(W.jsx)(S,{plant:t}),Object(W.jsxs)("div",{className:"plant-greenhouse",children:[Object(W.jsx)("span",{className:"use-greenhouse-span",children:n>.2?"Usar invernadero":"No usar invernadero"}),Object(W.jsxs)("div",{className:"greenhouse-probability",children:[Object(W.jsxs)("span",{style:{color:"green"},children:[(100*i).toFixed(2),"%"]}),Object(W.jsxs)("span",{style:{color:"red"},children:[(100*n).toFixed(2),"%"]}),Object(W.jsxs)("span",{style:{color:"gray"},children:[(100*o).toFixed(2),"%"]})]})]})]})}),v=(a(33),function(e,t){var a=Object(i.useState)((function(){return function(e,t){var a=localStorage.getItem(e)||JSON.stringify(t);return JSON.parse(a)}(e,t)})),r=Object(E.a)(a,2),n=r[0],o=r[1];return Object(i.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,o]});!function(e){e.FIRE="Fuego",e.WATER="Agua",e.WIND="Viento",e.ELECTRO="Electrico",e.ICE="Hielo",e.LIGHT="Luz",e.DARK="Oscuro",e.METAL="Metal",e.PARASITE="Parasito"}(r||(r={})),function(e){e.COMMON="Comun",e.UNCOMMON="No comun",e.RARE="Rara",e.MYTICAL="Mitica"}(n||(n={}));n.COMMON,n.UNCOMMON,n.RARE,n.MYTICAL;var P=Array.from([0,1,7,17,30]).map((function(e){return{id:e,type:r.FIRE}})),k=Array.from([4,5,36,38,39]).map((function(e){return{id:e,type:r.WATER}})),C=Array.from([9,10,16,37]).map((function(e){return{id:e,type:r.WIND}})),F=Array.from([3,8,15,32,34]).map((function(e){return{id:e,type:r.ELECTRO}})),A=Array.from([2,6,29]).map((function(e){return{id:e,type:r.ICE}})),R=Array.from([18,19,20,21]).map((function(e){return{id:e,type:r.LIGHT}})),T=Array.from([14,31,33,35]).map((function(e){return{id:e,type:r.DARK}})),w=Array.from([25,26,27,28]).map((function(e){return{id:e,type:r.METAL}})),z=Array.from([11,12,13,22,23,24]).map((function(e){return{id:e,type:r.PARASITE}})),U=(P.concat(k).concat(C).concat(F).concat(A).concat(R).concat(T).concat(w).concat(z),[{plantId:"93",element:"Dark",up:5,LE:2600,LE2:2950,LE3:3150,LE4:3300,hours:216},{plantId:"90",element:"Fire",up:5,LE:750,LE2:1100,LE3:1300,LE4:1500,hours:48},{plantId:"92",element:"Ice",up:5,LE:1050,LE2:1400,LE3:1600,LE4:1800,hours:96},{plantId:"91",element:"Light",up:5,LE:1400,LE2:1750,LE3:1940,LE4:2120,hours:240},{plantId:"91",element:"Light",up:5,LE:1400,LE2:1750,LE3:1940,LE4:2120,hours:240},{plantId:"00",element:"Fire",up:1,LE:400,LE2:500,LE3:600,LE4:800,hours:48},{plantId:"01",element:"Fire",up:1,LE:400,LE2:500,LE3:600,LE4:800,hours:48},{plantId:"07",element:"Fire",up:1,LE:400,LE2:500,LE3:600,LE4:800,hours:48},{plantId:"17",element:"Fire",up:1,LE:650,LE2:760,LE3:900,LE4:1100,hours:72},{plantId:"30",element:"Fire",up:1,LE:650,LE2:760,LE3:900,LE4:1100,hours:72},{plantId:"04",element:"Water",up:1,LE:950,LE2:1100,LE3:1200,LE4:1400,hours:108},{plantId:"05",element:"Water",up:1,LE:950,LE2:1100,LE3:1200,LE4:1400,hours:108},{plantId:"36",element:"Water",up:1,LE:950,LE2:1100,LE3:1200,LE4:1400,hours:108},{plantId:"38",element:"Water",up:1,LE:1050,LE2:1200,LE3:1300,LE4:1500,hours:120},{plantId:"39",element:"Water",up:1,LE:1050,LE2:1200,LE3:1300,LE4:1500,hours:120},{plantId:"09",element:"Wind",up:1,LE:750,LE2:860,LE3:950,LE4:1150,hours:72},{plantId:"10",element:"Wind",up:1,LE:750,LE2:860,LE3:950,LE4:1150,hours:72},{plantId:"16",element:"Wind",up:1,LE:900,LE2:1010,LE3:1100,LE4:1250,hours:96},{plantId:"37",element:"Wind",up:1,LE:900,LE2:1010,LE3:1100,LE4:1250,hours:96},{plantId:"03",element:"Electro",up:1,LE:500,LE2:610,LE3:680,LE4:850,hours:48},{plantId:"08",element:"Electro",up:1,LE:500,LE2:610,LE3:680,LE4:850,hours:48},{plantId:"15",element:"Electro",up:1,LE:500,LE2:610,LE3:680,LE4:850,hours:48},{plantId:"32",element:"Electro",up:1,LE:650,LE2:760,LE3:900,LE4:1100,hours:60},{plantId:"34",element:"Electro",up:1,LE:650,LE2:760,LE3:900,LE4:1100,hours:60},{plantId:"02",element:"Ice",up:1,LE:500,LE2:610,LE3:680,LE4:850,hours:60},{plantId:"06",element:"Ice",up:1,LE:500,LE2:610,LE3:680,LE4:850,hours:60},{plantId:"29",element:"Ice",up:1,LE:800,LE2:910,LE3:1e3,LE4:1250,hours:96},{plantId:"18",element:"Light",up:1,LE:1200,LE2:1310,LE3:1400,LE4:1500,hours:240},{plantId:"19",element:"Light",up:1,LE:1200,LE2:1310,LE3:1400,LE4:1500,hours:240},{plantId:"20",element:"Light",up:1,LE:1600,LE2:1710,LE3:1800,LE4:2e3,hours:312},{plantId:"21",element:"Light",up:1,LE:1600,LE2:1710,LE3:1800,LE4:2e3,hours:312},{plantId:"14",element:"Dark",up:10,LE:1200,LE2:1900,LE3:2300,LE4:2500,hours:192},{plantId:"31",element:"Dark",up:10,LE:1200,LE2:1900,LE3:2300,LE4:2500,hours:192},{plantId:"33",element:"Dark",up:10,LE:1400,LE2:2100,LE3:2500,LE4:2800,hours:216},{plantId:"35",element:"Dark",up:10,LE:1400,LE2:2100,LE3:2500,LE4:2800,hours:216},{plantId:"25",element:"Metal",up:10,LE:3500,LE2:4300,LE3:4800,LE4:5200,hours:336},{plantId:"26",element:"Metal",up:10,LE:3500,LE2:4300,LE3:4800,LE4:5200,hours:336},{plantId:"27",element:"Metal",up:10,LE:5500,LE2:6400,LE3:6800,LE4:7100,hours:480},{plantId:"28",element:"Metal",up:10,LE:5500,LE2:6400,LE3:6800,LE4:7100,hours:480},{plantId:"11",element:"Parasite",up:1,LE:900,LE2:1010,LE3:1100,LE4:1250,hours:120},{plantId:"12",element:"Parasite",up:1,LE:900,LE2:1010,LE3:1100,LE4:1250,hours:120},{plantId:"13",element:"Parasite",up:1,LE:900,LE2:1010,LE3:1100,LE4:1250,hours:120},{plantId:"22",element:"Parasite",up:1,LE:1300,LE2:1410,LE3:1500,LE4:1650,hours:168},{plantId:"23",element:"Parasite",up:1,LE:1300,LE2:1410,LE3:1500,LE4:1650,hours:168},{plantId:"24",element:"Parasite",up:1,LE:1300,LE2:1410,LE3:1500,LE4:1650,hours:168}]),V=function(e,t){var a=e/t;return a<7?"Very Low":a<8?"Low":a<10?"Normal":a<12?"Good":"Very Good"},Z=function(e){var t=Number(e.substring(0,3)),a=Number(e.substring(3,5)),r=Number(e.substring(6,8)),n=t>=100&&t<200?"Plant":"Tree",i=U.find((function(e){return Number(e.plantId)===a}))||U[0],o=function(e,t){return t>=0&&t<=59?{rarity:"Common",le:e.LE+t*e.up}:t>=60&&t<=88?{rarity:"Uncommon",le:e.LE2+(t-60)*e.up}:t>=89&&t<=98?{rarity:"Rare",le:e.LE3+(t-89)*e.up}:{rarity:"Mythic",le:e.LE4}}(i,r);return{id:a,element:i.element,nftId:e,rarity:o.rarity,type:n,production:{hours:i.hours,le:o.le,quality:V(o.le,i.hours)}}},H=function(e){var t=e.addPlant;return Object(W.jsx)("div",{className:"add-plant-container",onClick:function(){return t(1002726936)},children:Object(W.jsx)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iNzgiIHZpZXdCb3g9IjAgMCA3OCA3OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzkiIGN5PSIzOSIgcj0iMzgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNCAxMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM5IDI3QzM3LjY3NDUgMjcgMzYuNiAyOC4wNzQ1IDM2LjYgMjkuNFYzNi42SDI5LjRDMjguMDc0NSAzNi42IDI3IDM3LjY3NDUgMjcgMzlDMjcgNDAuMzI1NSAyOC4wNzQ1IDQxLjQgMjkuNCA0MS40SDM2LjZWNDguNkMzNi42IDQ5LjkyNTUgMzcuNjc0NSA1MSAzOSA1MUM0MC4zMjU1IDUxIDQxLjQgNDkuOTI1NSA0MS40IDQ4LjZWNDEuNEg0OC42QzQ5LjkyNTUgNDEuNCA1MSA0MC4zMjU1IDUxIDM5QzUxIDM3LjY3NDUgNDkuOTI1NSAzNi42IDQ4LjYgMzYuNkg0MS40VjI5LjRDNDEuNCAyOC4wNzQ1IDQwLjMyNTUgMjcgMzkgMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",alt:""})})},G=function(e){var t=e.show,a=e.children;return t?Object(W.jsx)("div",{className:"modal-container",children:a}):Object(W.jsx)(W.Fragment,{})};function Q(){var e=Object(i.useState)(""),t=Object(E.a)(e,2),a=t[0],r=t[1],n=Object(i.useState)(!1),o=Object(E.a)(n,2),c=o[0],l=o[1],s=v("nfts",[]),u=Object(E.a)(s,2),L=u[0],m=u[1],p=function(e){return e.map(Z)}(L.map((function(e){return String(e)}))),h=function(e){var t=L.filter((function(t){return t!==e}));m(t)};return Object(W.jsxs)("div",{className:"home-container",children:[Object(W.jsx)(G,{show:c,children:Object(W.jsxs)("div",{className:"add-plant-modal",children:[Object(W.jsx)("p",{className:"text",children:"Ingresa el NFT"}),Object(W.jsx)("input",{className:"modal-input",type:"text",placeholder:"Ejemplo: 1002726936",value:a,onChange:function(e){return r(e.target.value)}}),Object(W.jsx)("button",{className:"modal-button",onClick:function(){return function(){if(l(!1),a){var e=Number(a);L.some((function(t){return t===e}))||(m([].concat(Object(d.a)(L),[e])),r(""))}}()},children:"Agregar"})]})}),p.map((function(e){return Object(W.jsx)(D,{plant:e,removePlant:h},e.nftId)})),Object(W.jsx)(H,{addPlant:function(){return l(!0)}})]})}a(34);function q(){return Object(W.jsx)("div",{className:"header-container",children:Object(W.jsx)("img",{src:"https://marketplace.plantvsundead.com/_nuxt/img/logo.487528b.svg",alt:"PVU Logo",width:"73px",height:"36px"})})}function B(e){var t=e.children;return Object(W.jsxs)("div",{className:"layout-container",children:[Object(W.jsx)(q,{}),t]})}var J=function(){return Object(W.jsx)(s.a,{children:Object(W.jsx)(B,{children:Object(W.jsx)(u.a,{exact:!0,path:"/",component:Q})})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),i(e),o(e)}))};l.a.render(Object(W.jsx)(o.a.StrictMode,{children:Object(W.jsx)(J,{})}),document.getElementById("root")),Y()}},[[40,1,2]]]);
//# sourceMappingURL=main.a9521f20.chunk.js.map