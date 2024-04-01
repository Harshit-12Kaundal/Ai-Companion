import { UserButton } from "@clerk/nextjs"

function RootRoute() {
  return (
    <div><UserButton afterSignOutUrl="/"/></div>
  )
}

export default RootRoute