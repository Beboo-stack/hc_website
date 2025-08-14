import { 
  ShoppingBagIcon, 
  TagIcon, 
  FireIcon, 
  CubeIcon 
} from '@heroicons/react/24/outline';

export default function DashboardStats({ stats }) {
  const statCards = [
    {
      name: 'Total Shops',
      value: stats.totalShops,
      icon: ShoppingBagIcon,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
    },
    {
      name: 'Categories',
      value: stats.totalCategories,
      icon: TagIcon,
      color: 'bg-green-500',
      textColor: 'text-green-500',
    },
    {
      name: 'Hot Deals',
      value: stats.activeHotDeals,
      icon: FireIcon,
      color: 'bg-red-500',
      textColor: 'text-red-500',
    },
    {
      name: 'Total Products',
      value: stats.totalProducts,
      icon: CubeIcon,
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

