(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{25:function(t){t.exports=JSON.parse('[{"question":"Which is the only mammal that can\u2019t jump?","optionA":"Dog","optionB":"Elephant","optionC":"Goat","optionD":"Lion","answer":"Elephant"},{"question":"How many Number of planets are there in our solar system? ","optionA":9,"optionB":10,"optionC":11,"optionD":12,"answer":9},{"question":"How many directions are present? ","optionA":4,"optionB":3,"optionC":1,"optionD":2,"answer":4},{"question":"What is the capital of India? ","optionA":"Delhi","optionB":"Kolkata","optionC":"Mumbai","optionD":"Hyderabad","answer":"Delhi"},{"question":"Who is the present Prime Minister of India? ","optionA":"Jawaharlal Nehru","optionB":"Indira Gandhi","optionC":"Narendra Modi","optionD":"Ramnadh Kobind","answer":"Narendra Modi"},{"question":"Who is called Little Master? ","optionA":"M.S.Dhoni","optionB":"Sachin Tendulkar","optionC":"Virat Kohli","optionD":"V.V.S.Lakshman","answer":"Sachin Tendulkar"},{"question":"What is the currency of India? ","optionA":"Dollar","optionB":"Euro","optionC":"Won","optionD":"Rupee","answer":"Rupee"},{"question":"Sun rises in which direction? ","optionA":"South","optionB":"East","optionC":"North","optionD":"West","answer":"East"},{"question":"Which state is called as The Land of Rising Sun in India? ","optionA":"Andhra Pradesh","optionB":"Haryana","optionC":"Arunachal Pradesh","optionD":"Punjab","answer":"Arunachal Pradesh"},{"question":"Which was the first animal to go into space? ","optionA":"Cat","optionB":"Mouse","optionC":"Monkey","optionD":"Dog","answer":"Dog"},{"question":"Which planet is called as The Blue Planet?","optionA":"Jupiter","optionB":"Earth","optionC":"Saturn","optionD":"Uranus","answer":"Earth"},{"question":"How many continents are present?","optionA":"6","optionB":"8","optionC":"7","optionD":"9","answer":"7"},{"question":"Who is the inventor of computer?","optionA":"Charles Babbage","optionB":"Graham Bell","optionC":"Edison","optionD":"Max","answer":"Charles Babbage"},{"question":"Dennis Ritchie is the inventor of which programming language?","optionA":"Java Programming","optionB":"Python","optionC":"C programming","optionD":"Fortran","answer":"C Programming"},{"question":"Bredan Eich is the creator of?","optionA":"Java Programming","optionB":"C programming","optionC":"Python ","optionD":"Javascript","answer":"Javascript"}]')},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=n(14),a=n.n(s),r=(n(32),n(8)),c=n(9),h=n(11),l=n(10),u=(n(33),n(34),n(7)),p=n(1),j=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"home_Container",children:[Object(p.jsx)("h3",{children:"Quiz App"}),Object(p.jsx)("button",{className:"playBtn",children:Object(p.jsx)(u.b,{className:"btn",to:"/quiz",children:Object(p.jsx)("p",{children:"Play"})})})]})}}]),n}(o.Component),d=j,b=(n(44),n(25)),O=n(3),m=n(16),x=(n(45),function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).changeNext=function(){var t=o.state.qNO;t<15&&o.setState({qNO:t+1,timer:60}),15===t&&(o.props.crtDetail(o.state),o.setState({showResult:!0}))},o.changePrev=function(){var t=o.state.qNO;t>1?o.setState({qNO:t-1,timer:60}):window.alert("This is the first question!!!")},o.quitQuiz=function(){o.props.crtDetail(o.state)},o.checkAns=function(t){var e=o.state.correct,n=o.state.wrong;o.state.questions[o.state.qNO-1].answer===t?(m.b.success("Correct Answer"),setTimeout(o.setState({correct:e+1}),5e3)):(m.b.error("Wrong Answer"),o.setState({wrong:n+1})),console.log(o.state.correct,o.state.wrong),o.changeNext()},o.timer=function(){var t=o.state.timer;return o.setState({timer:t-1}),t},o.state={questions:b,qNO:1,correct:0,wrong:0,timer:60,showResult:!1},o}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"quiz_Container",children:[Object(p.jsx)("h1",{children:"Question"}),Object(p.jsx)(m.a,{theme:"colored"}),Object(p.jsxs)("div",{className:"question_container",children:[Object(p.jsxs)("p",{children:[this.state.qNO," of 15"]}),Object(p.jsx)("p",{children:this.state.questions[this.state.qNO-1].question}),Object(p.jsx)("div",{className:"timer"})]}),Object(p.jsxs)("div",{className:"option_Container",children:[Object(p.jsx)("p",{onClick:function(){return t.checkAns(t.state.questions[t.state.qNO-1].optionA)},className:"options",children:this.state.questions[this.state.qNO-1].optionA}),Object(p.jsx)("p",{onClick:function(){return t.checkAns(t.state.questions[t.state.qNO-1].optionB)},className:"options",children:this.state.questions[this.state.qNO-1].optionB}),Object(p.jsx)("p",{onClick:function(){return t.checkAns(t.state.questions[t.state.qNO-1].optionC)},className:"options",children:this.state.questions[this.state.qNO-1].optionC}),Object(p.jsx)("p",{onClick:function(){return t.checkAns(t.state.questions[t.state.qNO-1].optionD)},className:"options",children:this.state.questions[this.state.qNO-1].optionD})]}),Object(p.jsxs)("div",{className:"button_Container",children:[Object(p.jsx)("button",{className:"prev",onClick:this.changePrev,children:"Previous"}),Object(p.jsx)("button",{onClick:this.changeNext,children:"Next"}),this.state.showResult&&Object(p.jsx)(O.a,{to:{pathname:"/result"}}),Object(p.jsx)(u.b,{to:"/result",children:Object(p.jsx)("button",{onClick:this.quitQuiz,className:"quit",children:"Quit"})})]})]})}}]),n}(o.Component)),q=n(26),N=n.n(q),f=(n(46),function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.details;console.log(t);var e=0;return t.correct>0&&(e=Math.floor(t.correct/15*100)),Object(p.jsxs)("div",{className:"result_Container",children:[Object(p.jsxs)("div",{className:"head",children:[Object(p.jsx)(N.a,{style:{fontSize:120}}),Object(p.jsx)("h3",{children:"Result"})]}),Object(p.jsxs)("div",{className:"body",children:[Object(p.jsx)("p",{className:"h1",children:"You need more practice!"}),Object(p.jsxs)("p",{className:"h2",children:["Your Score is : ",e,"%"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Total number of questions:"}),Object(p.jsx)("p",{children:t.total})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Number of attempted questions:"}),Object(p.jsx)("p",{children:t.attend})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Number of correct answers:"}),Object(p.jsx)("p",{children:t.correct})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Number of wrong answers:"}),Object(p.jsx)("p",{children:t.wrong})]})]}),Object(p.jsxs)("div",{className:"bottom",children:[Object(p.jsx)(u.b,{to:"/quiz",children:Object(p.jsx)("button",{className:"play",children:" Play Again"})}),Object(p.jsx)(u.b,{to:"/",children:Object(p.jsx)("button",{className:"home",children:"Back to Home"})})]})]})}}]),n}(o.Component)),v=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).changeState=function(e){var n=e.correct,o=e.wrong;t.setState({correct:n,wrong:o,attend:n+o})},t.state={total:15,attend:15,correct:0,wrong:0},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=Object(p.jsx)(u.a,{children:Object(p.jsxs)(O.d,{children:[Object(p.jsx)(O.b,{exact:!0,path:"/",children:Object(p.jsx)(d,{})}),Object(p.jsx)(O.b,{path:"/quiz",children:Object(p.jsx)(x,{crtDetail:function(e){return t.changeState(e)}})}),Object(p.jsx)(O.b,{path:"/result",children:Object(p.jsx)(f,{details:this.state})})]})});return Object(p.jsx)("div",{className:"App",children:e})}}]),n}(o.Component);a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.819ec41d.chunk.js.map