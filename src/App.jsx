import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import BirthdayCard from './components/BirthdayCard'

// Configuration - Customize these values
const CONFIG = {
  friendName: 'Foram ', // Birthday girl's name
  birthdayMessage: 'Wishing you the most beautiful birthday filled with love, laughter, and endless joy! May this special day bring you countless smiles and wonderful memories. You deserve all the happiness in the world! 🎂✨',
  // Add multiple images - they will change automatically every few seconds
  heroImage: '/images/foram-00-ethnic-wall.jpg',
  images: [
    '/images/foram-01-ethnic-wall.png',
    '/images/foram-02-temple-arms.png',
    '/images/foram-03-temple-spin.png',
    '/images/foram-04-closeup.png',
    '/images/foram-05-garden-front.png',
    '/images/foram-06-garden-side.png',
    '/images/foram-07-city-car.png',
  ],
  imageChangeInterval: 3000, // Change image every 3 seconds (3000ms)
  musicUrl: '/images/my-birthday-track.mp3', // Replace with /your-track.mp3 if you add a file to public/
}

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {!isOpen ? (
        <WelcomeScreen onOpen={handleOpen} />
      ) : (
        <BirthdayCard config={CONFIG} />
      )}
    </div>
  )
}

export default App

