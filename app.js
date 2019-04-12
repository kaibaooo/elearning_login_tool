let btn = document.querySelector('.elearning');
btn.addEventListener('click', ()=>{
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if((tabs[0].url.includes("elearning.nuk.edu.tw") && tabs[0].url.length <= 29 ) || tabs[0].url.includes("elearning.nuk.edu.tw/default.php")){
            console.log(tabs[0].url);
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 
                '\
                spec();\
                async function spec(){\
                    let newFrame = document.createElement("iframe");\
                    newFrame.src="http://elearning.nuk.edu.tw/login_page_2.php";\
                    document.body.appendChild(newFrame);\
                    document.querySelector("iframe").contentWindow.location.href = "http://elearning.nuk.edu.tw/login_page_2.php";\
                    document.querySelector("iframe").contentDocument.querySelector("#form1").submit();\
                }\
                '
            });
        }
        else{
            chrome.tabs.create({
                url: "http://elearning.nuk.edu.tw/default.php#ext"
            });
        }
      });
    //   window.close();
});
