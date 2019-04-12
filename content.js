console.log('The extension works');
//document.addEventListener("DOMContentLoaded", run);
if (window.location.hash == "#ext") {
    console.log('run');
    console.log(window.location.hash);
    spec();
}
let flag = 0;
let loginForm;
async function run() {
    await document.querySelector("#stulogin").click();

    await console.log(document.body);
    loginForm = await document.querySelector("iframe");
    await console.log(loginForm.contentWindow.location);
    await loginForm.contentWindow.location.replace("http://elearning.nuk.edu.tw/login_page_2.php");
    await console.log(loginForm.contentWindow.location);
    await loginForm.contentWindow.addEventListener("load", foo);
    await console.log(loginForm.contentWindow.location);
    await loginForm.contentWindow.location.reload(true);
}
async function foo() {
        await document.querySelector("iframe").contentDocument.querySelector("#form1").submit();
        await console.log("submit");
}
async function spec(){
    let newFrame = document.createElement('iframe');
    newFrame.src="http://elearning.nuk.edu.tw/login_page_2.php";
    document.body.appendChild(newFrame);
    document.querySelector("iframe").contentWindow.location.href = "http://elearning.nuk.edu.tw/login_page_2.php";
    document.querySelector("iframe").contentDocument.querySelector('#form1').submit();
}

