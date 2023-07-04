function creativity() {
    let c_text_div = document.getElementById('c_text_div');
    let c_text_div_sec = c_text_div.innerText;
    let length = c_text_div_sec.length;
    c_text_div.innerText="_";
    let outTime = 250;
    setTimeout(function() {
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.1)+"_");outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.3));outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.4)+"_");outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.6));outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.6)+"_");outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.8)+"x");outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.8)+"x_");outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.7));outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.8)+"_");outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.7));outTime+=250;
        setTimeout(run, outTime,c_text_div_sec.substring(0,length*0.8)+"_");outTime+=250;
        setTimeout(run, outTime,c_text_div_sec);outTime+=250;
        setTimeout(run, outTime,c_text_div_sec+"_" );outTime+=250;
        setTimeout(run, outTime,c_text_div_sec);outTime+=250;
        setTimeout(run, outTime,c_text_div_sec+"_" );outTime+=250;
        setTimeout(run, outTime,c_text_div_sec);outTime+=250;
        setTimeout(run, outTime,c_text_div_sec+"_" );outTime+=250;
        setTimeout(run, outTime,c_text_div_sec);outTime+=250;
        setTimeout(run, outTime,c_text_div_sec+"_" );outTime+=250;
        setTimeout(run, outTime,c_text_div_sec);outTime+=250;
        setTimeout(run, outTime,c_text_div_sec+"_" );outTime+=250;
        setTimeout(run, outTime,c_text_div_sec);outTime+=250;
        setTimeout(run, outTime,c_text_div_sec+"_" );outTime+=250;
        setTimeout(run, outTime,c_text_div_sec);outTime+=250;
    }, 5000);
}
function  run(str) {
    let c_text_div = document.getElementById('c_text_div');
    c_text_div.innerText = str
}
