import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="flex w-full flex-row items-center justify-between py-5 pl-2 fixed bg-black text-white">
      <div className="flex gap-3">
        <img src="/2.png" alt=""  className="w-8"/>
        <h1 className="text-3xl">Maverick Blog</h1>
      </div>
      <div className="pr-5 gap-4 flex">
      <a href="#">About Us</a>
      <a href="#">Blogs</a>
      <a href="#">Pricing</a>
      <a href="#">Sign-in</a>
      <a href="#">Register</a>
      </div>
    </nav>

    <section className="">
        <div className="h-screen w-full bg-cover bg-no-repeat bg-[url(/mountain.jpg)]">
              <h1></h1>
        </div>
    </section>
    </>
  )
  }