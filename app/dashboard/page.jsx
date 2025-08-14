import { getAllShops, getAllCategories, getHotDeals } from '@/lib/contentful';
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';

export default async function Dashboard() {
  // Fetch dashboard data
  const [shops, categories, hotDeals] = await Promise.all([
    getAllShops(),
    getAllCategories(),
    getHotDeals(),
  ]);

  const stats = {
    totalShops: shops.length,
    totalCategories: categories.length,
    activeHotDeals: hotDeals.length,
    totalProducts: shops.reduce((acc, shop) => {
      return acc + (shop.fields.products?.length || 0);
    }, 0),
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your mall.
        </p>
      </div>

      {/* Stats Cards */}
      <DashboardStats stats={stats} />

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Activity */}
      <RecentActivity shops={shops.slice(0, 5)} />
    </div>
  );
}

