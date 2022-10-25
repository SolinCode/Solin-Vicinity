(function() {
    var app = "https://script.google.com/macros/s/AKfycbxAd14QKhu5k3GSCdPM-6KSiuttzf_V6TPvR5BfX6gR56tNxo98AC557EPzlCSzzsEl/exec",
        output = '',
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200) {
            try {
                var r = JSON.parse(xhr.responseText),
                    result = r["apartList"];
                for (var i = 0; i < result.length; i++) {
                    var obj = r["apartList"][i];
                    output += obj.join("<br/>") + "<br/><hr/>";
                }
            } catch (e) {}
        }

        function checkStatus(box, num) {
            for (let i = 0; i < 9; i++) {
                a = r["apartList"][i + num].apart
                b = ''
                if (r["apartList"][i + num].cost != 0) {
                    b = r["apartList"][i + num].cost + " АБ"
                }
                box.innerHTML += `
                <div id="content" class="status__box--buy">
                    <div class="status__box--number">${a}</div>
                    <div class="status__box--cost">${b}</div>
                </div>
                `
                content = box.lastElementChild
                if (r["apartList"][i + num].status == "sold") {
                    content.classList.add('red')
                }
                if (r["apartList"][i + num].status == "buy") {
                    content.classList.add('green')
                }
                if (r["apartList"][i + num].status == "booked") {
                    content.classList.add('blue')
                }
            }
        }
        checkStatus(box1, 0)
        checkStatus(box2, 9)
        checkStatus(box3, 18)
    }
    xhr.send()
})()
