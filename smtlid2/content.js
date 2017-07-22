var url = chrome.extension.getURL('toolbar.html');
var height = '35px';
var color = 'orange';
var iframe = "<iframe src='"+url+"' id='customToolbar09817234' style ='height:"+height+"'></iframe>"
$('body').append(iframe);

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
}, 4000);
