import Head from "next/head";
import { servicesProvided } from "../data";
import ServiceCard from "../components/ServiceCard";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jestor Nogueiro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="bg-gradient-to-r from-green to-blue-500">
        <h1>Portfolio</h1>
      </div> */}

      {/* About Page */}
      <div className="flex flex-col px-7 pt-2">
        <h2 className="font-medium md:text-left text-justify">
          I am MCA (Master Of Computer Application) graduate, from Jain College
          Of Engenering in the in 2020, I'm been working in web development
          since my BCA last semister. Then I introduced to React.js in the end
          of MCA last semister, since then i'm working with react.js, and I am
          loving and enjoying it very much, and looking forword to learn new
          things and technologies to increase my skill set .
        </h2>
        <div className="my-2">
          <h1 className="font-bold text-2xl my-8 text-left border-b-2 tracking-wide">
            I Love Doing...
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-2 ">
            {servicesProvided.map((serv) => (
              <ServiceCard service={serv} key={serv.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
