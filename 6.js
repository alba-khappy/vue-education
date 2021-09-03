var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: true,
        linkText: "More products like this",
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        variants: [{
                variantId: 2234,
                variantColor: "green",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            },

        ],
        updateProduct(variantImage) {
            this.image = variantImage
        },
        cart: 0,
        methods: {
            addToCart() {
                this.cart += 1
            },
            updateProduct(variantImage) {
                this.image = variantImage
            },
            removeFromCart() {
                this.cart -= 1
            }
        }
    }
})