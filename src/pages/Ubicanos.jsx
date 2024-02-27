import React from 'react';


function Ubicanos() {
  return (
    <>  
        <section className='Ubipage'>
        <div id='ubip1'>
        <h2>Horario</h2>
        <p>Nos puedes visitar en horario ampliado de 12:30 pm a 8 pm de lunes a domingo. Abajo nuestro contacto para cualquier consulta o reservación.</p>
        
        <a href="https://wa.me/c/50664554405" target="_blank">
            <button class="SocialNet-buttom" type="submit" href="../pages/Homepage.jsx"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="110" height="110" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e4692c" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg></button>
            </a>
        </div>

        <div id='ubip2'>
            <img src='../../public/images/DonMooseEspacio.png' alt='Don Moose'></img>
        </div>

        <div id='ubip3'>
            <h2>Dirección</h2>
            <p>Estamos ubicados en San Isidro de Coronado, San José, Costa Rica. 200 metros este y 500 metros norte de la Clínica de Coronado. Si tenes alguna duda abajo puedes encontrar el link con nuestra dirección. </p>
            <a href="https://www.waze.com/live-map/directions?to=ll.9.973032%2C-84.016678" target="_blank">
            <button class="SocialNet-buttom" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-waze" width="110" height="110" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e4692c" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62" />
            <path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54" />
            <path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M16 9h.01" />
            <path d="M11 9h.01" />
            </svg></button>
            </a>
        </div>


        </section>
    </>
  );
}

export default Ubicanos;