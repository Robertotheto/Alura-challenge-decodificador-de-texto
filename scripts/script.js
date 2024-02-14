const texto_Input = document.getElementById('enter-input');
const texto_Output = document.getElementById('output');
const texto_Copy = document.getElementById('copy');
const image_Hidden = document.getElementById('search-logo');
const texto_Hidden = document.getElementById('details-description');

texto_Input.addEventListener('input', function() {
    const texto = texto_Input.value;
    if (texto.trim() === '') {
        image_Hidden.removeAttribute('hidden');
        texto_Hidden.removeAttribute('hidden');
        texto_Output.setAttribute('hidden', true);
        texto_Copy.setAttribute('hidden', true);
    } else {
        image_Hidden.setAttribute('hidden', true);
        texto_Hidden.setAttribute('hidden', true);
        texto_Output.removeAttribute('hidden');
        texto_Copy.removeAttribute('hidden');
    }
});

function Criptografar() {
    const texto = texto_Input.value;
    const textoCriptografado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    
    texto_Output.value = textoCriptografado;
}
function Copiar() {
    texto_Output.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}
function Descriptografar(){
    const texto = texto_Input.value;
    const textoDescriptografado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    image_Hidden.setAttribute('hidden', true);
    texto_Hidden.setAttribute('hidden', true);
    texto_Output.removeAttribute('hidden');
    texto_Copy.removeAttribute('hidden');
    
    texto_Output.value = textoDescriptografado;
}