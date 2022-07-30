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

        for (let i = 0; i < 9; i++) {
            a = r["apartList"][i].apart
            b = "( " + r["apartList"][i].cost + " АБ )"

            box1.innerHTML += `
            <div id="content" class="ap-box-buy">
                <div class="ap-box-number">${a}</div>
                <div class="ap-box-cost">${b}</div>
            </div>
            `
            content = box1.lastElementChild
            if (r["apartList"][i].status == "sold") {
                content.classList.add('red')
            }
            else {
                content.classList.add('green')
            }
        }

        for (let i = 0; i < 9; i++) {
            a = r["apartList"][i+9].apart
            b = "( " + r["apartList"][i+9].cost + " АБ )"

            box2.innerHTML += `
            <div id="content" class="ap-box-buy">
                <div class="ap-box-number">${a}</div>
                <div class="ap-box-cost">${b}</div>
            </div>
            `
            content = box2.lastElementChild
            if (r["apartList"][i+9].status == "sold") {
                content.classList.add('red')
            }
            else {
                content.classList.add('green')
            }
        }

        for (let i = 0; i < 9; i++) {
            a = r["apartList"][i+18].apart
            b = "( " + r["apartList"][i+18].cost + " АБ )"

            box3.innerHTML += `
            <div id="content" class="ap-box-buy">
                <div class="ap-box-number">${a}</div>
                <div class="ap-box-cost">${b}</div>
            </div>
            `
            content = box3.lastElementChild
            if (r["apartList"][i+18].status == "sold") {
                content.classList.add('red')
            }
            else {
                content.classList.add('green')
            }
        }
    }
    xhr.send()
})()