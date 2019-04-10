console.log('The extension works');
//document.addEventListener("DOMContentLoaded", run);
if (window.location.hash == "#ext") {
    console.log('run');
    console.log(window.location.hash);
    run();
}
let flag = 0;
let loginForm;
async function run() {
    await console.log(document.body);
    await document.querySelector("#stulogin").click();
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