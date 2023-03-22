import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import FIltroSuperior from '../components/FIltroSuperior';
import Header from '../components/Header'

export default function Home() {
  const [token, setToken] = useState(false);
  let tokens = localStorage.getItem('token');
useEffect(()=> {
  if(tokens){
    setToken(true);
    return
  }
},[tokens])


  return (
    <section className=''>
      <Header setToken={setToken}/>
      <FIltroSuperior/>
      <Cards/>
    </section>
  )
}
