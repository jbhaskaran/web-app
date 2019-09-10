import { useState, useCallback } from 'react'
import ProductService from  '../services/ProductService'

function useProduct() {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const callProducts = async () => {
    setLoading(true)
    try {
      const products = await ProductService.getProducts()
      setResponse(products)
    }
    catch(e) {
      setError('Error loding products...')
    }
    setLoading(false)
  }
  return [{ loading, error, response }, useCallback(callProducts, [])]
}

export default useProduct