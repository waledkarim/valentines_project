import { motion } from "motion/react";

function FloatingHearts() {
  return (
    <div className="hearts">
      {[...Array(15)].map((_, i) => {
        const randomLeft = Math.random() * window.innerWidth;
        const randomDuration = 4 + Math.random() * 6;
        const randomDelay = Math.random();
        const randomSize = 16 + Math.random() * 24;

        return (
          <motion.span
            key={i}
            initial={{
              y: "100vh",
              x: randomLeft,
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "fixed",
              fontSize: randomSize,
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 1,
            }}
          >
            💖
          </motion.span>
        );
      })}
    </div>
  );
}

export default FloatingHearts;
