'use client'

import { supabase } from '@/lib/supabase/client'

export function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await supabase.auth.signOut()
      }}
      className="rounded border px-4 py-2"
    >
      Logout
    </button>
  )
}
