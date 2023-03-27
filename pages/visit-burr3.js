import animation from "@/public/lottie/visit-burr-3.json";
import Lottie from "lottie-react";

export default function VisitBurrThree() {
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
