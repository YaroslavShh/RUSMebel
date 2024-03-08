const openPopupBtn = document.getElementById("main__btn");
const openPopupBtnisMenu = document.getElementById("menuListBtn");
const popupCloseBtn = document.getElementById("popupClose");
const popup = document.getElementById("popup");
const menuCloseBtn = document.getElementById("menuClose");
const headerMenu = document.getElementById("headerMenu");
const menuOpenBtn = document.getElementById("headerMenuBurger");

const universalFunc = (block) => block.style.top === "-100%" ? block.style.top = "0" : block.style.top = "-100%";

openPopupBtn.addEventListener("click", () => universalFunc(popup));
openPopupBtnisMenu.addEventListener("click", () => universalFunc(popup));
popupCloseBtn.addEventListener("click",() =>  universalFunc(popup))
menuOpenBtn.addEventListener("click", () => universalFunc(headerMenu))
menuCloseBtn.addEventListener("click", () => universalFunc(headerMenu))
