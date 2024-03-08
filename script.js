const openPopupBtn = document.getElementById("main__btn");
const openPopupBtnIsMenu = document.getElementById("menuListBtn");
const popupCloseBtn = document.getElementById("popupClose");
const popup = document.getElementById("popup");
const menuCloseBtn = document.getElementById("menuClose");
const headerMenu = document.getElementById("headerMenu");
const menuOpenBtn = document.getElementById("headerMenuBurger");

const universalFunc = (block) => block.style.top === "-300%" ? block.style.top = "0" : block.style.top = "-300%";

openPopupBtn.addEventListener("click", () => universalFunc(popup));
openPopupBtnIsMenu.addEventListener("click", () => universalFunc(popup));
popupCloseBtn.addEventListener("click",() =>  universalFunc(popup))
menuOpenBtn.addEventListener("click", () => universalFunc(headerMenu))
menuCloseBtn.addEventListener("click", () => universalFunc(headerMenu))
