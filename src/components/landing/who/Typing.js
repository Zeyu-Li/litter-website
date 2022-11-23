import TypeIt from "typeit-react";

const Typing = () => {
  const words = ["frontend", "backend", "JavaScript", "Python", "for you"];

  return (
    <TypeIt
      getBeforeInit={(instance) => {
        instance
          .type(words[0])
          .pause(750)
          .delete(words[0].length)
          .pause(500)
          .type(words[1])
          .pause(750)
          .delete(words[1].length)
          .pause(500)
          .type(words[2])
          .pause(750)
          .delete(words[2].length)
          .pause(500)
          .type(words[3])
          .pause(750)
          .delete(words[3].length)
          .pause(500)
          .type(words[4]);

        // Remember to return it!
        return instance;
      }}
    />
  );
};

export default Typing;
