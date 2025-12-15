import { SidebarLeft, ArrowUpDown } from '../../components/ui/Icons';
import { NAV_ITEMS } from '../../constants/SidebarData';
import FavouritesList from './FavouritesList';
import { NavItem } from './NavItem';
import { SearchesList } from './SearchesList';

export const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 bg-white border-r border-[#eeeeee] flex flex-col h-screen fixed left-0 top-0 overflow-y-auto no-scrollbar z-20">

      {/* Header */}

      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2" >
          <div className="size-8">

            <img src="/image.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-medium text-gray-900">Acme Inc</span>
          <ArrowUpDown className="size-4 text-gray-900" aria-hidden="true" />
        </div>
        <button className='text-gray-400 hover:text-gray-600'>
          <SidebarLeft className="w-4 h-4 text-gray-400" aria-hidden="true" />
        </button>
      </div>


      {/* Nav */}
      <nav className="px-3 space-y-1" aria-label="Main navigation">
        {NAV_ITEMS.map((item, index) => (
          <NavItem key={item.label} {...item} index={index} />
        ))}

      </nav>

      <FavouritesList />
      <SearchesList />

    </aside>
  )
}
