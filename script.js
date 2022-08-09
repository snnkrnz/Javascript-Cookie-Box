const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");

    acceptBtn.onclick = () => {
        document.cookie = "CookieBy=snnkrnz; max-age="+60*60*24*30; // 1 month

        if (document.cookie){
            cookieBox.classList.add("hide");
        } else {
            alert("Cookie can't be set!");
        }
    }

let checkCookie = document.cookie.indexOf("CookieBy=snnkrnz");
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");