import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { render, fireEvent } from '@testing-library/react'
import useProduct from '../components/useProduct'

test('test 1', () => {
  const { result } = renderHook(() => useProduct())

  act(() => {
    result.current.callProducts()
  })

  expect(result.current.loading).toBe(false)

})


/* test('get products', () => {
  const fakeUserResponse = {
    id: '1',
    name: 'abc',
    categoryType: 'cookery', 
    groups: [
      {
        id:'120',
        name: 'prod 1',
        hero: {},
        images: []
      }
    ]
  
  }

  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    })
  })


}) */

