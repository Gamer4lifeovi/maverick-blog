import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <section className="bg-[#f7f4ed]">
        <header className="flex">
          <nav className="flex">
              <div>
                <h1 className="text-center capitalize md:uppercase">Mavrick</h1>
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