// program 1

const cekHariLibur = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weekend = ['sabtu', 'minggu'];
            let test = weekend.find((item) => {
                return item === day
            })
            if(test){
                resolve(test)
            }else{
                reject(new Error('Hari ini bukan hari libur'))
            }
        }, 1000)
    })
}

cekHariLibur('kamis')
.then((result) => console.log(`hari ${result}, adalah hari libur`))
.catch((Error) => console.log(Error));

// program 2

// const cekBilanganGenap = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(num % 2 === 0){
//                 resolve(num);
//             }else{
//                 reject(new Error('Ini bukan bilangan genap yaa'))
//             }
//         }, 1000)
//     })
// }

// cekBilanganGenap(2)
// .then((result) => console.log(`bilangan ${result}, adalah benar bilangan genap`))
// .catch((Error) => console.log(Error));