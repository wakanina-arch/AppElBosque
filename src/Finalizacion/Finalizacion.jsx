
import React, { useRef } from "react";
import "./Finalizacion.css";
import PaymentForm from "./PaymentForm";


export default function Finalizacion({ carrito }) {
  // El subtotal es la suma de todos los productos del carrito
  const subtotal = carrito.reduce((acc, prod) => acc + (prod.precio || 0), 0);
  const pagoRef = useRef(null);

  const scrollToPago = () => {
    if (pagoRef.current) {
      pagoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="finalizacion-container">
      <h2>Finaliza tu Pedido</h2>
      {/* Bloque 1: Resumen de pedido */}
      <div className="container">
        <div className="card cart">
          <label className="title">RESUMEN DE PEDIDO</label>
          <div className="steps">
            <div className="step">
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.2rem',
                    margin: '0.5rem 0',
                    background: '#f5f5f5',
                    color: '#105652',
                    border: '1.5px solid #b2cfc7',
                    borderRadius: '20px',
                    padding: '0.8rem 1.1rem 0.7rem 1.1rem',
                    boxShadow: '0 2px 8px rgba(16,86,82,0.10)',
                    width: 'fit-content',
                    minWidth: 260
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#105652', marginBottom: 6, letterSpacing: '0.2px' }}>
                    TICKET DE COMPRA
                  </div>
                  {carrito.length === 0 && (
                    <div style={{ color: '#b00', fontWeight: 500, marginBottom: 8 }}>No hay productos en el carrito.</div>
                  )}
                  {carrito.map((prod, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '1rem', marginBottom: 4 }}>
                      <span>{prod.nombre}</span>
                      <span style={{ fontWeight: 600 }}>${prod.precio?.toFixed(2)}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', marginTop: 8 }}>
                    <label className="price small" style={{ fontWeight: 700, fontSize: '1.3rem', color: '#105652', alignSelf: 'flex-end' }}>Total: ${subtotal.toFixed(2)}</label>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <span>METODO DE PAGO</span>
                <p>Visa / Mastercard / Diners</p>
                <p>**** **** **** 4243</p>
              </div>
              <hr />
              <div className="promo">
                <span>¿TIENES UN CÓDIGO PROMOCIONAL?</span>
                <form className="form">
                  <input type="text" placeholder="Ingresa un código promocional" className="input_field" />
                  <button type="button">Aplicar</button>
                </form>
              </div>
              <hr />
              <div className="payments">
                <span>PAGO</span>
                <div className="details">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                  <span>Envío:</span>
                  <span>$10.00</span>
                  <span>Impuestos:</span>
                  <span>$30.40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card checkout">
          <div className="footer">
            <label className="price">${(subtotal + 10 + 30.4).toFixed(2)}</label>
            <button className="checkout-btn" onClick={scrollToPago}>Finalizar Pedido</button>
          </div>
        </div>
      </div>
      {/* Bloque 2: Formulario de pago */}
      <div ref={pagoRef} style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
        <PaymentForm />
      </div>
    </div>
  );
}