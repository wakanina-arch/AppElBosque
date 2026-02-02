import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CarruselBebidas({ bebidas, onSelect, seleccionada }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={'auto'}
      loop={true}
      centeredSlides={true}
      style={{ width: '100vw', maxWidth: '100vw', padding: '1rem 0' }}
    >
      {bebidas.map((bebida, idx) => (
        <SwiperSlide key={bebida.nombre} style={{ width: 220, maxWidth: 220 }}>
          <div
            className={'bebida-frame' + (seleccionada === idx ? ' selected' : '')}
            onClick={() => onSelect(idx)}
            style={{ cursor: 'pointer' }}
          >
            <span style={{ marginBottom: '0.5rem', color: '#0c0b0b', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>{bebida.nombre}</span>
            <img src={bebida.img} alt={bebida.nombre + ' Bebida'} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
