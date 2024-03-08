const openPopupBtn = document.getElementById("main__btn");
const openPopupBtnIsMenu = document.getElementById("menuListBtn");
const popupCloseBtn = document.getElementById("popupClose");
const popup = document.getElementById("popup");
const menuCloseBtn = document.getElementById("menuClose");
const headerMenu = document.getElementById("headerMenu");
const menuOpenBtn = document.getElementById("headerMenuBurger");
const formSubmit = document.getElementById("formSubmit");
const inputText = document.getElementById("inputText");
const inputCheckbox = document.getElementById("inputCheckbox");
const formPrivacy = document.getElementById("formPrivacy");

const openBlock = (block) => block.style.top = "0";
const closeBlock = (block) => block.style.top = "-300%";

openPopupBtn.addEventListener("click", () => openBlock(popup));
openPopupBtnIsMenu.addEventListener("click", () => openBlock(popup));
popupCloseBtn.addEventListener("click",() =>  closeBlock(popup))
menuOpenBtn.addEventListener("click", () => openBlock(headerMenu))
menuCloseBtn.addEventListener("click", () => closeBlock(headerMenu))
formSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    if(inputText.value.trim() !== "" && inputCheckbox.checked) {
        alert("The form has been successfully submitted");
        inputText.value = "";
        inputCheckbox.checked = false;
        inputText.classList.remove("red")
        formPrivacy.style.color = null;
        popup.style.top = "-300%";
        headerMenu.style.top = "-300%";
    } else if (inputText.value.trim() !== "" && inputCheckbox.checked === false) {
        inputText.classList.remove("red")
        formPrivacy.style.color = "red";
    } else if (inputText.value.trim() === "" && inputCheckbox.checked === true){
        inputText.classList.add("red")
        formPrivacy.style.color = null;
    } else {
        inputText.classList.add("red");
        formPrivacy.style.color = "red";
    }
})
