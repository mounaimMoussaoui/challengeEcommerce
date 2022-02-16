let imgCart = document.querySelector("header .container .cart > img.cart");

imgCart.addEventListener("click", function() {
    // imgCart.nextElementSibling.classList.toggle("show");
    let cartContent = document.querySelector("header .container .cart .cart-content");
    cartContent.classList.toggle("show");
});

let navBar = document.querySelector("header .container .navbar > img");

navBar.addEventListener("click", function(e) {
    let listMenu =  document.querySelector("header .container .navbar ul.navList");
    listMenu.classList.toggle("show");
});

function changeImages(selector) {
let listLis = document.querySelectorAll( `${selector} figcaption > img`);

    listLis.forEach((ele) => {
        ele.addEventListener("click", function(e) {
            let imgProdact = document.querySelector(`${selector}  > img[alt='prodact']`);
            if(ele.classList.contains("active")) {
                e.preventDefault();
            } else {
                listLis.forEach((ele) => {
                    ele.classList.remove("active");
                });
                ele.classList.add("active");
                    let src = ele.src;
                    imgProdact.src = `${src.slice(0, src.lastIndexOf("-"))}.jpg`;
            }
        });
    });
}

changeImages("section .container .prodact");

let imgsNavgation = document.querySelectorAll("section .container .prodact > img");
let showImg = document.querySelector("section .container .prodact > img[alt='prodact']");

imgsNavgation.forEach(ele => {
    ele.addEventListener("click", function(e) {
        let prodactSour = showImg.src.slice(-5,-4);
        if(e.target.alt == "icon-previous") {
            if(prodactSour > 1) {
                showImg.src = `images/image-product-${parseInt(prodactSour)  - 1}.jpg`
            }
        } else if(e.target.alt == "icon-next") {
            showImg.src = `images/image-product-${parseInt(prodactSour) + 1}.jpg`
        }
    });
});

showImg.addEventListener("click", function(e) {
    let prodactClone = showImg.parentElement.cloneNode(true);
    let section = document.querySelector("section");
    let imgclose = document.createElement("img");
    imgclose.src = `images/icon-close.svg`;
    imgclose.alt = `icon-close`;
    prodactClone.prepend(imgclose);
    section.classList.add("fixe");
    prodactClone.classList.add("fixe");
    prodactClone.children[4].classList.add("fixe");
    showImg.parentElement.after(prodactClone);
    imgclose.addEventListener("click", function(e) {
        showImg.parentElement.nextElementSibling.remove();
        section.classList.remove("fixe");
        prodactClone.classList.remove("fixe");
    });
changeImages("section .container .prodact.fixe");
});

let imgsNavg = document.querySelectorAll("section .container .info-prodact form fieldset:not(.botton) > img");
imgsNavg.forEach(ele => {
    ele.addEventListener("click", function(e) {
        let input = document.querySelector("section .container .info-prodact form fieldset:not(.botton) > input");
        if(e.target.alt == "icon-minus") {
            parseInt(input.value) > 0 ? input.value = `${parseInt(input.value) - 1}` : input.value = `${0}`;
        } else  if(e.target.alt == "icon-plus") { 
            input.value = `${parseInt(input.value) + 1}`;
        }
    });
});

