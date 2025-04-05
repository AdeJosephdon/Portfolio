import { Cursor, useTypewriter } from "react-simple-typewriter";

function TypeWriter(prop) {
  const  [text]  = useTypewriter({
    words: ["Javascript", "React.js", "Node.js", "Express.js"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  return (
    
      <span

      >
        <span className='typewriter'>{[text]}</span>
         
      
      
      <span><Cursor /></span>
      
      {/* <Cursor /> */}
      </span>
  );
}

export default TypeWriter;