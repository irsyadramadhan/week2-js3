const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// then catch untuk pakai promise
cekHariKerja('kamis')
.then((result) => console.log(`hari ${result}, adalah hari kerja`))
.catch((Error) => console.log(Error))

//then dan catch adalah method untuk menggunakan promise
//then dijalankan bila promise fullfiled/resolve
//catch dijalankan bila promise reject