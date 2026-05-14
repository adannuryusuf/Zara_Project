// Import React and useState
import React, { useState } from 'react'
import './products.css'

// Import product images
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'

// WhatsApp phone number (without + sign)
const WHATSAPP_NUMBER = '254794080373'

// Product list - each item has an id, image, name, price and description
const productList = [
  { id: 1, img: product1, name: 'Lavender Oil',    price: 'KES 2,500', desc: 'Lavender, eucalyptus & peppermint blends' },
  { id: 2, img: product2, name: 'Massage Balm',   price: 'KES 3,000', desc: 'Skin-nourishing, non-greasy formula' },
  { id: 3, img: product3, name: 'Aromatherapy Oil',  price: 'KES 15,000', desc: 'Natural essential oil blend for relaxation' },
  { id: 4, img: product4, name: 'Hydrating Serum',       price: 'KES 4,500', desc: 'Moisturizing serum for all skin types' }
]

function Products() {
  // cart is an object where the key is product id and value is quantity
  const [cart, setCart]   = useState({})
  const [toast, setToast] = useState('')

  // Add one of a product to the cart
  function addToCart(product) {
    const currentQty = cart[product.id] || 0
    setCart({ ...cart, [product.id]: currentQty + 1 })
    setToast(product.name + ' added!')
    setTimeout(function() { setToast('') }, 2000)
  }

  // Remove one of a product from the cart
  function removeFromCart(product) {
    const currentQty = cart[product.id] || 0
    if (currentQty <= 1) {
      // Remove the item entirely if qty reaches 0
      const updated = { ...cart }
      delete updated[product.id]
      setCart(updated)
    } else {
      setCart({ ...cart, [product.id]: currentQty - 1 })
    }
  }

  // Count total items in cart
  const totalItems = Object.values(cart).reduce(function(total, qty) {
    return total + qty
  }, 0)

  // Get only the products that are in the cart
  const cartProducts = productList.filter(function(p) {
    return cart[p.id]
  })

  // Open WhatsApp with a pre-written order message
  function orderOnWhatsApp() {
    const lines = cartProducts.map(function(p) {
      return '  • ' + p.name + ' x' + cart[p.id] + '  (' + p.price + ' each)'
    })

    const message =
      'Hi Zara Therapy Clinic! 👋\n\n' +
      'I would like to order the following products:\n\n' +
      lines.join('\n') +
      '\n\nPlease confirm availability. Thank you!'

    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)
    window.open(url, '_blank')
  }

  return (
    <div>
      {/* Product cards grid */}
      <div className='products'>
        {productList.map(function(product) {
          return (
            <div className='product-card' key={product.id}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
              <p className='product-desc'>{product.desc}</p>
              <p className='product-price'>{product.price}</p>

              {/* Show quantity controls if item is in cart, otherwise show Add button */}
              {cart[product.id] ? (
                <div className='qty-controls'>
                  <button className='qty-btn' onClick={() => removeFromCart(product)}>−</button>
                  <span className='qty-count'>{cart[product.id]}</span>
                  <button className='qty-btn' onClick={() => addToCart(product)}>+</button>
                </div>
              ) : (
                <button className='btn' onClick={() => addToCart(product)}>Add to Cart</button>
              )}
            </div>
          )
        })}
      </div>

      {/* Cart bar - only shows when something is in the cart */}
      {totalItems > 0 && (
        <div className='cart-bar'>
          <div className='cart-summary'>
            <strong>🛒 {totalItems} item{totalItems > 1 ? 's' : ''} in cart</strong>
            <span className='cart-items-preview'>
              {cartProducts.map(function(p) { return p.name + ' x' + cart[p.id] }).join(' · ')}
            </span>
          </div>

          {/* WhatsApp order button */}
          <button className='whatsapp-btn' onClick={orderOnWhatsApp}>
            <svg viewBox="0 0 24 24" fill="currentColor" className='wa-icon'>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </button>
        </div>
      )}

      {/* Toast notification */}
      {toast && <div className='product-toast'>✓ {toast}</div>}
    </div>
  )
}

export default Products
