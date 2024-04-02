import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Scroll = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      controls.start({ opacity: 1, y: 0 });
      setIsVisible(true);
    } else {
      controls.start({ opacity: 0, y: 50 });
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h1>{isVisible ? "Text is visible" : "Scroll to reveal text!"}</h1>
    </motion.div>
  );
};

export default Scroll;