import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <section className="bg-[#f7f4ed] h-screen">
        <header className="flex">
          <nav className="flex w-full justify-between px-20">
              <div>
                <h1 className="text-center capitalize md:uppercase">Mavrick Blogs</h1>
              </div>

              <div>
                <a href="#">Our Story</a>
                <a href="#">Membership</a>
                <a href="#">Write</a>
                <a href="#">Sign-in</a>
                <a href="#">Register</a>
              </div>
          </nav>
        </header> 
      </section>
    </>
  )
}