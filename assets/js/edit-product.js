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

    name.value = gi.name
    brand.value = gi.brand
    price.value = gi.price
    imageUrl.value = gi.imageUrl
    description.value = gi.description
})

let saveBtn = document.querySelector('#save-btn')
saveBtn.addEventListener('click', () => {
    let name = document.querySelector('#name').value
    let brand = document.querySelector('#brand').value
    let price = document.querySelector('#price').value
    let imageUrl = document.querySelector('#img-url').value
    let description = document.querySelector('#description').value

    let gi = {
        name,
        description,
        brand,
        imageUrl,
        price
        
    }

    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMThkYzdjMjM5YzAwMTUyZjRjMDciLCJpYXQiOjE3MTgzNjAyODUsImV4cCI6MTcxOTU2OTg4NX0.QgiqPb90Jx43KtNmPBKyP4517Uuis33U5lCLdleCPz0"
                },
                body:JSON.stringify(gi)
            })
            .then(res => res.json())
            .then(res => {
                location.href = 'index.html'
            })
})

let deleteBtn = document.querySelector('#delete-btn')
deleteBtn.addEventListener('click', () => {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMThkYzdjMjM5YzAwMTUyZjRjMDciLCJpYXQiOjE3MTgzNjAyODUsImV4cCI6MTcxOTU2OTg4NX0.QgiqPb90Jx43KtNmPBKyP4517Uuis33U5lCLdleCPz0"
                }
            })
            .then(res => res.json())
            .then(giDeleted => {
                location.href = 'index.html'
            })
})