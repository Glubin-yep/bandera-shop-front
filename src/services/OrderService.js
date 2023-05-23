import api from "../http";

export default class OrderService {
    static async getAllOrders() {
        return api.get('/getAllOrders')
    }

    static async getOrderById(orderId) {
        return api.get(`/getOrder/${orderId}`)
    }

    static async createOrder(name, phone, region, city, postoffice, items) {
        return api.post('/addOrder', {
            name, phone, region, city, postoffice, items
        })
    }

    static async updateOrders(orderId, name, phone, region, city, postoffice, items) {
        return api.put(`/updateOrder/${orderId}`, {
            name, phone, region, city, postoffice, items
        })
    }

    static async deleteOrderById(orderId) {
        return api.delete(`/deleteOrder/${orderId}`)
    }
}