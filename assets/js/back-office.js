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

    fetch('https://striveschool-api.herokuapp.com/api/product/',{
                method:'POST',
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