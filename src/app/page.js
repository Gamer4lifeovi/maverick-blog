import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="flex w-full flex-row items-center justify-between py-5 pl-2 fixed bg-black text-white">
        <div className="flex gap-3">
          <img src="/2.png" alt="" className="w-8" />
          <h1 className="text-3xl">Maverick Blog</h1>
        </div>
        <div className="pr-5 gap-4 flex">
          <a href="#" className="underline text-[#3e9ddf] font-bold italic">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blogs</a>
          <a href="#">Pricing</a> 
          <a href="#">Sign-in</a>
          <a href="#">Register</a>
        </div>
      </nav>

      <section className="">
        <div className="h-screen w-full bg-cover bg-no-repeat bg-[url(/mountain.jpg)]">
          <a href=""><h1 className="font-black pt-48 text-center justify-center align-middle cursor-pointer">Blogs</h1></a>
          <h1 className="text-center justify-center align-middle">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</h1>
          <div className="text-center justify-center align-middle gap-2 flex">
            <a href="#"><span>Authors</span></a>
            <span>•</span>
            <a href="#"><span>Genre</span></a>
            <span>•</span>
            <a href="#">Posts</a>
          </div>
          <h1 className="text-center justify-center align-middle">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</h1>
        </div>
      </section>
    </>
  )
}