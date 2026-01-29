let goto = document.getElementById("goto");
let check = document.getElementById("check");
let resultText = document.getElementById("res_text");
let resultRedirect = document.getElementById("res_redirect");
let backToMain = true;
function goes(name) {
    const dict = {
        rick: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        change: "https://www.youtube.com/watch?v=Dh2G_BDZJHI&t",
        bidet: "https://twitch.tv/shoomimi",
    }
    if (name in dict) {
        return dict[name];
    }
    return "https://danew9c.com";
}

window.onload = () => {
    const params = new URLSearchParams(window.location.search);

    const to = params.get("to");
    if (to !== null) {
        window.location.assign(goes(to));
    }
    updateCheckBtn();
};

async function getUrlInfo(name) {
    check.innerText = "Looking...";
    check.innerText = "Check";
    const res = goes(name);
    if (res != "https://danew9c.com") {
        resultText.innerText = "";
        resultRedirect.style.display = "block";
        resultRedirect.innerText = res;
    } else {
        resultText.innerText = "nowhere";
        resultRedirect.style.display = "none";
    }
}

function updateCheckBtn() {
    resultText.innerText = "?";
    resultRedirect.style.display = "none";
    if (goto.value === "") {
        check.innerText = "Back to My Page";
        check.className = "back";
    }
    else {
        check.innerText = "Check";
        check.className = "";
    }
}

goto.addEventListener("input", updateCheckBtn);

goto.addEventListener("change", (event) => {
    getUrlInfo(goto.value);
});

check.addEventListener("click", function () {
    if (check.innerText == "Back to My Page") {
        window.location.assign("https://danew9c.com");
    }
    else {
        getUrlInfo(goto.value);
    }
});

resultRedirect.addEventListener("click", function () {
    window.location.assign(resultRedirect.innerText);
});
