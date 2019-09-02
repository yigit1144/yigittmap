// ==UserScript==
// @name         yigittmap
// @namespace    http://tampermonkey.net/
// @version      1.2.5
// @description  yigittmap
// @author       Yiğitt Savage#4017
// @match        https://pixelzone.io/*
// @match        http://pixelzone.io/*
// @homepage     https://github.com/yigit1144/yigittmap/
// @updateURL    https://raw.githubusercontent.com/yigit1144/yigittmap/master/minimap.user.js
// @downloadURL  https://raw.githubusercontent.com/yigit1144/yigittmap/master/minimap.user.js
// @grant        none
// ==/UserScript==
eval((function(x){var d="";var p=0;while(p<x.length){if(x.charAt(p)!="`")d+=x.charAt(p++);else{var l=x.charCodeAt(p+3)-28;if(l>4)d+=d.substr(d.length-x.charCodeAt(p+1)*96-x.charCodeAt(p+2)+3104-l,l);else d+="`";p+=4}}return d})("var baseTemplateUrl=\"https://raw.githubusercontent.com/pixelfixinit/TurkeyMap/master/\",vers=\"TrZone\",range=6,x,y,zoomlevel` %!ing_out` #%in` &!_time,x_window,y_` \"#coorDOM,gameW` -\"toggle_sh` \"&foll` $&grid,counter,image_list,needed_t`\"R#s,mousemoved,minimap,m` \"\"_boar` -%_cursor` 2'x` #%text,ctx_` Z$c` \"&` _#` &(` c#re_url=/\\?p=([-\\d]+),(` \"#/,timerDiv,audio=new Audio(\"res/sfx/bip2.mp3\");` ?!.play();Number.prototype.between=function(a,b){var c=Math.min.apply(Math,[a,b]),d` 6#ax` +.;return this>c&&this<d;};`$N\".addEventListener(\"load\",`!:%`!:\"a=getCookie(\"`&c+\");a||((a=(\"Clique em OK!\",` ;+))?s` M6,a):(a=\"\"));`'e,a;console.log(vers+\". ` Q)` |,` E)\"Try: list` ;$s() and keys H, QWERTYUIOP[ ASDFG, X\");`'B&=document.getElementById(\"canvas\");`'z#` /7oords\");x=y=`(Y$=`(Y$=0`$.$`'o$`('!=null;`)Q%=14;`(l'=false` *$`(w\"=true` M!`)p\"=`*\"'` I#`)%=10`!.%`)6&=[];`)O#=0;`)=,`!L\"` N#cachebreaker=\"\";`(($`\"L6` =!\");`)X'` 36` >#-box` H'text` 2>text\");a` @&create` F#(\"div\");a.setAttribute(\"class\",\"post block bc2` D!innerHTML=\"<style>.grecaptcha-badge,#message{display: none;}</` L\"\\n<div id=\\`!b$bg\\\" ` 9!=\\\"background-color:rgba(255,255,255,0.60); border-radius:0px; position:absolute; right:3px; bottom` &\"z-index:1;\\\">`!L!`\"R!=\\\"posy\\\"`!Z\"posyt`!F2size: 100%; `!b\" rgb`!c! 0, 0); text-align: center; line-he`!P! 42px; vertical` C$middle; width: auto; ` K$` (\"`\"M* 1`\"W\"adding: 1px 1px`\"1%`#_(`%P!\\\"></div` ,/box`\"E'`#G% relative;`!P\"450px;`!N#2` (!\\\"><`*e\"` e)` c'`\"*#`#.\"`\")$` )!`$$&`$P.top:0;left:0`! !/`! \"` y1-`2\"!` gI2` S]`3#\"` hI3` hI`$53confi`(O(`&1(15px;`%K$3px;`(T@75);\\\">\\t<span`!(\"hide-`$[*`\"K\":poi`'P!\\\">Gizle\\t</span> | ` V'`.o\"-mouse` H9Fareyi takip et` X3`/e\"-gri`$|(` \\.Kareleri g\\xF6ster` e(Zoom:` k(zoom-plus` [6font-w`#Y\"bold`#&!u25B2` q#`#+)` l!min` =QC` k#`%4#`%<!\";`/?%body.appendChild(a`03%`/v=`1-)ard`0x@ard` L'`!\"` 6>` B\"` O&.`(3!=` &$offsetWidth`!D*` :*` -#` :0` {\"` @+` .#` =/.`(5\"`!2+H` 0!`!3+` <*`!6)` A+`!(#` B+`!8)` K#ctx_`$=$`!;$getContext(\"2d\")` 9(`$8#`!6*` 49`$2#`!6+` 78.mozImageSmoothingEnabled=false` >)webkit` &Dms` \"Di` -7`*G\"Show(` %\"_show);drawBoard(` &\"C`\"F!();setTimeout(function(){gameWindow.nex`'&$Sibling.className=\"fadeIn\";` 3:`*)!.display=\"block\";timerDiv.innerText=\"Pixel yerle\\u015Ftirmeden \\xF6nce haritan\\u0131n etraf` &#da gezin.` q'`!5\"`'l\"\"60%\";},500`\"#R`!y+none` s450px\";},8000)`+&`*K,`0E$\").onclick=`!C'`$c'`$z!);}`(_%text` 5;tru` N!`!%5`0~(`!&8_` C\"=!` \")` ^8`05%\").addEventListener(\"`!,!down\",`!#%a){a.preventDefault();zooming_in=true` '%out`'k#zoomIn();},`\"}#`!7:`0}!` ocout`!I*in`!K'Out`!-F`\"n:up`!F*` -`!wb` o4`#d&` f>`%r>`,2$`& 1)?(this`*n\"HTML=\"Ekr`*H$ takip et\",loadTemplates(),x_w`)s!=x,y` #$y,`- ():` j-Fareyi` k'getCenter()`(=9`!n\"-grid`(<9grid`\"9%grid`.])}`-l(`#mC`/L'&&`#=*||`,j'`\"!%,100)`&]'` q>move`!'*if`0c(&&coorDOM){var b=` (#`#P&.split(/\\s?[xy:]+/);a=parseInt(b[1]);b` %(2]);if(x!=a||y!=b){x=a,y=b,`\"7)?(`$t1):`$~(,`!~%d=1;}}`\"S%updateloop`2U\"Interval`/w(` R&&&(` ^'30`&D,);},10`#P'`!H\".list` >%`%I(var a=0,b=\"\";Object.keys(t` G#_list).map`!H&c,d` T\"e=` :)[c];if(e.name` <\"f=300<`1=#?2:1` #'4:8;b+=\"\\n#### \"+c+\" \"+` 8#+\"x\"+e.height` 4!base`!}$Url+`!\"\"` ^! https://pixelzone.io/?p=\"+Math.floor(e.x` v$/2)+\",` /+y`!'%` 7$f+\"\\n\";a+=` Q#*` :$;}});b=\"### Total `!6! count: \"+a` V!+b;console.log(b);};`#@$ `%0(`$##new XMLHttpRequest,b=`\"I,\"`#n$s/data.json?\"+(new Date).g`)0\"();a.onreadystatechange`%5(4==`+~!` ?!State&&(200` 0#status&&(`&\"#`%#)=JSON.`(N!`,b\"responseText)`(8*||`,](,(` s*||399<` &')&&setCookie(\"`\"R+\",\"\"`-H!a.open(\"GET\",b,true);a.send();imag`!b#[];`(;+;`,.'`#~&,60000);}`$;%`!\"Show`,|+=void 0===a?`.'$show:a;minimap_box=`.w5` >#-box\")` J%text` 2>text\");`!+'?(`!*'.style.display=\"block\",` x(` 3,none\",` x=config\")` k3`+~,:`!:8`!-\"`!H)`2]'M` 2\"i g\\xF6ster`!c:`\"*6padding=\"1px 3px`\"$?`#Z\"` Y#backgroundcolor=\"rgba(0,0,0,0.75)`!!1c`/t!=\"poin`!x!`##U`##!);` M/sByClassName(\"grecaptcha-badge\")[0]` X1`'T'zoomIn(){zooming_in&&(zoomlevel*=1.2,45<` )%?` 3&=45):(drawBoard(),`2E)`%>+,`)&'`!0\",zoom_time))`)'(zoomOut`!J'out`!J(/`!Q!1>`!@11` yWOut`!=4` K+{if(`)4'&&null!=`-R0`/S$[],b;for(b in ` 4+a.push`0;!needed_`/[%=[]` Q\"=0;b<a.length;b++` t\"c=a[b],d`3{-.x,`4/..y,f=e+` &-`2/#x_`!|#between(d-range,d` A.`4A\"` :!)&&y` J,e` S#f` :%`\"*,`\"N\"c);}if(0==` /-`\"E\"){0==`&t(` $'`%T\"`+T.opacity=\"0.10`(kN` P+`*%7auto\");}else{for`!081` nW1`.|@b=counter`%f!`#83`%t\"null==`2y&[` >,[b]]?loadImage(` ,/):(`!(#+=1,`!2$`$N4&&draw`02(;}}}`(s*`!%\"a){console.log(\"    Load `!i! \"+a,cachebreaker);`!{'a]=new ` d!;var b=base`!/$Url+\"` J!s/\"`'C+a].name;` p(&&(b+=\"?\"+` w7.src=b` %+onload=`\"7$(){`#\"&;`\"[M;}`, '` -+{ctx_`%U#.clearRect`1\\!` .$`)e!` %%`*E\")`+P!`,5\"1*`*P$-` F)/`.I&2,b=1*`*=$` >%` f\"` ;)c=0;c`&D5c`,O$d`\"L-[c];`\" (draw`%L\"`#P'd],(1*`$L*d].x-1*a)*`!?%` 01y-1*b` 9(`2>&` u)`#)#` &4`#8$`'2'`1&'`$#(_board`#2` 5#`$.)` -#` y$if(!(4.6>`-*!`!F!)&&`10#grid` y0beginPath()`'|!a=` ~/+`\"Z&b` 1+`!7\"` 6'c` 9$`%M#2%` 3%-` <&d` =%`%L#` 12e=1`#v&`%\"(`!7#lineWidth=0.2`&y%f=0;f<=a;f+=e`\"A0moveTo(f+c,d),` a2` 9#b+d);}for(` o#b` V<c,f+` Z8a+` <\";}` 1.strokeStyle=\"grey\"`\"B/` ?\"(`&!-C`0!(`(J\"`);G` ?$+` -6c`)fCd` ='` f%` 6.`\"()`2u\"`'_3` 6#`'i*` .#`'p$x<a||x>b||y<c||y>d||(a=x-a,c=y-c`#~)` U#`'l'` +0`&.&`!l&6` 50`$D)darkred\"` 50rect(`*y&a`+$'c` \"&` ,&`!B1`%2$)`/T'getCente`%/&`#y\".location.href.match(re_url);a?(`%.$=parseInt(a[1]),`$W$` ,(2])):(` 1%` R%0);load`1-)`!7#addEventListener(\"keydown\",`2<%a){switch(a.keyCode){case 72:`,R\"Show();`3E!;` 6!81:clickColor(0` .*7` 0(1` /)69` 0(2` J*2` 0(3` .*4` 0(4` .*` g)5` .*5` 0(6` /)73` 0(7` .*` g)8` f*0` 0(9` /)22`\"l)1`\"l*6`!A)1`\"m*8`!B)1`\"n*68` 0)`\"o*7`!D)1`\"p*7`!C*`\"q*107:zooming_in=true;` ($out=fals` ,\"In()` 2%in` 3#` ^)9` b%out` ^*` H%zoomOut` a'` }&`\"`(8:a=gameW`'B\"nextElementSibling.nextElementSibling.n` \"@`3[!b=a` (B,c=b` Q0\"none\"!=a.style.display?(` \"+=` C\"):` I$c` A,` \"+` H%(b` #2`# #default:console.log`*2'`*!%` $\");}});`,D%`%E'a`,I\"b=document.ge`\"D$ById(\"palette\"),c=new Mouse`+P!(\"` d!\",{bubbles:true,offsetX:b.` $\"Left+4` 0#Y` .%Top+4});b.childNodes[`-$&/8)]` .(a%8]`\"f!atch`!9\"c`,~&setCookie=`,m&,b`\"6\"c=` 5%.arg`\"A!s;c=2<` %/.length?c[2]:1036800`%m!d`\"X!Date;d.setTime(d.g` ##)+60000*c);c=\"; expires=\"+d.toGMTString();`#`%c`!k\"a+\"=\"+b+c+\"; path=/\";}`$C&g`!]$(a){a=(\"; \"+` V+).split` 6\"` l!);if(2==a`\"*#){return a.pop(` G&\").shift();}}"))
© 2019 GitHub, Inc.
