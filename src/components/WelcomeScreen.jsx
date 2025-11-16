import { motion } from 'framer-motion'

const WelcomeScreen = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const getRandomX = () => typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000
          const getRandomY = () => typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              initial={{
                x: getRandomX(),
                y: getRandomY(),
              }}
              animate={{
                y: [null, getRandomY()],
                x: [null, getRandomX()],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          )
        })}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 px-4"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg"
        >
          🎂 Surprise! 🎂
        </motion.h1>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl md:text-2xl font-bold shadow-2xl hover:shadow-purple-300/50 transition-all duration-300 hover:bg-purple-50"
        >
          Tap to Open Your Surprise
        </motion.button>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white text-lg md:text-xl mt-6 opacity-90"
        >
          ✨ Click the button above ✨
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default WelcomeScreen

