import animationone from "@/public/lottie/visit-burr-1.json";
import animationtwo from "@/public/lottie/visit-burr-2.json";
import animationthree from "@/public/lottie/visit-burr-3.json";
import animationfour from "@/public/lottie/visit-burr-4.json";
import animationfive from "@/public/lottie/visit-burr-5.json";
import Lottie from "lottie-react";
import { useAnswers } from "@/hooks/answerContext";

export default function VisitBurrOne() {
  const { score } = useAnswers();

  function findAnim(score) {
    switch (score) {
      case 0:
        return animationfive;
      case 1:
        return animationfive;
      case 2:
        return animationfour;
      case 3:
        return animationthree;
      case 4:
        return animationtwo;
      case 5:
        return animationone;
      case 6:
        return animationone;
      default:
        return animationfive;
    }
  }

  const anim = findAnim(score);

  return (
    <>
      <main
        style={{
          overflow: "hidden",
        }}
      >
        <Lottie
          animationData={anim}
          loop={true}
          onComplete={() => {
            console.log("Animation complete");
          }}
        />
      </main>
    </>
  );
}
