import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "../components/Card";
import { strings } from "@/res/strings";
import Container from "@/components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { skills } from "@/res/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Container className="py-24">
          <h1 className="text-4xl font-bold mb-4">
            Hello, I&apos;m Rio.
            <br />
            I&apos;m a software engineer.
          </h1>
          <p className="text-xl">
            I develop applications for the Web and Mobile.
          </p>
        </Container>
      </header>

      <main>
        <section id="skills">
          <Container>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, i) => <li className="p-4 rounded-md shadow-md transition-colors cursor-pointer hover:bg-slate-700" key={i}>
                <div>
                  <FontAwesomeIcon icon={skill.icon} size="2xl" />
                  <h6 className="inline-block md:block font-bold ms-2 md:ms-0 md:mt-2 mb-2">{skill.name}</h6>
                </div>
                <p className="text-sm text-slate-500">{skill.notes}</p>
              </li>)}
            </ul>
          </Container>
        </section>

        <section id="experience" className="mt-16">
          <Container className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-light text-slate-500">Total experience</h3>
              <p className="text-2xl font-bold">1y 08m</p>
            </div>
            <div>
              <ul>
                <li className="mb-2">
                  <div className="bg-slate-700 py-2 px-4 rounded-md">
                    <h4 className="text-sm font-bold">Datamatics Digital Ltd.</h4>
                    <p className="text-sm text-slate-500">Trainee Developer</p>
                  </div>
                </li>
                <li className="bg-slate-700 py-2 px-4 rounded-md">
                  <h4 className="text-sm font-bold">Datamatics Digital Ltd.</h4>
                  <p className="text-sm text-slate-500">Consultant Developer</p>
                </li>
              </ul>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
