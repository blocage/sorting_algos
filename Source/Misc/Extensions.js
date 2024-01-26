

const Element = HTMLElement.prototype;


Element.visible = function (state) {
    this.classList[state ? 'add' : 'remove']('d-none');
}

Element.show = function () {
    this.classList.remove('d-none');
}

Element.hide = function () {
    this.classList.add('d-none');
}


Element.enable = function () {
    this.disabled = false;
}

Element.disable = function () {
    this.disabled = true;
}


Element.swapTextWith = function (other) {
    [this.innerText, other.innerText] =
        [other.innerText, this.innerText];
}
