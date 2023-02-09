//program untuk mengambil semua nama dari api menggunakan fetch()

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(userData) {
    let nameArr = []
    for(i = 0; i < userData.length; i++){
        nameArr.push(userData[i].name);
    }
    console.log(nameArr);
  });