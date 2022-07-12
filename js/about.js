const one = document.querySelector(".toggleOne");
const two = document.querySelector(".toggleTwo");

const removeColor = () => {
  one.classList.remove("colorOrange");
  one.classList.remove("colorGray");
  two.classList.remove("colorOrange");
  two.classList.remove("colorGray");
}

const addColorOne = () => {
  one.classList.add("colorOrange");
  two.classList.add("colorGray");
}

const addColorTwo = () => {
  one.classList.add("colorGray");
  two.classList.add("colorOrange");  
}

const text = {
  title1: "Pessoal",
  text1: "Eu Thais, sou formada na Yale, já viajei o mundo fazendo palestras sobre a psique humana e seus mistérios.Sou Psicoterapeuta, Psicanalista, Psicopedagoga, Especialista em Educação Especial, Especialista em Alienação Parental. Já tratei de todo tipo de caso, de criança birrenta a adoslencente chato.",
  title2: "Profissional",
  text2: "Eu Thais, sou formada na Yale, já viajei o mundo fazendo palestras sobre a psique humana e seus mistérios.Sou Psicoterapeuta, Psicanalista, Psicopedagoga, Especialista em Educação Especial, Especialista em Alienação Parental."
}

const titleChange = document.querySelector(".titleChange");
const textChange = document.querySelector(".textChange");

const addTextOne = () =>{
  titleChange.textContent = text.title1;
  textChange.textContent = text.text1;
}

const addTextTwo = () =>{
  titleChange.textContent = text.title2;
  textChange.textContent = text.text2;
}

one.addEventListener("click", () => {
  removeColor();
  addColorOne();
  addTextOne()
})

two.addEventListener("click", () => {
  removeColor();
  addColorTwo();
  addTextTwo();
})
