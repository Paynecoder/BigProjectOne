import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "@/public/lottie/loading-screen.json";
import animationDesktop from "@/public/lottie/loading-screen-desktop.json";
import Button from "@/components/Button";

export default function LandingAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      {isClient && window.innerWidth > 414 && (
        <div
          style={{
            display: "flex",
            alignItems: "center" /* center vertically */,
            height: "100vh" /* set parent height to viewport height */,
            width: "100vw" /* set parent width to viewport width */,
            overflow: "hidden" /* hide double scrollbar */,
          }}
        >
          <Lottie
            animationData={animationDesktop}
            loop={false}
            onComplete={() => {
              console.log("Animation complete");
              showButton();
            }}
            style={{
              width: screen.width > 1365 ? `${screen.width}px` : "100%",
              height: screen.height > 767 ? `${screen.height}px` : "100%",
            }}
          />
        </div>
      )}

      {isClient && window.innerWidth <= 414 && (
        <Lottie
          animationData={animation}
          loop={false}
          onComplete={() => {
            console.log("Animation complete");
            showButton();
          }}
        />
      )}
    </>
  );
}
