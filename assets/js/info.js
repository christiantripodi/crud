let url = new URLSearchParams(location.search)
let id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method:'GET',
    headers:{
        'Content-type':'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMThkYzdjMjM5YzAwMTUyZjRjMDciLCJpYXQiOjE3MTgzNjAyODUsImV4cCI6MTcxOTU2OTg4NX0.QgiqPb90Jx43KtNmPBKyP4517Uuis33U5lCLdleCPz0"
    }
})
.then(res => res.json())
.then(gi => {
    let name = document.querySelector('#name')
    let brand = document.querySelector('#brand')
    let price = document.querySelector('#price')
    let imageUrl = document.querySelector('#img-url')
    let description = document.querySelector('#description')

    name.innerText = gi.name
    brand.innerText = gi.brand
    price.innerText = gi.price + '€'
    imageUrl.src = gi.imageUrl
    description.innerText = gi.description
})