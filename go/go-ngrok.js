let goto = document.getElementById("goto");
let check = document.getElementById("check");
let resultText = document.getElementById("res_text");
let resultRedirect = document.getElementById("res_redirect");
let backToMain = true;
const NGROK_URL = "https://almeta-fulvous-twanna.ngrok-free.dev/redirect";

window.onload = () => {
    const params = new URLSearchParams(window.location.search);

    const to = params.get("to");
    if (to !== null) {
        fetch(`${NGROK_URL}/${to}`, { headers: { "ngrok-skip-browser-warning": "true" } })
            .then(res => res.json())
            .then(data => {
                window.location.assign(data.redirect);
            });
    }
    updateCheckBtn();
};

async function getUrlInfo(name) {
    check.innerText = "Looking...";
    const response = await fetch(`${NGROK_URL}/${name}`, { headers: { "ngrok-skip-browser-warning": "true" } });
    backToMain = !response.ok;
    check.innerText = "Check";
    if (response.ok) {
        const data = await response.json();
        resultText.innerText = "";
        resultRedirect.style.display = "block";
        resultRedirect.innerText = data.redirect;
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
    getUrlInfo(goto.value);
});

resultRedirect.addEventListener("click", function () {
    window.location.assign(resultRedirect.innerText);
});
