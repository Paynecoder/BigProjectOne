import animation from "@/public/lottie/visit-burr-2.json";
import Lottie from "lottie-react";

export default function VisitBurrTwo() {
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
