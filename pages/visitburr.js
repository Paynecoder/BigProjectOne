import animationone from "@/public/lottie/visit-burr-1.json";
import animationtwo from "@/public/lottie/visit-burr-2.json";
import animationthree from "@/public/lottie/visit-burr-3.json";
import animationfour from "@/public/lottie/visit-burr-4.json";
import animationfive from "@/public/lottie/visit-burr-5.json";
import Lottie from "lottie-react";
import { useAnswers } from "@/hooks/answerContext";
import Button from "@/components/Button";
import down from "@/public/icons/misc/caret-down-solid.svg";
import Image from "next/image";
import router from "next/router";

export default function VisitBurrOne() {
  const { score } = useAnswers();
  const router = useRouter();

  function findAnim(score) {
    switch (score) {
      case 0:
        return;
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
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        {score > 0 && (
          <div
            style={{
              overflow: "hidden",
              height: "100vh",
            }}
          >
            <Lottie animationData={anim} loop={true} onComplete={() => {
              router.push("/askburr")
            }} />
          </div>
        )}
        {score === 0 && (
          <Button word={"Take the quiz to visit Burr!"} route={"/quiz"} />
        )}
      </main>
    </>
  );
}
