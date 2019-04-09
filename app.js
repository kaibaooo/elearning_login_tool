let btn = document.querySelector('.elearning');
btn.addEventListener('click', ()=>{
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url.split('://')[1];
        
        if(url == "elearning.nuk.edu.tw/default.php"){
            console.log(url);
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 
                '\
                function sleep(ms) {\
                    return new Promise(resolve => setTimeout(resolve, ms));\
                }\
                async function foo(){\
                    if(document.querySelector("iframe").contentDocument.querySelector("#stuid").value == ""){\
                        console.log("reload");\
                        loginForm.contentWindow.location.reload(true);\
                        await sleep(1000);\
                    }\
                    else{\
                        flag = 1;\
                        if(flag){\
                            document.querySelector("iframe").contentDocument.querySelector("#form1").submit();\
                            loginForm.removeEventListener("load", foo);\
                            window.close();\
                        }\
                        console.log("submit");\
                    }\
                }\
                let flag = 0;\
                document.querySelector("#stulogin").click();\
                let loginForm = document.querySelector("#lhgfrm");\
                loginForm.addEventListener("load", foo);\
                '
            });
        }
        else{
            chrome.tabs.onUpdated.addListener(function bar(tabId, changeInfo, tab) {
                if (tab.url.split('://')[1] == "elearning.nuk.edu.tw/default.php" && changeInfo.status == 'complete') {
                    chrome.tabs.executeScript(null, { 
                        code: 
                        '\
                        function sleep(ms) {\
                            return new Promise(resolve => setTimeout(resolve, ms));\
                        }\
                        async function foo(){\
                            if(document.querySelector("iframe").contentDocument.querySelector("#stuid").value == ""){\
                                console.log("reload");\
                                loginForm.contentWindow.location.reload(true);\
                                await sleep(1000);\
                            }\
                            else{\
                                flag = 1;\
                                if(flag){\
                                    document.querySelector("iframe").contentDocument.querySelector("#form1").submit();\
                                    loginForm.removeEventListener("load", foo);\
                                    window.close();\
                                }\
                                console.log("submit");\
                            }\
                        }\
                        let flag = 0;\
                        document.querySelector("#stulogin").click();\
                        let loginForm = document.querySelector("#lhgfrm");\
                        loginForm.addEventListener("load", foo);\
                        '
                    });
                }
                // chrome.tabs.onUpdated.removeListener(bar);
            });
            chrome.tabs.update({
                url: "http://elearning.nuk.edu.tw/default.php"
            });
        }
      });
      //window.close();
});
