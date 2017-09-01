// TODO: This is ugly and obviously difficult to maintain. See if we can use
// a regular .css file, or at least something better than a huge string.
// See
const mochaCSS = `@charset "utf-8";#mocha .test .html-error,#mocha
.test pre{float:left;clear:left;word-wrap:break-word}#mocha ul,#mocha-stats
li{list-style:none}#mocha h1,#mocha h2{margin:0}#mocha{font:20px/1.5
"Helvetica Neue",Helvetica,Arial,sans-serif;margin:60px 50px}#mocha
li,#mocha ul{margin:0;padding:0}#mocha .suite,#mocha .test{margin-left:15px}
#mocha h1{margin-top:15px;font-size:1em;font-weight:200}#mocha h1
a{text-decoration:none;color:inherit}#mocha h1
a:hover{text-decoration:underline}#mocha .suite .suite
h1{margin-top:0;font-size:.8em}#mocha .hidden{display:none}#mocha
h2{font-size:12px;font-weight:400;cursor:pointer}#mocha
.test{overflow:hidden}#mocha .test.pending:hover h2::after{content:'(pending)';
font-family:arial,sans-serif}#mocha .test.pass.medium .duration{background:
#c09853}#mocha .test.pass.slow .duration{background:#b94a48}#mocha .test.pass::
before{content:'✓';font-size:12px;display:block;float:left;margin-right:5px;
color:#00d6b2}#mocha .test.pass .duration{font-size:9px;margin-left:5px;
padding:2px 5px;color:#fff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.2);
-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.2);box-shadow:inset 0 1px 1px
rgba(0,0,0,.2);-webkit-border-radius:5px;-moz-border-radius:5px;
-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px}
#mocha .test.pass.fast .duration{display:none}#mocha .test.pending{color:
#0b97c4}#mocha .test.pending::before{content:'◦';color:#0b97c4}#mocha
.test.fail{color:#c00}#mocha .test.fail pre{color:#000}#mocha
.test.fail::before{content:'✖';font-size:12px;display:block;float:left;
margin-right:5px;color:#c00}#mocha .test pre.error{color:#c00;max-height:
300px;overflow:auto}#mocha .test .html-error{overflow:auto;color:#000;
line-height:1.5;display:block;font:12px/1.5 monaco,monospace;margin:5px;
padding:15px;border:1px solid #eee;max-width:85%;max-width:
-webkit-calc(100% - 42px);max-width:-moz-calc(100% - 42px);max-width:
calc(100% - 42px);max-height:300px;border-bottom-color:#ddd;-webkit-box-shadow:
0 1px 3px #eee;-moz-box-shadow:0 1px 3px #eee;box-shadow:0 1px 3px #eee;
-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}
#mocha .test .html-error pre.error{border:none;-webkit-border-radius:0;
-moz-border-radius:0;border-radius:0;-webkit-box-shadow:0;-moz-box-shadow:0;
box-shadow:0;padding:0;margin:18px 0 0;max-height:none}#mocha .test pre{
display:block;font:12px/1.5 monaco,monospace;margin:5px;padding:15px;border:1px
solid #eee;max-width:85%;max-width:-webkit-calc(100% - 42px);max-width:-moz-calc
(100% - 42px);max-width:calc(100% - 42px);border-bottom-color:
#ddd;-webkit-box-shadow:0 1px 3px #eee;-moz-box-shadow:0 1px 3px
#eee;box-shadow:0 1px 3px #eee;-webkit-border-radius:3px;-moz-border-radius:3px;
border-radius:3px}#mocha .test h2{position:relative}#mocha .test a.replay{
position:absolute;top:3px;right:0;text-decoration:none;vertical-align:
middle;display:block;width:15px;height:15px;line-height:15px;text-align:center;
background:#eee;font-size:15px;-webkit-border-radius:15px;-moz-border-radius:
15px;border-radius:15px;-webkit-transition:opacity .2s;-moz-transition:opacity
.2s;-o-transition:opacity .2s;transition:opacity .2s;opacity:.3;color:#888}
#mocha .test:hover a.replay{opacity:1}#mocha-report.fail .test.pass,
#mocha-report.pass .test.fail,#mocha-report.pending .test.fail,
#mocha-report.pending .test.pass{display:none}#mocha-report.pending
.test.pass.pending{display:block}#mocha-error{color:#c00;font-size:1.5em;
font-weight:100;letter-spacing:1px}#mocha-stats{position:fixed;top:15px;right:
10px;font-size:12px;margin:0;color:#888;z-index:1}#mocha-stats
.progress{float:right;padding-top:0;height:auto;-webkit-box-shadow:none;
-moz-box-shadow:none;box-shadow:none;background-color:initial}#mocha-stats em{
color:#000}#mocha-stats a{text-decoration:none;color:inherit}#mocha-stats
a:hover{border-bottom:1px solid #eee}#mocha-stats li{display:inline-block;
margin:0 5px;padding-top:11px}#mocha-stats canvas{width:40px;height:40px}
#mocha code .comment{color:#ddd}#mocha code .init{color:#2f6fad}#mocha code
.string{color:#5890ad}#mocha code .keyword{color:#8a6343}#mocha code
.number{color:#2f6fad}@media screen and (max-device-width:480px){
#mocha{margin:60px 0}#mocha #stats{position:absolute}}
/*# sourceMappingURL=mocha.min.css.map */`;
export default mochaCSS;
