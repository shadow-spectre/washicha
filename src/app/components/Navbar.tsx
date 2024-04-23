import Link from "next/link"

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between font-['Protest Strike'] sticky bg-[#539941] text-white px-[12%] py-4 top-0 m-0">
        <div className="text-[#215b10] text-3xl max-sm:text-xl font-['Paytone One'] font-extrabold ">Washi<span className="font-['Pacifico'] font-bold text-[#86f867]">Cha</span>
        </div>
        <div className="flex gap-5">
          <Link href="/" >Home</Link>
          <Link href="/about-us" >About</Link>
          <Link href="/contacts" >Contact</Link>
          <Link href="/hot-deals" >Buy Now</Link>
        </div>
        <div className="">
          <Link href="/login">Login/Register</Link>
        </div>  
      </nav>
    )
  }
  
  export default Navbar