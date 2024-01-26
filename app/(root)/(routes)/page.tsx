import { UserButton } from '@clerk/nextjs'

const RootPage = () => {
  return (
    <div className="h-full">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default RootPage
