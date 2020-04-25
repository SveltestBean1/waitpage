const replaceall = (str, rep1, rep2) => {
    return str.split(rep1).join(rep2)
};
let v; let k = window.location.href.includes("?");
if (k) {
    //window.location.href = "https://www.youtube.com/watch?v=5qjnDd1rsII"; //technobladeeeeeeeeee
    v = decodeURI(replaceall(window.location.href.split("?text=")[1], "+", "%20")); //no sanitise input, bad
    eval("$('document').ready(function(){$('form').replaceWith('<h1>'+v+'</h1>')});"); //even badder
}
if (performance.navigation.type == 1) {
    window.location.href = window.location.href.split("?text=")[0]
}
console.log(v);