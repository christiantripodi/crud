fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method:'GET',
    headers:{
        'Content-type':'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMThkYzdjMjM5YzAwMTUyZjRjMDciLCJpYXQiOjE3MTgzNjAyODUsImV4cCI6MTcxOTU2OTg4NX0.QgiqPb90Jx43KtNmPBKyP4517Uuis33U5lCLdleCPz0"
    }
})
.then(res => res.json())
.then(gis => {
    console.log(gis)
    for(let gi of gis){
        let card = createClone()

        let img = card.querySelector('#img')
        let name = card.querySelector('#name')
        let brand = card.querySelector('#brand')
        let price = card.querySelector('#price')
        let editBtn = card.querySelector('#edit-btn')
        let infoBtn = card.querySelector('#info-btn')

        img.src = gi.imageUrl
        name.innerText = gi.name
        brand.innerText = gi.brand
        price.innerText = gi.price + '€'
        editBtn.href = `edit-product.html?id=${gi._id}`
        infoBtn.href = `info.html?id=${gi._id}`

        document.querySelector('.row').append(card)
    };
})

function createClone(){
    let template = document.querySelector('#card-template')
    let clone = template.content.cloneNode(true)
    return clone
}