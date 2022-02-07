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

let showImg = document.querySelector("section .container .prodact > img[alt='prodact']");

showImg.addEventListener("click", function(e) {
    let prodactClone = showImg.parentElement.cloneNode(true);
    let section = document.querySelector("section");
    let imgclose = document.createElement("img");
    imgclose.src = `../images/icon-close.svg`;
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
});

let listLis = document.querySelectorAll("section .container .prodact figcaption > img");

listLis.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        let imgProdact = document.querySelector("section .container .prodact > img[alt='prodact']");
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
    })
})