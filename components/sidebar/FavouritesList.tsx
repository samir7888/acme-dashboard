import { FAVORITES } from '../../constants/SidebarData'
import { motion } from 'framer-motion';
const FavouritesList = () => {
  return (
    <motion.div className='px-6 mt-8 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <h3 className='text-sm uppercase text-gray-400 mb-3 tracking-tight'>Favorites</h3>

      <div className='space-y-3'>
        {FAVORITES.map((favorite, i) => (
          <motion.div key={favorite.name} className='flex items-center justify-between group cursor-pointer'
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 + i * 0.1, delay: 0.6 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            <div className='flex items-center gap-3'>
              <motion.img src={favorite.img} alt={favorite.name} className='w-5 h-5 rounded-full object-cover'
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{favorite.name}</span>
            </div>

            <span className='text-[10px] text-gray-400 font-medium uppercase font-mono'>{favorite.type}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default FavouritesList