$(document).ready(function () {
    updateProducts($('.product-container'))

    $('#track-order form').on('submit', function (event) {
        event.preventDefault()
        $.get(`/api/order-service/order/${$('#order-id').val()}`, function (order) {
            if (order.length === 0) {
                alert('Error tracking your order. Empty response. Order with this ID does not exist.')
            } else {
                console.log(order[0])
                alert(`Your order status: ${order[0].status !== 1 ? 'In progress' : 'Closed'}.`)
            }
        }).fail(function () {
            alert('Error tracking your order. Maybe Order Service is down or Order with this ID does not exist.')
        })
    })
})

function updateProducts(productContainer) {
    $.get('/api/product-catalog-service/products', function (products) {
        productContainer.empty()
        for (let i = 0; i < products.length; i++) {
            const product = products[i]
            productContainer.append(
                `
                <div class='product'>
                    <img src='${product.img}' alt='${product.name}'>
                    <h4>${product.name}</h4>
                    <p>${product.price}$</p>
                    <a href='/new-order/${product.id}' class='green-button'>Order Now</a>
                </div>
                `
            )
        }
    }).fail(function () {
        alert('Error loading products. Maybe Product Service is down.')
        productContainer.html('<p>Error loading products. Maybe Product Service is down.</p>')
    })
}