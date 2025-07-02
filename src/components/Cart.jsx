import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import CartContext from '../context/CartContext'
import Modal from './Modal'
import Button from './Button'
import Text from './Text'

function Cart() {

  const { countProducts, totalQuantity, resetCart } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)

  const totalAmount = countProducts.reduce( 
    (acc, prod) => acc + prod.quantity * prod.product.amount, 0
  )

  return (
    <>
      <div className='cart__container' role="button" onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faShoppingCart} size="xl" />
          <div className='cart__badge'>
              <span>{totalQuantity}</span>
          </div>
      </div>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} >
        <div className='p-16'>
          <Text as="h2" text="Tus productos seleccionados" />
          {
            countProducts.map(
              product => 
                <div key={product.product.id} className='d-flex align-center justify-between p-16'>
                  <Text as="h3" text={product.product.name} className="m-0"/>
                  <Text as="span" text={product.quantity}/>
                  <Text as="b" text={`$ ${product.product.amount}`}/>
                </div>
            )
          }
          <div className='d-flex align-center justify-between p-16'>
            <Text as="p" text="Total:" />
            <Text as="b" text={`$ ${totalAmount}`}/>
          </div>
          <div className='d-flex align-center justify-between'>
            <Button label={"Cerrar"} onClick={() => setShowModal(false)} color="primary" variant='outline'/>
            <Button 
              label={"Finalizar"}
              onClick={() => {
                setShowModal(false)
                alert("Felicitaciones, tu pedido esta en camino.")
                resetCart()
              }} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Cart