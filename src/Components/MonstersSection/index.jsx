import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import listOfMonsters from './monsters.json'
import './MonstersSection.css'

const MonstersSection = () => {

  const [monsters, setMonsters] = useState(listOfMonsters);
  const [search, setSearch] = useState('');

    // useEffect(() => {
    //     setMonsters(listOfMonsters.filter((monster) => {
    //         return monster.rango.toLowerCase().includes(search.toLowerCase());
    //     }))
    // }, [search]);

    const filterMonsters = (clase) => {
        const filteredByClass = listOfMonsters.filter((monster) => {
            return monster.clase === clase;
        });
        setMonsters(filteredByClass);
    }

    const filterMonstersBySearch = monsters.filter((monster) => monster.rango.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className='main-section'>
        <h1 className='main-title'>¡Bestiario Halloween!</h1>
        <p className='description'>¡Bienvenido al Bestiario de Halloween! Aquí podrás encontrar a los mounstruos más habilidosos y reconocidos de la zona.</p>
        <input 
        className='search-bar' 
        type="text" 
        value={search} 
        onChange={(event) => setSearch(event.target.value)} 
        placeholder='Buscar mounstruo' />
        <div className='buttons__container'>
            <button className='search-button' onClick={() => setMonsters(listOfMonsters)}>Todos</button>
            <button className='search-button' onClick={() => filterMonsters("vampiro")}>Vampiros</button>
            <button className='search-button' onClick={() => filterMonsters("bruja")}>Brujas</button>
            <button className='search-button' onClick={() => filterMonsters("fantasma")}>Fantasmas</button>
            <button className='search-button' onClick={() => filterMonsters("zombi")}>Zombies</button>
            <button className='search-button' onClick={() => filterMonsters("hombre lobo")}>Hombres Lobo</button>
        </div>
        <div className='monsters-container'>
            {
                filterMonstersBySearch.map((monster) => {
                    return (
                        <Card key={monster.id} clase={monster.clase} rango={monster.rango} apariencia={monster.apariencia} poderes={monster.poderes} img={monster.img} nivel={monster.nivel} descripcion={monster.descripcion} />
                    )
                })
            }
        </div>
    </section>
  )
}

export  { MonstersSection }