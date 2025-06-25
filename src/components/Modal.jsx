import React from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'

function Modal({
    showModal,
    closeModal
}) {
    return (
        showModal ? (
            createPortal(
                <div className='modal__container'>
                    <div className='modal__content'>
                        <h2>Modal Content</h2>
                        <Button label={"Cerrar"} onClick={closeModal}/>
                    </div>
                </div>,
                document.body
            )
        ) : undefined
    )
}

export default Modal