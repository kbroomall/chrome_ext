console.log("toolbar.js");


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  document.write("<style>body{color:orange;margin:10px;overflow:hidden;font-family: 'Ubuntu Mono', monospace;}#content2342422{text-align:center;vertical-align:middle;}</style>" + "<div id='content2342422'>" + response + "</div>");
});
