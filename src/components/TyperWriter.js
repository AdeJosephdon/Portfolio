import { Cursor, useTypewriter } from "react-simple-typewriter";

function TypeWriter(prop) {
  const  [text]  = useTypewriter({
    words: ["Javascript", "React.js", "Node.js", "Express.js"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  return (
    <>
      <span
        className='josephdon-name'
      >
        {[text]} {/* This is the crucial part - rendering the 'text' */}
      </span>
      <Cursor />
    </>
  );
}

export default TypeWriter;