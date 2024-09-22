function palindromeChecker(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
} 
const strInput = document.querySelector(".chekPoly");
const btn = document.querySelector(".chek");

strInput.addEventListener("input", () => {
    if (strInput.value.trim() !== "") {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

const code = document.querySelector(".code")
btn.addEventListener("click", () => {
    event.preventDefault();
    code.style.display="flex";
    const inputValue = strInput.value;
    if (palindromeChecker(inputValue)) {
        alert("Является");
      } else {
        alert("Не является");
      }
});
const inc = document.querySelector(".inc");
const incModal = document.querySelector(".incModal");
inc.addEventListener("mouseover", ()=>{
    incModal.style.display="flex";
})
const nas = document.querySelector(".nas");
const nasModal = document.querySelector(".nasModal");
nas.addEventListener("mouseover", ()=>{
    nasModal.style.display="flex";
})
const pol = document.querySelector(".pol");
const polModal = document.querySelector(".polModal");
pol.addEventListener("mouseover", ()=>{
    polModal.style.display="flex";
})