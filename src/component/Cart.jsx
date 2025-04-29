import { FiShoppingCart, FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Estado para los productos

  // Ejemplo de función para agregar productos (puedes llamarla desde otros componentes)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <button
        onClick={handleCartClick}
        className="text-black p-2 rounded relative cursor-pointer hover:bg-gray-100"
      >
        <FiShoppingCart />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>
      {showCart && (
        <Cart
          onClose={handleCloseCart}
          items={cartItems}
          setItems={setCartItems}
        />
      )}
    </div>
  );
}

function Cart({ onClose, items, setItems }) {
  const cartRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Funciones para manejar los productos
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calcular subtotal
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50">
      {/* Fondo semitransparente */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={onClose}
      />

      {/* Contenido del carrito */}
      <div
        ref={cartRef}
        className="absolute top-0 right-0 bg-white w-full sm:w-96 h-full flex flex-col"
      >
        {/* Encabezado */}
        <div className="border-b p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Your Cart</h1>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <FiX size={20} />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {items.length === 0
              ? "Add your favorite items to your cart"
              : `You're only $${Math.max(0, 50 - subtotal).toFixed(
                  2
                )} away from free shipping`}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            // Estado cuando el carrito está vacío
            <div className="h-full flex flex-col items-center justify-center text-center">
              <FiShoppingCart size={48} className="text-gray-300 mb-4" />
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">
                Add your favorite items to your cart
              </p>
              <Link
                to="/products" // Cambia esto por la ruta de tu catálogo
                onClick={onClose}
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            // Estado cuando hay productos
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 border rounded-l hover:bg-gray-100"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="px-3 py-1 border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 border rounded-r hover:bg-gray-100"
                      >
                        <FiPlus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con subtotal y botón de checkout */}
        {items.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <button
              className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition"
              onClick={() => {
                // Aquí puedes redirigir al checkout
                console.log("Proceed to checkout");
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
