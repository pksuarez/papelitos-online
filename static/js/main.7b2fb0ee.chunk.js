(this.webpackJsonppapelitos=this.webpackJsonppapelitos||[]).push([[0],{14:function(e,t){},19:function(e,t,a){e.exports=a(32)},30:function(e,t){},31:function(e,t){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),s=a.n(o),u=a(5),c=a.n(u),i=a(6),l=a(1),m=a(2),d=a(4),p=a(3),b=a(7),f=a.n(b),h=(r.a.Component,function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cantJudores:2,selectedFile:null,nombres:[]},e.onInputChange=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("jugadores"==a.target.name&&e.setState({cantJudores:a.target.value}),"cargarExcel"!=a.target.name){t.next=6;break}return console.log("excel load"),t.next=5,e.setState({selectedFile:a.target.files[0]});case 5:e.cargarExcel();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.cargarExcel=function(){if(e.state.selectedFile){var t=new FileReader;t.onload=function(t){var a=t.target.result,n=f.a.read(a,{type:"binary"});n.SheetNames.forEach((function(t){var a=f.a.utils.sheet_to_row_object_array(n.Sheets[t]);e.setState({nombres:a})}))},t.readAsBinaryString(e.state.selectedFile)}},e.onCantidadSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.cantJudores),e.props.onExcelLoad(e.state.nombres),console.log(e.state.nombres,"nombres en form")},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"ui form",onSubmit:this.onCantidadSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Selecione el archivo de Excel"),r.a.createElement("input",{className:"ui",type:"file",name:"cargarExcel",accept:".xls,.xlsx",onChange:this.onInputChange,style:{width:"40%"}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Cantidad de jugadores"),r.a.createElement("input",{name:"jugadores",value:this.state.cantJudores,type:"number",min:"2",max:"6",onChange:this.onInputChange,style:{width:"20%"}})),r.a.createElement("button",{className:"ui button",type:"submit"},"Confirmar")))}}]),a}(r.a.Component)),g=a(17),v=a(16),j=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={nombre:""},e.onInputChange=function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({nombre:a.target.value});case 2:n="jugador ".concat(e.props.numero),e.props.onJugadorSubmit(n,e.state.nombre);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Jugador ",this.props.numero),r.a.createElement("input",{className:"ui input",value:this.state.nombre,type:"text",style:{width:"40%"},onChange:this.onInputChange}))}}]),a}(r.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.onJugadorSubmit=function(t,a){e.setState(Object(v.a)({},t,a))},e.generarInputsJugador=function(){for(var t=[],a=1;a<=e.props.cantidad;a++){var n=r.a.createElement(j,{key:a,numero:a,onJugadorSubmit:e.onJugadorSubmit});t.push(n)}return t},e.onFormSubmit=function(t){t.preventDefault();var a=Object.entries(e.state).map((function(e){var t=Object(g.a)(e,2);return{jugador:t[0],nombre:t[1],puntos:0}}));e.props.onJugadoresSubmit(a)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"ui warning message"},r.a.createElement("i",{class:"close icon"}),r.a.createElement("div",{class:"header"},"Tiren los dardos y llenen los nombres en orden.")),r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},this.generarInputsJugador(),r.a.createElement("button",{className:"ui button",type:"submit"},"Confirmar")))}}]),a}(r.a.Component),y=a(18),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.onButtonClick=function(t){e.props.onPuntosUpdate(e.props.jugador)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui segment"},r.a.createElement("label",null,this.props.nombre),r.a.createElement("p",null,"Puntos: ",this.props.puntos),r.a.createElement("button",{className:"ui button",onClick:this.onButtonClick},"Agregar Punto"))}}]),a}(r.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onNumberClick=function(){n.setState({estiloNombre:{display:"block"}})},n.state={actual:0,rondaActual:1,nombre:!0,estiloNombre:{display:"none"},estiloPepelito:{background:"white",cursor:"pointer"}},n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){if(e.ronda!==this.props.ronda&&"block"==Object.values(this.state.estiloNombre)){var t=this.state.actual+1;this.setState({actual:t,estiloNombre:{display:"none"}}),t>=this.props.max&&this.setState({estiloPepelito:{background:"red",cursor:"not-allowed"}})}}},{key:"render",value:function(){return r.a.createElement("div",{style:this.state.estiloPepelito,className:"ui segment",onClick:this.onNumberClick},r.a.createElement("p",null,this.props.numero),r.a.createElement("p",{style:this.state.estiloNombre},this.props.nombres[this.state.actual]))}}]),a}(r.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={ronda:1,listasCreadas:!1,subs:[]},e.onPuntosUpdate=function(t){for(var a=e.props.jugadores,n=0;n<a.length;n++)a[n].jugador==t&&(a[n].puntos=a[n].puntos+1);e.props.onPuntosUpdate(a)},e.crearJugadores=function(){return e.props.jugadores.map((function(t){return r.a.createElement(S,{key:t.jugador,jugador:t.jugador,nombre:t.nombre,puntos:t.puntos,onPuntosUpdate:e.onPuntosUpdate})}))},e.crearSubListas=function(){for(var t=[],a=e.shuffle(e.props.nombres),n=a.length/20,r=0;r<a.length;r+=n)t.push(a.slice(r,r+n));return console.log(t,"separadas"),t},e.crearPapelitos=function(){var t=[],a=[];if(e.state.listasCreadas)for(var n=1;n<=20;n++){var o=r.a.createElement(C,{numero:n,max:e.state.subs[n-1].length,nombres:e.state.subs[n-1],ronda:e.state.ronda});t.push(o)}else{a=e.crearSubListas(),e.setState({listasCreadas:!0,subs:a});for(var s=1;s<=20;s++){var u=r.a.createElement(C,{numero:s,max:a[s-1].length,nombres:a[s-1],ronda:e.state.ronda});t.push(u)}}return t},e.shuffle=function(e){for(var t=Object(y.a)(e),a=t.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[t[n],t[a]];t[a]=r[0],t[n]=r[1]}return t},e.onSiguienteClick=function(){e.setState({ronda:e.state.ronda+1})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui horizontal segments"},this.crearJugadores()),r.a.createElement("div",{className:"ui horizontal segments"},this.crearPapelitos()),r.a.createElement("div",{className:"ui center aligned"},r.a.createElement("button",{className:"ui button",onClick:this.onSiguienteClick},"Siguiente Ronda")))}}]),a}(r.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={cantidadJugadores:"",nombres:[],jugadores:[]},e.onCantidadSubmit=function(){var t=Object(i.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({cantidadJugadores:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onExcelLoad=function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.map((function(e){return e.Nombre})),t.next=3,e.setState({nombres:n});case 3:console.log(e.state.nombres,"en app ");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onJugadoresSubmit=function(t){e.setState({jugadores:t})},e.onPuntosUpdate=function(t){e.setState({jugadores:t})},e.renderComponents=function(){if(""===e.state.cantidadJugadores||0===e.state.nombres.length)return r.a.createElement("div",null,r.a.createElement(h,{onExcelLoad:e.onExcelLoad,onSubmit:e.onCantidadSubmit}));if(0===e.state.jugadores.length)return r.a.createElement(E,{cantidad:e.state.cantidadJugadores,onJugadoresSubmit:e.onJugadoresSubmit});e.state.jugadores[0];return r.a.createElement(O,{nombres:e.state.nombres,jugadores:e.state.jugadores,onPuntosUpdate:e.onPuntosUpdate})},e.crearPapelitos=function(){return console.log(e.state.nombres),e.state.nombres.map((function(e){return r.a.createElement("h3",{key:e.__rowNum__},e.Nombre)}))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px",width:"100%"}},r.a.createElement("div",{className:"ui center aligned segment"},r.a.createElement("h1",null,"Papelitos"),this.renderComponents()))}}]),a}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7b2fb0ee.chunk.js.map