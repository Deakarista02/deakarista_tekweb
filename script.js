function calculate() {
    const operation = document.getElementById('operation').value;
    const resultText = document.getElementById('result');
    
    let result = 0;

    switch (operation) {
        case 'fibonacci':
            const n = parseInt(document.getElementById('fibonacciInput').value);

            if (isNaN(n)) {
                alert('Masukkan angka yang valid.');
                return;
            }

            if (n <= 1) {
                result = n;
            } else {
                let a = 0;
                let b = 1;
                for (let i = 2; i <= n; i++) {
                    result = a + b;
                    a = b;
                    b = result;
                }
            }
            break;

        case 'volumeKubus':
            const sisi1 = parseFloat(document.getElementById('kubussisi1').value);
            const sisi2 = parseFloat(document.getElementById('kubussisi2').value);
            const sisi3 = parseFloat(document.getElementById('kubussisi3').value);

            if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
                alert('Masukkan angka yang valid untuk sisi-sisi pada kubus.');
                return;
            }

            result = sisi1 * sisi2 * sisi3;
            break;

        case 'volumeBalok':
            const panjang = parseFloat(document.getElementById('balokPanjang').value);
            const lebar = parseFloat(document.getElementById('balokLebar').value);
            const tinggi = parseFloat(document.getElementById('balokTinggi').value);
            
            if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi)) {
                alert('Masukkan angka yang valid untuk panjang, lebar, dan tinggi balok.');
                return;
            }
            
                result = panjang * lebar * tinggi;
                break;
    case 'volumeBola':
        const jariJariBola = parseFloat(document.getElementById('bolaJariJari').value);

        if (isNaN(jariJariBola)) {
            alert('Masukkan angka yang valid untuk jari-jari bola.');
            return;
         }
            result = Math.floor((4 / 3) * Math.PI * Math.pow(jariJariBola, 3));
            break;
           
    case 'volumeTabung':
        const jariJariTabung = parseFloat(document.getElementById('tabungJari').value);
        const tinggiTabung = parseFloat(document.getElementById('tabungTinggi').value);

        if (isNaN(jariJariTabung) || isNaN(tinggiTabung)) {
            alert('Masukkan angka yang valid untuk jari-jari dan tinggi tabung.');
            return;
        }
            result = Math.floor(Math.PI * Math.pow(jariJariTabung, 2) * tinggiTabung);
            break;
    }
    
    resultText.textContent = 'Hasil: ' + result;
}
document.getElementById('operation').addEventListener('change', function () {
    const operation = this.value;
    const inputFields = document.getElementsByClassName('input-fields');
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].style.display = 'none';
    }
    document.getElementById(operation + 'Fields').style.display = 'block';
});
