function changeFlex(e, t) {
    for (let n = document.querySelectorAll("." + e), l = document.querySelector("#" + t), r = 0; r < n.length; r++)
        n[r].addEventListener("change", function () {
            l.setAttribute("class", "flex-container " + this.value)
        }, !1)
}

function changeItemFlex(e, t) {
    for (let n = document.querySelectorAll("." + e), l = document.querySelector("#" + t), r = 0; r < n.length; r++)
        n[r].addEventListener("change", function () {
            l.setAttribute("class", "item " + this.value)
        }, !1)
}

function changeFlexBasis(e, t) {
    const n = isNaN(e.value) ? 0 : e.value;

    document.querySelector("#" + t).style.WebkitFlexBasis = n + "%"
    document.querySelector("#" + t).style.flexBasis = n + "%"
}

function changeFlexGrow(e, t) {
    const n = isNaN(e.value) ? 0 : e.value;

    document.querySelector("#" + t).style.WebkitFlexGrow = n
    document.querySelector("#" + t).style.flexGrow = n
}

function changeFlexShrink(e, t) {
    const n = isNaN(e.value) ? 0 : e.value;

    document.querySelector("#" + t).style.WebkitFlexShrink = n
    document.querySelector("#" + t).style.flexShrink = n
}

function changeFlexOrder(e, t) {
    const n = isNaN(e.value) ? 0 : e.value;

    document.querySelector("#" + t).style.WebkitOrder = n
    document.querySelector("#" + t).style.order = n
}

function changeAll(e, t, n, l) {
    changeFlexBasis(e, l)
    changeFlexGrow(t, l)
    changeFlexShrink(n, l)
}

for (let items = document.querySelectorAll(".item"), i = 0; i < items.length; i++)
    if (items[i].hasAttribute("data-color"))
        items[i].style.backgroundColor = "#" + items[i].getAttribute("data-color")

for (let flexO = document.querySelectorAll(".flex-order"), o = 0; o < flexO.length; o++) flexO[o].addEventListener("change", function () {
    changeFlexOrder(this, "order" + this.id)
}, !1);

changeFlex("flex-direction", "direction")
changeFlex("flex-wrap", "wrap")
changeFlex("flex-align-items", "align")
changeFlex("justify-content", "justify")
changeFlex("align-content", "alignContent")
changeItemFlex("align-self", "alignSelf");

for (let flexGrow = document.querySelectorAll(".flex-grow"), i = 0; i < flexGrow.length; i++) flexGrow[i].addEventListener("change", function () {
    let e = "item" + this.id;
    changeFlexGrow(this, e)
});
for (let flexShrink = document.querySelectorAll(".flex-shrink"), j = 0; j < flexShrink.length; j++) flexShrink[j].addEventListener("change", function () {
    let e = "item" + this.id;
    changeFlexShrink(this, e)
});


const [B1, G1, S1, B2, G2, S2] = ["B1", "G1", "S1", "B2", "G2", "S2"].map(id => document.getElementById(id));

["B1", "G1", "S1"].forEach(id => {
    document.getElementById(id).addEventListener("change", function () {
        changeAll(B1, G1, S1, "item1")
    })
});

["B2", "G2", "S2"].forEach(id => {
    document.getElementById(id).addEventListener("change", function () {
        changeAll(B2, G2, S2, "item2")
    })
})