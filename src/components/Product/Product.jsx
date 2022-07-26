import React from 'react'
import Button from '../Button/Button'
import style from './Product.module.css'

const Product = ({ productData }) => {
  const { mockupImg, productContainer, priceContainer, infoContainer } = style
  const { name, image, oldPrice, price, description, installments } = productData

  // console.log(id, name, image, oldPrice, price, description, installments)

  return (
    <div className={productContainer}>
      <img className={mockupImg} src={image}></img>

      <div className={infoContainer}>
        <div>
          <span style={{ fontWeight: '500' }}>{name}</span>
          <p style={{ fontSize: '12px' }}>{description}</p>
        </div>

        <div className={priceContainer}>
          <span>De: R${oldPrice}</span>
          <h4>Por: R${price}</h4>
          <span>ou {installments.count}x de R${installments.value}</span>
        </div>

        <Button type='secondary' text='Comprar' />
      </div>
    </div>
  )
}

export default Product