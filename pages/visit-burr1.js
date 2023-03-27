import Lottie from "lottie-react";
import animation from "@/public/lottie/visit-burr-1.json";

export default function VisitBurrOne() {
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
