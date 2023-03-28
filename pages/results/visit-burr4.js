import animation from "@/public/lottie/visit-burr-2.json";
import Lottie from "lottie-react";

export default function VisitBurrFour() {
  return (
    <>
      <main
        style={{
          overflow: "hidden",
        }}
      >
        <Lottie
          animationData={animation}
          loop={true}
          onComplete={() => {
            console.log("Animation complete");
          }}
        />
      </main>
    </>
  );
}
