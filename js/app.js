
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        const productsContainer = document.getElementById('products-container')
        products.forEach(product => {
            const productElement = document.createElement('div')
            productElement.classList.add('product')

            productElement.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description.substring(0, 100)}...</p>
        <p><strong>Price:</strong> $${product.price}</p>
        `;

            productsContainer.appendChild(productElement);
        })
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error)
    })