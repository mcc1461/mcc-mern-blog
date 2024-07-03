import Logo from "../assets/MusCo5.png";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-2xl p-3 mx-auto text-center">
        <div>
          <img src={Logo} alt="MusCo Blog" className="w-64 mx-auto" />
        </div>
        <div>
          <h1 className="my-3 text-3xl font-semibold text-center text-orange-700">
            MusCo Blog
          </h1>
          <div className="flex flex-col gap-6 text-gray-500 text-md">
            <p className="text-justify">
              Welcome to MusCo Blog! I'm Mustafa COSKUNCELEBI, a passionate web
              developer with a background as a military officer and a degree in
              Management Information Systems.
            </p>

            <p className="text-justify">
              My career began in the military, where I developed a disciplined
              and organized approach to problem-solving. Over the years, I
              transitioned into the world of Information Technology, completing
              a second degree in Management Information Systems. This unique
              combination of skills has allowed me to excel as a full-stack
              developer, focusing on the MERN stack (MongoDB, Express.js,
              React.js, Node.js).
            </p>

            <p className="text-justify">
              I finished a full-stack development course where I improved
              my web programming abilities, concentrating on JavaScript,
              React.js, and Node.js. I've successfully finished a number of
              front-end and back-end projects, showcasing my ability to create
              efficient and maintainable code. I have experience building
              responsive and cross-browser compatible layouts using HTML and
              CSS.
            </p>
            <p className="text-justify">
              This blog is a culmination of my passion for exploring the world
              and sharing diverse perspectives. Here, you'll find posts about
              cities from around the globe, highlighting their unique culture,
              cuisine, travel experiences, and other beauties. This platform is
              open to contributions from anyone who shares a love for travel and
              cultural exploration. Whether you're a fellow traveler, a foodie,
              or someone who enjoys learning about different cultures, there's
              something here for you. Feel free to share your own stories and
              insights as well!
            </p>
            <p className="text-justify">
              I'm always open to connecting with like-minded individuals and
              sharing knowledge. Feel free to reach out to me on{" "}
              <a
                href="https://www.linkedin.com/in/mcoskuncelebi"
                className="text-lg text-blue-800"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/mcc1461"
                className="text-lg text-blue-800"
              >
                GitHub
              </a>
              .
            </p>
            <p className="text-justify">
              Thank you for visiting this blog. Everyone may contribute to this
              platform beyond writing and sharing tales. Share your stories,
              thoughts, and travels here. Happy blogging!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

