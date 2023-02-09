const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        if (!error) {
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found'), []);
        }
    }, 4000);
}

// membuat callback function untuk menampilkan semua bulan dengan map()
function cb (param1, param2) {
    let pesan = param1;
    let bulan = param2.map(x);
    console.log(`apa error? ${param1}`);
    console.log(bulan);
};

function x (str) {
    const string = "Bulan "
    return string.concat(str);
}

getMonth(cb);