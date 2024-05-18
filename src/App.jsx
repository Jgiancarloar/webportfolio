import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import ProjectsCard from "./components/ProjectsCard";
import { IoCodeSlash } from "react-icons/io5";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import programmer from "./img/programmer.png"
import { Link } from "react-scroll";

function App() {

  return (
    <main className="bg-[#212121]">
      <section className="flex flex-col md:flex-row max-w-[1200px] mx-auto">
        <article className="h-screen w-full flex flex-col justify-center items-center md:items-start p-5">
          <img className="w-1/3" src={programmer} alt="" />
          <h1 className="text-slate-100 text-[40px] lg:text-[60px] font-extrabold">Jheyson Alvarez</h1>
          <h3 className="text-amber-500 text-2xl md:text-3xl lg:text-4xl font-semibold -mt-2 mb-2">Frontend Developer</h3>
          <p className="text-slate-100 mb-5 text-justify px-8 md:p-0">
            As a frontend developer, I am passionate about creating attractive and functional user interfaces,
            always keeping up with the latest trends in web development.
          </p>
          <div className="text-slate-100 flex gap-5 mb-14 md:mb-5">
            <FaLinkedin size={35} className="hover:scale-110 hover:text-slate-300" />
            <FaGithubSquare size={35} className="hover:scale-110 hover:text-slate-300" />
          </div>
          <div className="sm:hidden grid place-items-center gap-2 text-slate-100">
            <span className="text-3xl font-bold">Projects</span>
            <Link to="informa" spy={true} smooth={true} duration={500}>
              <IoIosArrowDropdown size={35} />
            </Link>
          </div>
        </article>
        <article id="informa" className="informa min-h-screen md:h-screen w-full flex flex-col justify-start items-center p-5 py-20">
          <div className="flex gap-3 items-center text-slate-100 mb-5">
            <IoCodeSlash size={25} />
            <h3 className="text-3xl font-bold">Projects</h3>
            <IoCodeSlash size={25} />
          </div>
          <div className="text-amber-500 flex gap-10 md:gap-14 mb-5">
            <FaHtml5 size={25} />
            <FaCss3 size={25} />
            <IoLogoJavascript size={25} />
            <FaReact size={25} />
            <SiTailwindcss size={25} />
            <TbBrandVite size={25} />
          </div>
          <div className="w-full overflow-y-scroll no-scrollbar grid place-items-center md:place-content-start p-5">
            <ProjectsCard />
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
