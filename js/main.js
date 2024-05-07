
// Document
// https://github.com/sparksuite/simplemde-markdown-editor

const simplemde = new SimpleMDE({
    element: document.getElementById("editor"),
    spellChecker: false,
    showIcons: ["code", "table"],
});


// simplemde.toTextArea();



// HTML Previewへマークダウンする関数
function drawPreview() {
    const html = SimpleMDE.prototype.markdown(simplemde.value());  //markdownの引数に入れたものをhtmlとして出力する
    document.getElementById("preview").innerHTML = html;
};

// 入力するたびに、アロー関数でdrawPreview関数を発動させる
document.addEventListener("input", () => {
    drawPreview();
    // console.log(simplemde.value());
});


// ハンバーガーメニュー（activeというクラスを作成）
$(function () {
    $('.hamburger').click(function () {
        $('.hamburger, .slide-menu').toggleClass('active');
    });
});
