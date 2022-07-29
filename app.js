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

        r["apartList"][0].status != "sold" ? a1.classList.add('green') : a1.classList.add("red")
        r["apartList"][1].status != "sold" ? a4.classList.add('green') : a4.classList.add("red")
        r["apartList"][2].status != "sold" ? a7.classList.add('green') : a7.classList.add("red")
        r["apartList"][3].status != "sold" ? a2.classList.add('green') : a2.classList.add("red")
        r["apartList"][4].status != "sold" ? a5.classList.add('green') : a5.classList.add("red")
        r["apartList"][5].status != "sold" ? a8.classList.add('green') : a8.classList.add("red")
        r["apartList"][6].status != "sold" ? a3.classList.add('green') : a3.classList.add("red")
        r["apartList"][7].status != "sold" ? a6.classList.add('green') : a6.classList.add("red")
        r["apartList"][8].status != "sold" ? a9.classList.add('green') : a9.classList.add("red")

        r["apartList"][0+9].status != "sold" ? a10.classList.add('green') : a10.classList.add("red")
        r["apartList"][1+9].status != "sold" ? a13.classList.add('green') : a13.classList.add("red")
        r["apartList"][2+9].status != "sold" ? a16.classList.add('green') : a16.classList.add("red")
        r["apartList"][3+9].status != "sold" ? a11.classList.add('green') : a11.classList.add("red")
        r["apartList"][4+9].status != "sold" ? a14.classList.add('green') : a14.classList.add("red")
        r["apartList"][5+9].status != "sold" ? a17.classList.add('green') : a17.classList.add("red")
        r["apartList"][6+9].status != "sold" ? a12.classList.add('green') : a12.classList.add("red")
        r["apartList"][7+9].status != "sold" ? a15.classList.add('green') : a15.classList.add("red")
        r["apartList"][8+9].status != "sold" ? a18.classList.add('green') : a18.classList.add("red")

        r["apartList"][0+18].status != "sold" ? a19.classList.add('green') : a19.classList.add("red")
        r["apartList"][1+18].status != "sold" ? a22.classList.add('green') : a22.classList.add("red")
        r["apartList"][2+18].status != "sold" ? a25.classList.add('green') : a25.classList.add("red")
        r["apartList"][3+18].status != "sold" ? a20.classList.add('green') : a20.classList.add("red")
        r["apartList"][4+18].status != "sold" ? a23.classList.add('green') : a23.classList.add("red")
        r["apartList"][5+18].status != "sold" ? a26.classList.add('green') : a26.classList.add("red")
        r["apartList"][6+18].status != "sold" ? a21.classList.add('green') : a21.classList.add("red")
        r["apartList"][7+18].status != "sold" ? a24.classList.add('green') : a24.classList.add("red")
        r["apartList"][8+18].status != "sold" ? a27.classList.add('green') : a27.classList.add("red")

// -------------------------------------------------------------------------------------------------------------------------

        number1.innerHTML = r["apartList"][0].apart; cost1.innerHTML = "( " + r["apartList"][0].cost + " АБ )"
        number4.innerHTML = r["apartList"][1].apart; cost4.innerHTML = "( " + r["apartList"][1].cost + " АБ )"
        number7.innerHTML = r["apartList"][2].apart; cost7.innerHTML = "( " + r["apartList"][2].cost + " АБ )"
        number2.innerHTML = r["apartList"][3].apart; cost2.innerHTML = "( " + r["apartList"][3].cost + " АБ )"
        number5.innerHTML = r["apartList"][4].apart; cost5.innerHTML = "( " + r["apartList"][4].cost + " АБ )"
        number8.innerHTML = r["apartList"][5].apart; cost8.innerHTML = "( " + r["apartList"][5].cost + " АБ )"
        number3.innerHTML = r["apartList"][6].apart; cost3.innerHTML = "( " + r["apartList"][6].cost + " АБ )"
        number6.innerHTML = r["apartList"][7].apart; cost6.innerHTML = "( " + r["apartList"][7].cost + " АБ )"
        number9.innerHTML = r["apartList"][8].apart; cost9.innerHTML = "( " + r["apartList"][8].cost + " АБ )"

        number10.innerHTML = r["apartList"][0+9].apart; cost10.innerHTML = "( " + r["apartList"][0+9].cost + " АБ )"
        number13.innerHTML = r["apartList"][1+9].apart; cost13.innerHTML = "( " + r["apartList"][1+9].cost + " АБ )"
        number16.innerHTML = r["apartList"][2+9].apart; cost16.innerHTML = "( " + r["apartList"][2+9].cost + " АБ )"
        number11.innerHTML = r["apartList"][3+9].apart; cost11.innerHTML = "( " + r["apartList"][3+9].cost + " АБ )"
        number14.innerHTML = r["apartList"][4+9].apart; cost14.innerHTML = "( " + r["apartList"][4+9].cost + " АБ )"
        number17.innerHTML = r["apartList"][5+9].apart; cost17.innerHTML = "( " + r["apartList"][5+9].cost + " АБ )"
        number12.innerHTML = r["apartList"][6+9].apart; cost12.innerHTML = "( " + r["apartList"][6+9].cost + " АБ )"
        number15.innerHTML = r["apartList"][7+9].apart; cost15.innerHTML = "( " + r["apartList"][7+9].cost + " АБ )"
        number18.innerHTML = r["apartList"][8+9].apart; cost18.innerHTML = "( " + r["apartList"][8+9].cost + " АБ )"

        number19.innerHTML = r["apartList"][0+18].apart; cost19.innerHTML = "( " + r["apartList"][0+18].cost + " АБ )"
        number22.innerHTML = r["apartList"][1+18].apart; cost22.innerHTML = "( " + r["apartList"][1+18].cost + " АБ )"
        number25.innerHTML = r["apartList"][2+18].apart; cost25.innerHTML = "( " + r["apartList"][2+18].cost + " АБ )"
        number20.innerHTML = r["apartList"][3+18].apart; cost20.innerHTML = "( " + r["apartList"][3+18].cost + " АБ )"
        number23.innerHTML = r["apartList"][4+18].apart; cost23.innerHTML = "( " + r["apartList"][4+18].cost + " АБ )"
        number26.innerHTML = r["apartList"][5+18].apart; cost26.innerHTML = "( " + r["apartList"][5+18].cost + " АБ )"
        number21.innerHTML = r["apartList"][6+18].apart; cost21.innerHTML = "( " + r["apartList"][6+18].cost + " АБ )"
        number24.innerHTML = r["apartList"][7+18].apart; cost24.innerHTML = "( " + r["apartList"][7+18].cost + " АБ )"
        number27.innerHTML = r["apartList"][8+18].apart; cost27.innerHTML = "( " + r["apartList"][8+18].cost + " АБ )"


    }
    xhr.send()
})()