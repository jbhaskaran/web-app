// import axios from 'axios'

class ProductService {

  async getProducts() {
    // const url = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
    // const response = await axios.get(url)
    
    // doing this, not sure if CORS set on server
    const response = await import('./products.json')
    const products = response.default.groups
    return products
  }
}

export default new ProductService()