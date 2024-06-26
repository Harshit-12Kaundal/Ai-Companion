import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar";

const layout = ({children} :{children :React.ReactNode}) => {
  return (
    <div className="h-full">
        <Navbar/>
        <div className="hidden md:flex mt-16 w-20 flec-col fixed inset-y-0">
          <Sidebar/>
        </div>
        <main className="md:pl-20 pt-16 h-full">
            {children}
        </main>
    </div>
  )
}

export default layout