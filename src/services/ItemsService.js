import api from "../http";

export default class AuthService {
    static async getAllProducts() {
        return api.get('/getAll')
    }

    static async getProductByName(productType, productName) {
        return api.get(`/get/${productType}/${productName}`)
    }

    static async getProductsByCategory(category) {
        return api.get(`/category/${category}`)
    }

    static async addProduct(productData) {
        return api.post('/addProduct', productData)
    }

    static async updateProduct(name, shortDescription, fullDescription, availableSizes, price, photo, category) {
        return api.post('/updateProduct', {
            name,
            shortDescription,
            fullDescription,
            availableSizes,
            price,
            photo,
            category,
        })
    }

    static async deleteProductById(category, id) {
        return api.post('/deleteProduct', { category, id })
    }
}