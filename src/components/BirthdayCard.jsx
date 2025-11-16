import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BirthdayCard = ({ config }) => {
  const audioRef = useRef(null)
  const videoRef = useRef(null)
  const [audioError, setAudioError] = useState(false)
  const [hearts, setHearts] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  // Get images array or fallback to single imageUrl for backward compatibility
  const images = config.images || (config.imageUrl ? [config.imageUrl] : [])
  const imageChangeInterval = config.imageChangeInterval || 3000
  const displayedImage =
    images.length > 0 ? images[currentImageIndex] : config.imageUrl
  const placeholderImage =
    'https://via.placeholder.com/800x600/FF6B9D/FFFFFF?text=🎂+Happy+Birthday!'
  const heroImage = config.heroImage || displayedImage || placeholderImage
  const activeImage = isStarted
    ? displayedImage || placeholderImage
    : heroImage || placeholderImage

  useEffect(() => {
    if (!isStarted) return

    // Try to play audio
    if (audioRef.current && config.musicUrl) {
      audioRef.current.volume = 0.5
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started
          })
          .catch((error) => {
            // Autoplay was prevented
            console.log('Autoplay prevented:', error)
            setAudioError(true)
          })
      }
    }

    if (videoRef.current && config.videoUrl) {
      videoRef.current.currentTime = 0
      const videoPromise = videoRef.current.play()

      if (videoPromise !== undefined) {
        videoPromise.catch((error) => {
          console.log('Video autoplay prevented:', error)
        })
      }
    }

    // Generate floating hearts
    const heartInterval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          delay: Math.random() * 0.5,
        },
      ])

      // Remove old hearts
      setTimeout(() => {
        setHearts((prev) => prev.slice(1))
      }, 3000)
    }, 500)

    // Image slideshow - change image every few seconds
    let imageInterval = null
    if (images.length > 1) {
      imageInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, imageChangeInterval)
    }

    return () => {
      clearInterval(heartInterval)
      if (imageInterval) {
        clearInterval(imageInterval)
      }
      if (audioRef.current) {
        audioRef.current.pause()
      }
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [config.musicUrl, config.videoUrl, images.length, imageChangeInterval, isStarted])

  const handlePlayMedia = () => {
    if (audioRef.current) {
      const audioPromise = audioRef.current.play()
      if (audioPromise !== undefined) {
        audioPromise
          .then(() => setAudioError(false))
          .catch((error) => {
            console.log('Audio play failed:', error)
            setAudioError(true)
          })
      }
    }

    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch((error) => {
        console.log('Video play failed:', error)
      })
    }
  }

  const handleStart = () => {
    setIsStarted(true)
    handlePlayMedia()
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#14002c] via-[#4c0f6f] to-[#ff4f8b] relative overflow-hidden text-white/90 p-4 md:p-0">
      {/* Background Music */}
      {config.musicUrl && (
        <>
          <audio ref={audioRef} src={config.musicUrl} loop />
          {audioError && (
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handlePlayMedia}
              className="absolute top-4 right-4 bg-white/90 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-50 hover:bg-white transition-colors"
            >
              🔊 Play Music & Video
            </motion.button>
          )}
        </>
      )}

      {/* Floating Hearts Animation */}
      {isStarted && (
        <AnimatePresence>
          {hearts.map((heart) => {
            const startY = typeof window !== 'undefined' ? window.innerHeight : 800
            return (
              <motion.div
                key={heart.id}
                initial={{ opacity: 0, y: startY, x: `${heart.x}%` }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: -100,
                  x: `${heart.x}%`,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  delay: heart.delay,
                  ease: 'easeOut',
                }}
                className="absolute text-4xl"
                style={{ left: `${heart.x}%` }}
              >
                ❤️
              </motion.div>
            )
          })}
        </AnimatePresence>
      )}

      {/* Confetti Effect */}
      {isStarted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF6B9D', '#C7CEEA'][
                  Math.floor(Math.random() * 5)
                ],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (typeof window !== 'undefined' ? window.innerHeight : 800) + 100],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, 360],
                opacity: [1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Card */}
      <div className="min-h-screen flex items-center justify-center p-4 md:p-12 relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-2xl w-full p-6 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

          {/* Birthday Title */}
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6"
          >
            Happy Birthday {config.friendName}! 🎂
          </motion.h1>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="mb-6 rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto"
          >
            <motion.img
              src={activeImage}
              alt="Birthday celebration"
              className="w-full h-72 md:h-96 object-cover"
              onError={(e) => {
                e.target.src = placeholderImage
              }}
              animate={
                isStarted
                  ? { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }
                  : { scale: 1, rotate: 0 }
              }
              transition={{
                duration: 6,
                repeat: isStarted ? Infinity : 0,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed"
          >
            {config.birthdayMessage}
          </motion.p>

          {config.videoUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isStarted ? 1 : 0.5,
                scale: isStarted ? 1 : 0.98,
              }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 150 }}
              className="mb-6 rounded-2xl overflow-hidden shadow-xl max-w-xl mx-auto"
            >
              <motion.div
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <video
                  ref={videoRef}
                  src={config.videoUrl}
                  className="w-full h-64 md:h-80 object-cover"
                  playsInline
                  loop
                  controls={isStarted}
                  muted={config.videoMuted ?? true}
                  poster={activeImage}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Animated Emojis */}
          {isStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-4 text-4xl md:text-5xl"
            >
              {['🎉', '🎈', '🎁', '🎊', '✨'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          )}

          {!isStarted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg"
              onClick={handleStart}
            >
              Get Start
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default BirthdayCard

