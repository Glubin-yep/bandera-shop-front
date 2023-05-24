import api from "../http";

export default class AuthService {
    static async getAllProducts() {
        return api.get('/getAll')
    }

    static async getProductById(productType, productId) {
        return api.get(`/get/${productType}/${productId}`)
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

    static async sendStatusTransactionOnEmail() {
        return api.get(`/sendEmail`)
    }
}