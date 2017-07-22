console.log("toolbar.js");


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  document.write("<style>body{color:orange;overflow-y:hidden;margin: 11px 0 0 22px;font-family: 'Ubuntu Mono', monospace;}</style>" + "<div id='content2342422'>" + response + "</div>");
});
