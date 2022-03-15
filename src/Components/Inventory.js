import React from 'react'

const Inventory = ({ items, removeItem, editItem }) => {
  return (
    <div className='inventory-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='inventory-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
              </button>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default Inventory