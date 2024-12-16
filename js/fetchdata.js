let getImg1 = document.getElementById('imgSetter_1');
fetch('https://dummyjson.com/products/18')
    .then(res => res.json())
    .then(data => getImg1.src = data.images)

let getImg2 = document.getElementById('imgSetter_2');
fetch('https://dummyjson.com/products/27')
    .then(res => res.json())
    .then(data => getImg2.src = data.images)
    