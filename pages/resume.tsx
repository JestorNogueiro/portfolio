function resume() {
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="mx-2 border-r">
          <h2 className="text-2xl font-bold my-3 ml-4">Education</h2>
          <div className="text-left px-3">
            <h2 className="font-bold text-xl my-2 border-b-2">
              Master Of Computer Applicaton
            </h2>
            <p className="font-medium">Year 2018-20</p>
            <p>
              Did MCA in Jain college of engineering, Balagavi Karnataka India
            </p>
          </div>
        </div>
        <div className="mx-2">
          <h2 className="text-2xl font-bold my-3 ml-4">Experince</h2>
          <p className="font-bold text-xl my-2 ">
            <a
              href="https://www.tmits.in/"
              target="_blank"
              rel="technomind"
              className="border-b-2 "
            >
              <i className="text-blue-900 font-semibold">
                {" "}
                Technominds IT Solutions
              </i>{" "}
            </a>
          </p>
          <p className="mb-1">
            10<small>th</small> Jan 2020 - 10<small>th</small> july 2020
          </p>
          <p>
            worked as Front-end Developer and PHP Developer for 6 months with
            the project.
          </p>
          <p>
            Worked in
            <a
              href="https://www.tmits.in/"
              target="_blank"
              rel="technomind"
              className="border-b-2 "
            >
              <i className="text-blue-900 font-semibold">
                {" "}
                Technominds IT Solutions,
              </i>{" "}
            </a>
            Belgaum karnataka.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 my-6 mx-4">
        <div>
          <h1 className="text-2xl font-bold my-3">Languages & Framwork</h1>
          <div>{/* Images */}</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold my-3">Tools</h2>
        </div>
      </div>
    </div>
  );
}

export default resume;
