import { createSupabaseServerClient } from '@/lib/supabase/server'
import LogoutButton from '@/components/logout-button'

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="text-gray-600">Bienvenido, {user?.email}</p>

      <LogoutButton />
    </main>
  )
}
