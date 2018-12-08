function change_builtin(newColor) {
    // DOM要素を取得
    var elem = document.getElementById('para');
    // 要素のテキストを変える（newColorの中はonclickの引数）
    elem.innerText = newColor;
    elem.style.color = newColor;
}
function change_jquery(newColor) {
    var elem = document.getElementById('para');
    elem.innerText = newColor;
    elem.style.color = newColor;
}