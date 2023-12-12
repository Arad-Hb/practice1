import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <div className='cardBox'>
      <div className='cardItem'>
      <h1 className='cardName'>{product.name}</h1>
      <h3 className='cardPrice'>{product.price}</h3>
    </div>
    </div>
  )
}

export default ProductsCard
