import Lottie from "lottie-react";
import animation from "@/public/lottie/loading-screen.json";
import Button from "@/components/Button";

export default function LandingAnimation() {
  function showButton() {
    return (
      <>
        <div>
          <Button word="Start" />
        </div>
      </>
    );
  }

  return (
    <>
      <Lottie
        animationData={animation}
        loop={false}
        onComplete={() => {
          console.log("Animation complete");
          showButton();
        }}
      />
    </>
  );
}
