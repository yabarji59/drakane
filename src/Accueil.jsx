 import React, { useState } from 'react'
import Boutons from './Boutons.jsx'
import './App.css'
import './index.css'


function Accueil() {
  const [search, setSearch] = useState('')

  return (
    <div>  
      {}
      <nav>
          <div className="nav-btns">
              <button>accueil</button>
              <button>à propos</button>
          </div>
          <div className="nav-title">
              <h1>DébugSimple</h1>
              <p>Un problème, une solution.</p>
          </div>
          <div className="nav-btns">
              <button>contact</button>
          </div>
      </nav>

      {}
      <div className="main-content">
          <div className="recherche-titre">
              un soucis faite votre recherche
          </div>
          <div className="recherche-zone">
              <input
                  className="recherche-input"
                  type="text"
                  placeholder="ZONE DE RECHERCHE"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
              />
          </div>
          {}
          <Boutons search={search} />
      </div>
    </div>
  )
}

export default Accueil

