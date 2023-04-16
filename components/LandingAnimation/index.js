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
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <Lottie
            animationData={animationDesktop}
            loop={false}
            onComplete={() => {
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
            showButton();
          }}
        />
      )}
    </>
  );
}
