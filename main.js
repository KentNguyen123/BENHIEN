//2000x3200 size ảnh

let products = {
    data: [{
            name: "An Nhiên (Trà Xanh)",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Thanh Khiết (Trà xanh-sen)",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Tinh Khôi (Trà xanh-lài)",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Thanh Xuân (Hồng Trà)",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Nồng nàn (Oolong)",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Tinh tế (Oolong-Thiết Quan Âm)",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Bình Yên (Matcha)",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Lục Trà Đào",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Lục Trà Sen",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Lục Trà Lài",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Lục Trà Vải Lài",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Hồng Trà Vải",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Hồng Trà Mãng Cầu",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Trà Oolong Nhiệt Đới",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Topping Thạch Đào",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Topping Thạch Dừa",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Topping Thạch Cà phê",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Topping Trân Châu Đen",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Topping Trân Châu Trắng",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },

        {
            name: "Topping Sương Sáo",
            price: "30.000đ",
            image: "image/kemHaiVi.jpg"
        },




       
    ]
}

for (let item of products.data) {
    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("imgContainer")

    let image = document.createElement("img")
    image.setAttribute("src", item["image"])
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = item["name"].toUpperCase();
    card.appendChild(name)

    let price = document.createElement("h6")
    price.classList.add("price")
    price.innerText = "$" + item["price"]
    card.appendChild(price)

    document.getElementById("products").appendChild(card)
}


document.getElementById("search-input").addEventListener('input', () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let cards = document.querySelectorAll(".card");
    let productsName = document.querySelectorAll(".product-name");
    let prices = document.querySelectorAll(".price");

    productsName.forEach((items, index) => {
        if (items.innerText.includes(searchInput)) {
            cards[index].classList.remove("hidden");
        } else {
            cards[index].classList.add("hidden");
        }
    });
})

