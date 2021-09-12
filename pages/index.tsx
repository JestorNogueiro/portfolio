import Head from "next/head";
import { servicesProvided } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimate, stagger } from "../animation";
export default function Home() {
  return (
    <motion.div
      variants={routeAnimate}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Jestor Nogueiro</title>
        <meta name="description" content="developed by jestor nogueiro" />
        <link rel="icon" href="/jn.png" />
      </Head>
      {/* <div className="bg-gradient-to-r from-green to-blue-500">
        <h1>Portfolio</h1>
      </div> */}

      {/* About Page */}
      <div className="flex flex-col px-7 pt-2">
        <h2 className="font-medium md:text-left text-justify">
          I am MCA (Master Of Computer Application) graduate, from Jain College
          Of Engineering in the year 2020, Im been working in web development
          since my BCA last semester. Then I introduced to React.js, since then
          Im been working with react.js, and I am loving and enjoying it very
          much, and looking forward to learn new things and technologies to
          increase my skill set .
        </h2>
        <div className="my-2">
          <h1 className="font-bold text-2xl my-8 text-left border-b-2 tracking-wide">
            I Love Doing...
          </h1>
          <motion.div
            className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-2 "
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {servicesProvided.map((serv) => (
              <motion.div variants={fadeInUp} key={serv.title}>
                <ServiceCard service={serv} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
