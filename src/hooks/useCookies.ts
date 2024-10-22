import { cookies } from 'next/headers'
import { getServerSideUser } from '@/lib/payload-utils'

async function useUser() {
    const nextCookies = cookies()
    const {user} = await getServerSideUser(nextCookies)
  return user
}

export default useUser