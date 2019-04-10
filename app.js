let btn = document.querySelector('.elearning');
btn.addEventListener('click', ()=>{
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if((tabs[0].url.includes("elearning.nuk.edu.tw") && tabs[0].url.length <= 29 ) || tabs[0].url.includes("elearning.nuk.edu.tw/default.php")){
            document.querySelector("iframe").contentDocument.querySelector("#form1").submit();
            console.log(tabs[0].url);
            chrome.tabs.update({
                url: "http://elearning.nuk.edu.tw/m_student/m_stu_index.php"
            });
            // chrome.tabs.executeScript(
            //     tabs[0].id,
            //     {code: 
            //     '\
            //     run();\
            //     '
            // });
        }
        else{
            chrome.tabs.create({
                url: "http://elearning.nuk.edu.tw/default.php#ext"
            });
        }
      });
      window.close();
});
