import { motion } from 'framer-motion'

const WelcomeScreen = ({ onOpen, name = 'Foram' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden"
    >
      {/* Soft blurred orbs background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute right-0 top-24 w-96 h-96 bg-white/6 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute left-1/2 bottom-10 w-56 h-56 bg-white/8 rounded-full blur-xl animate-float" style={{ animationDelay: '1.2s' }}></div>
      </div>

      {/* subtle falling hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const x = Math.random() * 100
          return (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: '120vh', opacity: [1, 1, 0] }}
              transition={{ duration: 6 + Math.random() * 4, delay: Math.random() * 2, repeat: Infinity }}
              className="absolute text-2xl"
              style={{ left: `${x}%` }}
            >
              ❤️
            </motion.div>
          )
        })}
      </div>

      {/* Center glass card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-2xl"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-3"
        >
          🎂 Surprise! 🎂
        </motion.h1>

        {/* New greeting line for home page */}
        <motion.p
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.22 }}
          className="text-lg md:text-xl font-medium text-white/95 mb-2"
        >
          Hello {name} — are you ready for the surprise?
        </motion.p>

        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.95 }}
          transition={{ delay: 0.25 }}
          className="text-sm md:text-base text-white/90 mb-6"
        >
          A little celebration just for you. Tap below to open the surprise and start the magic!
        </motion.p>

        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:brightness-105 transition"
          aria-label="Open Surprise"
        >
          Open Surprise
        </motion.button>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.5 }}
          className="block mt-4 text-xs text-white/80"
        >
          Tip: If music doesn't start, use the play button after opening.
        </motion.span>
      </motion.div>
    </motion.div>
  )



}

export default WelcomeScreen

