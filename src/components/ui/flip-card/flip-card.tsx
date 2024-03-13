import { useState } from "react";
import { m } from "framer-motion";
import "./flip-card.css";

export const CardFlip = ({
  childrenFront,
  childrenBack,
  className,
}: {
  childrenFront?: React.ReactNode;
  childrenBack?: React.ReactNode;
  className?: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className={className}>
      <div className="flip-card rounded-md" onClick={handleFlip}>
        <m.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.2, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-[100%] h-[100%]">
            {childrenFront}
          </div>

          <div className="flip-card-back w-[100%] h-[100%]">{childrenBack}</div>
        </m.div>
      </div>
    </div>
  );
};
