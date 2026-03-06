const paragraph = document.getElementById("PAR");

function ChangeFont(font){
    this.addEventListener("change", function(){
        paragraph.style.fontFamily = font;
    });
};

function ChangeAlign(align) {
    this.addEventListener("change", function(){
        paragraph.style.textAlign = align;
    });
};

function ChangeHeight(height){
    this.addEventListener("change", function(){
        paragraph.style.lineHeight = height;
    });
};

function ChangeLSpace(space){
    this.addEventListener("change", function(){
        paragraph.style.letterSpacing = space;
    })
};

function ChangeIndent(indent){
    this.addEventListener("change", function(){
        paragraph.style.textIndent = indent;
    })
};

function ChangeTransform(transform){
    this.addEventListener("change", function(){
        paragraph.style.textTransform = transform;
    })
};

function ChangeDecorate(decorate){
    this.addEventListener("change", function(){
        paragraph.style.textDecoration = decorate;
    })
};

function ChangeBorder(borderType){
    this.addEventListener("change", function(){
        paragraph.style.borderStyle = borderType;
    })
};

function ChangeBorderColor(borderColor){
    this.addEventListener("change", function(){
        paragraph.style.borderColor = borderColor;
    })
};