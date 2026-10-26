const input = document.getElementById('entrada');
const button = document.getElementById('gerar');
const qrcode = document.getElementById('qrcode');

entrada.addEventListener('click',gerar)

function gerar(){
    texto = input.value;
    qrcode.innerHTML = "";
    new QRCode(qrcode, {
        text: texto,
        width: 300,
        height: 300,
})}