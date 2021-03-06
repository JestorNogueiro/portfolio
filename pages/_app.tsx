import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-25 my-14 sm:px-20 md:px-32 space-x-4 ">
        <div className=" lg:col-span-3 bg-white rounded-2xl col-span-12 px-3 text-center md:min-w-min dark:bg-darkcolor ml-3 ">
          <Sidebar />
        </div>
        <div className=" flex flex-col overflow-hidden lg:col-span-9 grid-cols-9 bg-white rounded-2xl col-span-12 dark:bg-darkcolor shadow-2xl ">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
