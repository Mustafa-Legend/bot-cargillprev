webpackJsonp([2,0],[function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=t(18),r=a(i),n=t(88),s=a(n),u=t(78),l=a(u),c=t(82),m=a(c),d=t(81),p=a(d);r.default.use(s.default);var v=[{path:"/",component:m.default,name:"Home"},{path:"/bot",component:p.default,name:"Bot"}],f=new s.default({routes:v});new r.default({router:f,el:"#app",template:"<App/>",components:{App:l.default}})},,,,,,,,,,,,,,,,,,,function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(18),r=a(i),n=new r.default;o.default=n},function(e,o){"use strict";e.exports=function(e){var o=null,t=null,a=null,i=null,r=new Array;for(e=""+e,a=e.indexOf(".",0),a>0?(o=e.substring(0,a),t=e.substring(a+1,e.length)):o=e,i=o.length,a=0;i>0;i-=3,a++)r[a]=o.substring(i-3,i);for(o="",a=r.length-1;a>=0;a--)o+=r[a]+".";return o=o.substring(0,o.length-1),t=parseInt(t),isNaN(t)?t="00":(t=""+t,1===t.length&&(t+="0")),e="R$ "+o+","+t}},,,,,,,,,,,,,,,,function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={}},function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(10),r=a(i),n=t(19),s=a(n),u=t(20),l=a(u);o.default={props:["c"],data:function(){return{mt:null,hidden:!1}},mounted:function(){if("MSG"==this.c.tipo){var e=this.c.mt;if(e.indexOf("@")>-1){var o=["idade","contribuicao","resultadoContribuicao","resultadoContribuicaoEmpresa","contribuicaoVoluntaria","asDuasContribuicoesSomadas","renda","saldo"],t=["idadeAposentadoria"],a=!0,i=!1,n=void 0;try{for(var u,c=(0,r.default)(o);!(a=(u=c.next()).done);a=!0){var m=u.value,d=localStorage.getItem(m);d&&(e=e.replace("@"+m+"@",(0,l.default)(d)))}}catch(e){i=!0,n=e}finally{try{!a&&c.return&&c.return()}finally{if(i)throw n}}var p=!0,v=!1,f=void 0;try{for(var h,g=(0,r.default)(t);!(p=(h=g.next()).done);p=!0){var S=h.value,b=localStorage.getItem(S);b&&(e=e.replace("@"+S+"@",b))}}catch(e){v=!0,f=e}finally{try{!p&&g.return&&g.return()}finally{if(v)throw f}}}return void this.divMSG(e)}if("FOT"==this.c.tipo)return void setTimeout(function(){s.default.$emit("callProximo",1)},1500)},methods:{envia:function(e){s.default.$emit("envia",e),this.hidden=!0},divMSG:function(e){var o=this;this.mt="";var t=10,a=void 0,i=0,r=(e.length,!1),n=15,u=40;window.location.hostname.toLowerCase().indexOf("cargill")==-1&&(n=1,u=4);var l=function l(){setTimeout(function(){return o.mt+=e[i++]," "==e[i]&&o.scrollDown(),t=a,e[i]&&[".",",","!","?"].indexOf(e[i])>-1&&!r?(a=Math.floor(Math.random()*(10*u-10*n+1))+10*n,r=!0):(a=Math.floor(Math.random()*(u-n+1))+n,r=e[i]&&[".",",","!","?"].indexOf(e[i])>-1),e[i]?(l(),void o.scrollDown()):void setTimeout(function(){s.default.$emit("callProximo",1)},300)},t)};l()},scrollDown:function(){document.getElementById("divChat").scrollTop=999999}}}},function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(21),r=a(i),n=t(43),s=a(n),u=t(10),l=a(u),c=t(77),m=t(19),d=a(m),p=t(79),v=a(p),f=t(20),h=a(f);o.default={props:["script"],components:{msg:v.default},directives:{focus:c.focus},data:function(){return{arvore:"start",arvorePasso:{},showMensagem:!1,showQuickButtons:!1,mensagem:"",quickButtons:[],chat:[],c:null}},mounted:function(){var e=this,o=!0,t=!1,a=void 0;try{for(var i,r=(0,l.default)((0,s.default)(this.script));!(o=(i=r.next()).done);o=!0){var n=i.value;this.arvorePasso[n]=0}}catch(e){t=!0,a=e}finally{try{!o&&r.return&&r.return()}finally{if(t)throw a}}this.proximo(),d.default.$on("callProximo",function(o){e.proximo(o)}),d.default.$on("envia",function(o){e.chat.push({tipo:"SENT",mt:o}),setTimeout(function(){e.proximo(!0,o)},1e3)}),this.scrollDown(30)},methods:{proximo:function(e,o){var t=this.script[this.arvore][this.arvorePasso[this.arvore]];return e&&this.arvorePasso[this.arvore]++,o&&t[o]&&this.script[t[o]]&&(this.arvore=t[o],this.arvorePasso[this.arvore]=0),o&&"PER"==t.tipo&&["reais","numero","percentual"].indexOf(t.filtro)!=-1&&t.max&&(o>t.max||o<t.min)?(this.arvorePasso[this.arvore]--,this.arvorePasso[this.arvore]--,this.c=t,void this.chat.push({tipo:"MSG",mt:t.mtInvalido})):(o&&t.funcao&&t.funcao(o),o&&t.componente&&(console.log("Salvando Storage",t.componente,o),localStorage.setItem(t.componente,o)),this.c=this.script[this.arvore][this.arvorePasso[this.arvore]],this.c?("GOTO"==this.c.tipo&&(this.arvore=this.c.fluxo,this.arvorePasso[this.arvore]=0,this.c=this.script[this.arvore][this.arvorePasso[this.arvore]]),"PER"==this.c.tipo?void(this.showMensagem=!0):"QUICKBUTTONS"==this.c.tipo?(this.quickButtons=this.c.botoes,void(this.showQuickButtons=!0)):void this.chat.push(this.c)):void console.log("terminou"))},envia:function(){var e=this,o=(this.mensagem+"").trim(),t=o;if(""!=o){if("reais"==this.c.filtro&&(o=(+o.replace(".","").replace(",",".").replace(/[^.0-9]/g,"")).toFixed(2),t=(0,h.default)(o)),"percentual"==this.c.filtro&&(o=(+o.replace(".","").replace(",",".").replace(/[^.0-9]/g,"")).toFixed(2)/100,t=(100*o).toFixed(2).toString().replace(".",",")+" %"),"dia"==this.c.filtro){var a=o.split("-"),i=(0,r.default)(a,3),n=i[0],s=i[1],u=i[2];t=u+"/"+s+"/"+n}this.chat.push({tipo:"SENT",mt:t}),this.mensagem="",this.showMensagem=!1,setTimeout(function(){e.proximo(!0,o)},1e3)}},enviaQuickButton:function(e){var o=this;this.chat.push({tipo:"SENT",mt:e}),this.showQuickButtons=!1,this.quickButtons=[],setTimeout(function(){o.proximo(!0,e)},1e3)},scrollDown:function(e){setInterval(function(){document.getElementById("divChat").scrollTop=999999},e)}}}},function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var i=t(80),r=a(i),n=t(41),s=a(n);o.default={components:{"bot-web":r.default},data:function(){return{botScript:s.default}},mounted:function(){}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={}},function(e,o,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=t(21),r=a(i),n={tipo:"MENU",botoes:["Menor","Maior"],Menor:"salarioMenor",Maior:"salarioMaior"},s={tipo:"MENU",botoes:["Iniciar simulação!"]},u={tipo:"MENU",botoes:["Não, obrigado.","Sim, quero!"],"Não, obrigado.":"salarioMenorNao","Sim, quero!":"salarioMenorSim"},l={tipo:"MENU",botoes:["Começar outra vez"],"Começar outra vez":"start"},c={tipo:"MENU",botoes:["Download Regulamento","Aderir Plano","Começar outra vez"],"Download Regulamento|www":"https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=falta+fazer+o+PDF+com+o+regulamento","Aderir Plano|www":"http://cargillprev.com.br/adesao-cargillprev/","Começar outra vez":"start"},m={tipo:"MENU",botoes:["Sim","Não"],"Não":"salarioMaiorSimulacao",Sim:"salarioMaiorSimulacaoVoluntaria"},d={tipo:"MENU",botoes:["Sim","Não"],"Não":"salarioMaiorSimulacaoIdade",Sim:"salarioMaiorSimulacaoSaldoAtual"},p=function(e){var o=e,t=+(o*localStorage.getItem("salario")).toFixed(2);localStorage.setItem("contribuicaoVoluntaria",t);var a=+localStorage.getItem("resultadoContribuicao");localStorage.setItem("asDuasContribuicoesSomadas",a+t)},v=function(e){var o=e,t=(o-3745.57).toFixed(2);localStorage.setItem("salario",o),localStorage.setItem("contribuicao",t)},f=function(e){var o=e,t=(o*localStorage.getItem("contribuicao")).toFixed(2),a=(1.5*t).toFixed(2);localStorage.setItem("percentualContribuicao",o),localStorage.setItem("resultadoContribuicao",t),localStorage.setItem("resultadoContribuicaoEmpresa",a),localStorage.setItem("contribuicaoVoluntaria",0),localStorage.setItem("valorOutraEntidade",0),localStorage.setItem("asDuasContribuicoesSomadas",t)},h=function(){var e=864e5,o=localStorage.getItem("idade"),t=o.split("-").map(function(e){return+e}),a=(0,r.default)(t,3),i=a[0],n=a[1],s=a[2],u=+localStorage.getItem("idadeAposentadoria"),l=(new Date(i,n-1,s),new Date(i+u,n-1,s)),c=new Date,m=((l.getTime()-c.getTime())/e,Math.round(Math.abs((l.getTime()-c.getTime())/e))),d=Math.round(m/28.09615384615385),p=+localStorage.getItem("resultadoContribuicao"),v=+localStorage.getItem("resultadoContribuicaoEmpresa"),f=+localStorage.getItem("contribuicaoVoluntaria"),h=v+f+p,g=+localStorage.getItem("valorOutraEntidade"),S=(+localStorage.getItem("salario"),Math.pow(1.004074124,d)),b=g*S;console.log("SDPJ",b);var _=Math.pow(1.004074124,d-1),M=Math.pow(1.00246627,d-1),w=h*_+1.00246627*h/.0016078539999999641*(_-M);console.log("CTBPJ",w);var x=(b+w).toFixed(2);console.log("SALDO",x);var y=(.01*x).toFixed(2);localStorage.setItem("saldo",x),localStorage.setItem("renda",y)};e.exports={start:[{tipo:"MSG",mt:"Oi, que bom que você se interessou e veio dar uma olhadinha em como seria o seu futuro investindo com a gente."},{tipo:"MSG",mt:"Vou te ajudar a fazer uma simulação. É bem simples. Vamos começar?"},s,{tipo:"MSG",mt:"Sei que não é legal sair falando por aí, mas para a simulação preciso saber sua faixa salarial. Essa informação é super confidencial, pode ficar tranquilo(a). "},{tipo:"MSG",mt:"Seu salário é maior ou menor que R$ 3.745,57?"},n],salarioMenor:[{tipo:"MSG",mt:"Bom, seu salário atual ainda não atingiu o piso de 1 UP. Questão de tempo, tenho certeza!"},{tipo:"MSG",mt:"Mesmo assim, você pode fazer contribuições esporádicas e se beneficiar da isenção tributária de até 12% de sua remuneração. Além disso, fica coberto com auxílio doença, benefício mínimo e pensão por morte, sem desembolsar um centavo."},{tipo:"MSG",mt:"Gostou? Quer saber mais sobre o plano?"},u],salarioMenorNao:[{tipo:"MSG",mt:"Tudo bem, mas não se esqueça que estarei sempre aqui pra te ajudar."},l],salarioMenorSim:[{tipo:"MSG",mt:"Um bom negócio, não?"},{tipo:"MSG",mt:"Faça o download do Regulamento para saber mais e, em seguida, a Adesão do plano!"},c],salarioMaior:[{tipo:"MSG",mt:"Legal. Agora, para continuar a simulação, preciso saber seu salário. O segredo continua, pode ficar tranquilo."},{tipo:"PER",placeholder:"Salário?",filtro:"reais",min:3745.57,max:5e5,funcao:v,mtInvalido:"Ops, seu salário deve ser acima de R$ 3745,57 - Vamos de novo?"},{tipo:"MSG",mt:"Ok, então sua base de contribuição é de @contribuicao@"},{tipo:"MSG",mt:"Você pode fazer contribuições mensais entre 1% e 7,5%."},{tipo:"MSG",mt:"Qual seria o percentual que você gostaria de contribuir mensalmente?"},{tipo:"PER",placeholder:"% de contribuição",filtro:"percentual",min:.01,max:.075,funcao:f,mtInvalido:"Ops, você tem que escolher um percentual entre 1% e 7,5%. Vamos de novo?"},{tipo:"MSG",mt:"Ótimo, obrigado. Neste caso sua contribuição mensal seria de @resultadoContribuicao@ e a contribuição mensal da empresa seria de @resultadoContribuicaoEmpresa@"},{tipo:"MSG",mt:"E tem mais..."},{tipo:"MSG",mt:"Além da contribuição básica você pode fazer voluntárias de até 10%.  Só lembrando que o benefício fiscal do IRRF só vai até 12% sobre sua remuneração. Você gostaria de simular a voluntária? "},m],salarioMaiorSimulacaoVoluntaria:[{tipo:"MSG",mt:"Que legal. Qual seria sua opção?"},{tipo:"PER",placeholder:"% de contribuição voluntária",filtro:"percentual",min:0,max:.1,funcao:p,mtInvalido:"Ops, você tem que escolher um percentual entre 0% a 10%. Vamos de novo?"},{tipo:"MSG",mt:"Nesse caso, sua contribuição voluntária mensal seria de @contribuicaoVoluntaria@"},{tipo:"GOTO",fluxo:"salarioMaiorSimulacao"}],salarioMaiorSimulacao:[{tipo:"MSG",mt:"OK, então vamos à simulação."},{tipo:"MSG",mt:"Prometo que não conto pra ninguém também, mas me diz: qual a sua data de nascimento?"},{tipo:"PER",placeholder:"data de nascimento",filtro:"dia",min:18,max:55,componente:"idade",mtInvalido:"Ops, você deve ter entre 18 e 55 anos. Vamos de novo, Qual sua a sua data de nascimento?"},{tipo:"MSG",mt:"Você está trazendo algum valor de outra entidade?"},d],salarioMaiorSimulacaoSaldoAtual:[{tipo:"MSG",mt:"Legal. Qual seria esse valor?"},{tipo:"PER",placeholder:"Valor (R$) da outra entidade?",filtro:"reais",componente:"valorOutraEntidade",mtInvalido:"Ops, digite novamente o saldo que você possui na outra entidade. Se não tiveres nada, apenas digite 0."},{tipo:"GOTO",fluxo:"salarioMaiorSimulacaoIdade"}],salarioMaiorSimulacaoIdade:[{tipo:"MSG",mt:"OK. Com que idade pretende se aposentar entre 55 e 60 anos? "},{tipo:"PER",placeholder:"Idade de aposentadoria?",filtro:"numero",min:55,max:60,componente:"idadeAposentadoria",funcao:h,mtInvalido:"Seria bom, mas você tem que escolher uma idade entre 55 e 60 anos, vamos de novo:"},{tipo:"MSG",mt:"Perfeito. Já tenho tudo o que preciso para fazer a simulação. "},{tipo:"MSG",mt:"Lembrando que é apenas uma estimativa. Vai depender do desempenho dos investimentos e do seu crescimento durante a carreira."},{tipo:"MSG",mt:"Outra coisa importante: de acordo o regulamento do nosso plano, na aposentadoria você pode optar por sacar à vista até 25% de seu saldo e  optar por várias formas de receber o saldo remanescente. Para simplificar, optei por não sacar nada à vista e receber o saldo remanescente em parcelas mensais de 1% do saldo atualizado, ok?"},{tipo:"MSG",mt:"Vamos lá. Mensalmente você estará contribuindo com @asDuasContribuicoesSomadas@ e a empresa com @resultadoContribuicaoEmpresa@."},{tipo:"MSG",mt:"Quando você completar @idadeAposentadoria@ anos, seu saldo projetado será de: @saldo@"},{tipo:"MSG",mt:"Um minutinho. Vou calcular e sua renda mensal e já mostro para você..."},{tipo:"MSG",mt:"Sua renda mensal inicial seria de: @renda@"},{tipo:"MSG",mt:"Gostou? Só em ver a simulação já dá uma tranquilidade, né? Estamos esperando você para cuidar bem do seu futuro."},l]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,o){},function(e,o){},function(e,o){},function(e,o){},function(e,o){},,function(e,o,t){t(73);var a=t(6)(t(36),t(84),null,null);e.exports=a.exports},function(e,o,t){t(72);var a=t(6)(t(37),t(83),"data-v-0dd475b2",null);e.exports=a.exports},function(e,o,t){t(75);var a=t(6)(t(38),t(86),"data-v-5afff67e",null);e.exports=a.exports},function(e,o,t){t(76);var a=t(6)(t(39),t(87),null,null);e.exports=a.exports},function(e,o,t){t(74);var a=t(6)(t(40),t(85),null,null);e.exports=a.exports},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",["SENT"==e.c.tipo?t("div",{staticClass:"msg sent"},[e._v("\n        "+e._s(e.c.mt)+"\n    ")]):e._e(),e._v(" "),"MSG"==e.c.tipo?t("div",{staticClass:"msg sended"},[e._v("\n        "+e._s(e.mt)+"\n    ")]):e._e(),e._v(" "),"FOT"==e.c.tipo?t("div",{staticClass:"msg"},[t("img",{attrs:{src:e.c.foto,height:"200"}})]):e._e(),e._v(" "),"MENU"!=e.c.tipo||e.hidden?e._e():t("div",{staticClass:"msg buttons"},[t("hr"),e._v(" "),e._l(e.c.botoes,function(o){return t("div",[e.c[o+"|www"]?e._e():t("button",{staticClass:"btn",on:{click:function(t){e.envia(o)}}},[e._v(e._s(o))]),e._v(" "),e.c[o+"|www"]?t("a",{attrs:{href:e.c[o+"|www"],target:"_blank"}},[e._v(e._s(o))]):e._e()])})],2)])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("router-view")},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"home"},[t("div",{staticClass:"logo"}),e._v(" "),t("div",{staticClass:"text"},[t("h2",[e._v("Vamos simular sua aposentadoria agora?")]),e._v(" "),t("p",{staticClass:"subline"},[e._v("Seu futuro depende de você, mas a gente te dá uma ajudinha para prevê-lo.")]),e._v(" "),t("p",{staticClass:"button"},[t("router-link",{attrs:{to:"/bot"}},[e._v("Começar agora")])],1)])])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticStyle:{"overflow-y":"scroll",height:"100%",width:"100%"},attrs:{id:"divChat"}},[e._l(e.chat,function(e){return t("div",[t("msg",{attrs:{c:e}})],1)}),e._v(" "),e.showMensagem?t("div",{staticClass:"user-msg form"},[t("form",{attrs:{action:"",method:"post"}},[e.c.filtro?e._e():t("input",{directives:[{name:"focus",rawName:"v-focus.lazy",value:!0,expression:"true",modifiers:{lazy:!0}},{name:"model",rawName:"v-model",value:e.mensagem,expression:"mensagem"}],attrs:{value:"",type:"text",placeholder:e.c.placeholder},domProps:{value:e._s(e.mensagem)},on:{keydown:function(o){e._k(o.keyCode,"enter",13)||(o.preventDefault(),e.envia(o))},input:function(o){o.target.composing||(e.mensagem=o.target.value)}}}),e._v(" "),"numero"==e.c.filtro?t("input",{directives:[{name:"focus",rawName:"v-focus.lazy",value:!0,expression:"true",modifiers:{lazy:!0}},{name:"model",rawName:"v-model",value:e.mensagem,expression:"mensagem"}],attrs:{value:"",type:"text",placeholder:e.c.placeholder},domProps:{value:e._s(e.mensagem)},on:{keydown:function(o){e._k(o.keyCode,"enter",13)||(o.preventDefault(),e.envia(o))},input:function(o){o.target.composing||(e.mensagem=o.target.value)}}}):e._e(),e._v(" "),"reais"==e.c.filtro?t("input",{directives:[{name:"focus",rawName:"v-focus.lazy",value:!0,expression:"true",modifiers:{lazy:!0}},{name:"model",rawName:"v-model",value:e.mensagem,expression:"mensagem"}],attrs:{value:"",type:"text",placeholder:e.c.placeholder},domProps:{value:e._s(e.mensagem)},on:{keydown:function(o){e._k(o.keyCode,"enter",13)||(o.preventDefault(),e.envia(o))},input:function(o){o.target.composing||(e.mensagem=o.target.value)}}}):e._e(),e._v(" "),"percentual"==e.c.filtro?t("input",{directives:[{name:"focus",rawName:"v-focus.lazy",value:!0,expression:"true",modifiers:{lazy:!0}},{name:"model",rawName:"v-model",value:e.mensagem,expression:"mensagem"}],attrs:{value:"",type:"text",placeholder:e.c.placeholder},domProps:{value:e._s(e.mensagem)},on:{keydown:function(o){e._k(o.keyCode,"enter",13)||(o.preventDefault(),e.envia(o))},input:function(o){o.target.composing||(e.mensagem=o.target.value)}}}):e._e(),e._v(" "),"dia"==e.c.filtro?t("input",{directives:[{name:"focus",rawName:"v-focus.lazy",value:!0,expression:"true",modifiers:{lazy:!0}},{name:"model",rawName:"v-model",value:e.mensagem,expression:"mensagem"}],attrs:{value:"",type:"date",placeholder:e.c.placeholder},domProps:{value:e._s(e.mensagem)},on:{keydown:function(o){e._k(o.keyCode,"enter",13)||(o.preventDefault(),e.envia(o))},input:function(o){o.target.composing||(e.mensagem=o.target.value)}}}):e._e(),e._v(" "),t("button",{on:{click:function(o){o.preventDefault(),e.envia(o)}}},[e._v("Enviar")])])]):e._e(),e._v(" "),e.showQuickButtons?t("div",[t("hr"),e._v(" "),e._l(e.quickButtons,function(o){return t("div",[t("button",{on:{click:function(t){e.enviaQuickButton(o)}}},[e._v(e._s(o))])])})],2):e._e()],2)},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._m(0),e._v(" "),t("div",{staticClass:"stage"},[t("bot-web",{attrs:{script:e.botScript}})],1)])},staticRenderFns:[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("header",{staticClass:"main-header"},[t("div",{staticClass:"logo"}),e._v(" "),t("h1",[e._v("Simulador de Previdência")])])}]}}]);
//# sourceMappingURL=app.80cd8c3c695f6083070c.js.map