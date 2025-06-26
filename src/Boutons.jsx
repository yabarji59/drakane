import React, { useState } from 'react'
import './index.css'

function Boutons({ search }) {
  const [open, setOpen] = useState(false)
  const [probleme, setProbleme] = useState('')

  const boutons = [
    {
      label: 'PC Lent',
      img: 'https://img.icons8.com/ios-filled/50/000000/monitor.png',
      explication: '🧹 Nettoyage du système\nSupprime les fichiers temporaires :\nWindows : Win + R → tape temp, puis OK → supprime tout.'
    },
    {
      label: 'Pas de wifi',
      img: '/wifi.png',
      explication: `🧰 Réinstalle les pilotes Wi-Fi
Va dans le Gestionnaire de périphériques (Windows) :

Win + X > "Gestionnaire de périphériques" > Carte réseau.

Clique droit sur la carte Wi-Fi > "Mettre à jour le pilote" ou "Désinstaller" puis redémarre.
`
    },
    {
      label: 'Pas de son',
      img: 'https://img.icons8.com/ios-filled/50/000000/speaker.png',
      explication: `🔧 Réinstalle ou mets à jour le pilote audio
Windows :

Win + X > Gestionnaire de périphériques > "Contrôleurs audio".

Clic droit > "Mettre à jour" ou "Désinstaller" puis redémarre.
`
    },
    {
      label: 'antivirus',
      img: '/antivirus.png',
      explication: '🛡️ Installe ou mets à jour un antivirus fiable pour protéger ton PC contre les virus.'
    },
    {
      label: 'problème windows',
      img: 'https://img.icons8.com/ios-filled/50/000000/windows8.png',
      explication: '🪟 Redémarre ton PC ou utilise la restauration du système pour corriger les problèmes Windows.'
    },
    {
      label: 'nettoyer son pc',
      img: 'https://img.icons8.com/ios-filled/50/000000/maintenance.png',
      explication: '🧹 Utilise un outil de nettoyage ou supprime les fichiers inutiles pour libérer de l’espace sur ton PC.'
    }
  ]

  // Filtrage selon la recherche
  const boutonsFiltres = boutons.filter(b =>
    b.label.toLowerCase().includes(search.toLowerCase())
  )

  const handleClick = (explication) => {
    setProbleme(explication)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setProbleme('')
  }

  return (
    <div className="problemes-grid">
      {boutonsFiltres.map((b,) => (
        <button className="probleme-btn" key={b.label} onClick={() => handleClick(b.explication)}>
          <img src={b.img} alt={b.label} />
          {b.label}
        </button>
      ))}

      {open && (
        <div style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          border: '9px solid #ccc',
          padding: '20px',
          zIndex: 1000
        }}>
          <pre style={{whiteSpace: 'pre-wrap', margin: 0}}>{probleme}</pre>
          <button onClick={handleClose}>Fermer</button>
        </div>
      )}
    </div>
  )
}

export default Boutons