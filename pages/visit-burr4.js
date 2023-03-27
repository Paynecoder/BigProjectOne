import animation from "@/public/lottie/visit-burr-4.json";
import Lottie from "lottie-react";

export default function VisitBurrFour() {
  return (
    <>
      <Lottie
        animationData={animation}
        loop={true}
        onComplete={() => {
          console.log("Animation complete");
        }}
      />
    </>
  );
}
