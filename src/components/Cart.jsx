import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import CartContext from '../context/CartContext'
import Modal from './Modal'

function Cart() {

  const { totalQuantity } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className='cart__container' role="button" onClick={() => setShowModal(true)}>
          <FontAwesomeIcon icon={faShoppingCart} size="xl" />
          <div className='cart__badge'>
              <span>{totalQuantity}</span>
          </div>
      </div>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
    </>
  )
}

export default Cart