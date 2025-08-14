import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

export default async function DashboardLayout({ children }) {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/api/auth/signin');
  }

  // Check if user has admin role
  if (session.user?.role !== 'admin') {
    redirect('/unauthorized');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={session.user} />
      
      <div className="flex">
        <DashboardSidebar />
        
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

