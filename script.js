function updateFont() {
    const form = document.forms[0];
    const text = form.mainText.value;

    const fonts = [
        form.firstFont, form.secondFont, form.thirdFont, form.fourthFont, form.fifthFont,
        form.sixthFont, form.seventhFont, form.eighthFont, form.ninthFont, form.tenthFont
    ];

    fonts.forEach(font => font.value = text);
}

function updateFontSize(size) {
    const form = document.forms[0];
    const fonts = [
        form.firstFont, form.secondFont, form.thirdFont, form.fourthFont, form.fifthFont,
        form.sixthFont, form.seventhFont, form.eighthFont, form.ninthFont, form.tenthFont
    ];
    fonts.forEach(font => font.style.fontSize = size + "px");
}

function updateColor(color) {
    const form = document.forms[0];
    const fonts = [
        form.firstFont, form.secondFont, form.thirdFont, form.fourthFont, form.fifthFont,
        form.sixthFont, form.seventhFont, form.eighthFont, form.ninthFont, form.tenthFont
    ];

    fonts.forEach(fonts => {
        fonts.style.color = color;
    });
}

function updateUpperCase() {
    const form = document.forms[0];
    const fonts = [
        form.firstFont, form.secondFont, form.thirdFont, form.fourthFont, form.fifthFont,
        form.sixthFont, form.seventhFont, form.eighthFont, form.ninthFont, form.tenthFont
    ];

    fonts.forEach(font => {
        font.style.textTransform = form.uppercase.checked ? "uppercase" : "none";
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms[0];
    form.mainText.addEventListener('input', updateFont);
    updateFont();

    document.getElementById("fontColor").addEventListener("input", e => updateColor(e.target.value));

    document.getElementById("fontSize").addEventListener("input", e => updateFontSize(e.target.value));

});

