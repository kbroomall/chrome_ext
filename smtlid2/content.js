var url = chrome.extension.getURL('toolbar.html');
var height = '35px';
var color = 'orange';
var iframe = "<div id='iframeWrapper' class='drag'><iframe src='"+url+"' id='customToolbar09817234' class='drag' style ='height:"+height+"'></iframe></div>"
$('body').append(iframe);


  $('.drag').draggable();


setTimeout(function(){
  if (document.getElementById("leadid_token") === null){
    var noToken = "No Token found. Try LeadiD.token" + "<br><br><br><br>"
    chrome.runtime.sendMessage(noToken);
  }else if(document.getElementById("leadid_token").value === ""){
    var emptyValue = "leadid_token has no value." + "<br><br><br><br>"
    chrome.runtime.sendMessage(emptyValue);
  }else{
    var getGuid = document.getElementById("leadid_token").value + "<br><br><br><br>";
    chrome.runtime.sendMessage(getGuid);
  }
}, 5000);
