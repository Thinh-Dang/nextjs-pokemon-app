import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
  
  return (
    <section className='header'>
        <Link href='/'>
            Homepage
        </Link>
        <Link href='/pokemons'>
            PokeDex
        </Link>
    </section>
  )
}

export default Navbar