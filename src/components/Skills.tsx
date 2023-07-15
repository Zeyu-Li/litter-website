const SkillsList = [
  {
    title: "🌺 Frontend",
    skills: "JavaScript/Typescript, HTML, CSS/SCSS, SwiftUI",
  },
  {
    title: "💼 Backend",
    skills: "Kubernetes, Python, Node.js, SQL, NoSQL AWS, Firebase, GCP",
  },
  {
    title: "📚 Libraries/Frameworks",
    skills:
      "React/React Native, GraphQL, Django, Flask, Express.js, Nest.js, Next.js, Node.js, Electron.js, Tailwind",
  },
  {
    title: "🎮 Game",
    skills: "Unity, Unreal, Godot",
  },
  {
    title: "🧵 Miscellaneous",
    skills: "Docker, Jenkins, C++, C#, Java, Lua, LaTeX, Markdown, Bash, Serverless, Rust, GPT",
  },
  {
    title: "✨ Other",
    skills: "Figma, Git/GitHub, Blender, Adobe Illustrator",
  },
  {
    title: "📖 Learning",
    skills: "TensorFlow, Haskell, Terraform",
  },
];

const Skills: React.FC = () => {
  return (
    <div id="skills" className="min-h-screen w-screen bg-primary p-12 pb-0">
      <div className="m-auto max-w-4xl">
        <h1 className="text-7xl text-secondary underline -sm:text-5xl">
          Skills:
        </h1>
        <div className="py-12 -sm:py-6">
          {SkillsList.map(({ title, skills }) => (
            <div className="mb-6 flex flex-col" key={title}>
              <h2 className="text-5xl font-bold text-secondary -sm:text-3xl">
                {title}
              </h2>
              <p className="my-4 text-3xl text-secondary/80 -sm:text-2xl">
                {skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
