import React from 'react'

function ProductPage({params}: {params: {id: string}}) {
  const {id} = params;
  return (
    <div>ProductPage {id}</div>
  )
}

export default ProductPage