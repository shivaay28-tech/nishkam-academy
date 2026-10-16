import { useAuth } from '@/context/AuthContext'
import { useToast } from '@/context/ToastContext'
import { authService } from '@/services/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BAAZEX_URL = 'https://www.baazex.com'

export function BasicCheckout() {
  const { user, refresh } = useAuth()
  const { push } = useToast()
  const navigate = useNavigate()
  const [baazexId, setBaazexId] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    setBaazexId(user?.baazexId ?? '')
  }, [user?.baazexId])

  async function save() {
    if (!user) {
      navigate('/login', { state: { from: '/engine' } })
      return
    }
    const trimmed = baazexId.trim()
    if (!trimmed) {
      push('error', 'Enter your Baazex ID.')
      return
    }
    setBusy(true)
    try {
      const saved = await authService.updateProfile(user.id, { baazexId: trimmed })
      if (!saved) throw new Error('Could not save the Baazex ID.')
      await refresh()
      push('success', 'Baazex ID saved')
    } catch (error) {
      push('error', error instanceof Error ? error.message : 'Could not save the Baazex ID.')
    } finally {
      setBusy(false)
    }
  }

  if (!user) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-muted">Sign in to save a Baazex ID. Five engine questions are included.</p>
        <button
          type="button"
          className="h-11 w-full rounded-xl bg-baazex font-semibold text-on-button"
          onClick={() => navigate('/login', { state: { from: '/engine' } })}
        >
          Sign in
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted">
        Five engine questions are included. A Baazex deposit adds 15% of the amount as questions. A $100 deposit adds 15 questions.
      </p>
      <a
        href={BAAZEX_URL}
        className="flex h-11 items-center justify-center rounded-xl border border-line text-sm font-semibold text-accent"
        target="_blank"
        rel="noreferrer"
      >
        Open a Baazex account
      </a>
      <label className="block text-sm font-semibold text-ink">
        Baazex ID
        <input
          className="mt-1 h-11 w-full rounded-xl border border-line bg-canvas px-3"
          placeholder="Your Baazex client ID"
          value={baazexId}
          onChange={(event) => setBaazexId(event.target.value)}
        />
      </label>
      <button
        type="button"
        className="h-11 w-full rounded-xl bg-baazex font-semibold text-on-button disabled:opacity-60"
        disabled={busy}
        onClick={() => void save()}
      >
        {busy ? 'Saving…' : 'Save Baazex ID'}
      </button>
    </div>
  )
}
