// load the input URL to thr input_url textArea
// document.getElementById('input_url').innerHTML = window.location.href;
runTxtAreaCode();

// set the onClicke to run the code in the code editor
function runTxtAreaCode() {
  // Send Google Analytics - Run Script Successful
  gtag('event', 'RunScript', {
    event_category: 'SmartScriptQrCode',
    event_label: 'Success',
  });

  var oneLinkURL = 'https://gauss.onelink.me/tXCz';
  var mediaSource = { keys: ['utm_source'], defaultValue: 'undefined' };
  var campaign = { keys: ['utm_campaign'], defaultValue: 'undefined' };
  var afSub1 = { keys: ['utm_medium'] };
  var custom_ss_ui = { paramKey: 'af_ss_ui', defaultValue: 'true' };

  //Function is embedded on the window object in a global parameter called window.AF_SMART_SCRIPT.
  //Onelink URL is generated
  var result = window.AF_SMART_SCRIPT.generateOneLinkURL({
    oneLinkURL: oneLinkURL,
    afParameters: {
      mediaSource: mediaSource,
      campaign: campaign,
      afSub1: afSub1,
      afCustom: [custom_ss_ui],
    },
  });

  var result_url = 'No output from script';
  if (result) {
    result_url = result.clickURL;
    document.getElementById('andrd_link').setAttribute('href', result_url);
    document.getElementById('ios_link').setAttribute('href', result_url);
    window.AF_SMART_SCRIPT.displayQrCode('my_qr_code_div_id');
    //The size of the QR code is defined in the CSS file under #my_qr_code_div_id
    // #my_qr_code_div_id canvas {
    //  height: 200px;
    //  width: 200px;
    //}
  }
  console.log(result_url)
}
