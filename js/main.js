const burgerIcon = document.querySelector('#burguer')
const navbarMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})


const encodeObject = {
    'a': 'ai',
	'e': 'enter',
	'i': 'imes',
	'o': 'ober',
	'u': 'ufat'
}

const decodeObject = {
    'ai': 'a',
	'enter': 'e',
	'imes': 'i',
	'ober': 'o',
	'ufat': 'u'
}

let text
let filename = 'text.txt'

//função que faz a troca das letras pelo código
function encodeWords(words){
  const reg = /[aeiou]/g
  const encodeString = words.replace(reg, word => encodeObject[word])
  return encodeString
}
//função que faz a troca do código pelas letras
function decodeWords(words){
    const reg = /ai|enter|imes|ober|ufat/g
    const decodeString = words.replace(reg, word => decodeObject[word])
    return decodeString
}
 
async function onCopy(){
    let content = output.value
    await navigator.clipboard.writeText(content)
    output.value = ''
 }

 function download(filename = 'Text.txt', text = output.value){
    let toSaveFileText = document.createElement("a");
    toSaveFileText.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    toSaveFileText.setAttribute('download', filename);


    toSaveFileText.style.display = 'none';
    document.body.appendChild(toSaveFileText);

    toSaveFileText.click();

    document.body.removeChild(toSaveFileText);
    output.value = ''
}


let inputEncode = document.getElementById('textAreaOne')
inputEncode.focus()

let output = document.getElementById('textAreaTwo')


let buttonEncode = document.getElementById('encode')
buttonEncode.addEventListener('click', function(){
    const encodeText = encodeWords(inputEncode.value)
    output.value = encodeText
    inputEncode.value = ''
    inputEncode.focus()
})

let buttonDecode = document.getElementById('decode')
buttonDecode.addEventListener('click', function(){
    const decodeText = decodeWords(inputEncode.value)
    output.value = decodeText
    inputEncode.value = ''
    inputEncode.focus()
})


let buttonCopy = documen.getElementById('copy')
buttonCopy.onclick = onCopy

let buttonDownload = document.getElementById('download')
buttonDownload.onclick = download