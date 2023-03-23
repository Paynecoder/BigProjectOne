import Lottie from "lottie-react";
import animation from "@/public/lottie/loading-screen.json";

export default function LandingAnimation() {
  return (
    <>
      <Lottie animationData={animation} loop={false} />
    </>
  );
}
