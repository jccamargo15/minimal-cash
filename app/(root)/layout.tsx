import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div>Menu</div>
      <main className="h-full">{children}</main>
    </div>
  )
}

export default RootLayout
