import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

export default function tradeAnimation() {
  const waveLines = document.querySelectorAll(
    ".trade-animation .mobile_waves svg rect"
  );
  const svgRectQuantity = waveLines.length;
  const totalDuration = svgRectQuantity / 20;

  const tl = gsap.timeline({});
  tl.to(".trade-animation .mic_svg", {
    "--background-color--mic-svg-1": "#0A5CFF",
    "--background-color--mic-svg-2": "#063799",
  })
    .to(
      ".trade-animation .trade_speach-text",
      {
        text: {
          value: "Yo, buy 40M BONK using USDC",
        },
        duration: 2.8,
      },
      0.2
    )
    .add(() => {
      const tl = gsap.timeline({ repeat: 3 });
      tl.to(".trade-animation .mic_overlay", {
        scale: 1.5,
        duration: 0.4,
      })
        .to(".trade-animation .mic_overlay", {
          scale: 1.2,
          duration: 0.1,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 1.4,
          duration: 0.2,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 1.1,
          duration: 0.2,
        })
        .to(".trade-animation .mic_overlay", {
          scale: 1.4,
          duration: 0.3,
        });
    })
    .to(
      ".trade-animation .mobile_waves-wrap",
      { x: "50%", duration: totalDuration, ease: "none" },
      0
    )
    .to(
      ".trade-animation .mobile_waves",
      {
        x: "0%",
        duration: totalDuration,
        ease: "none",
        onComplete: () => {
          gsap.to(".trade-animation .mic_overlay", { opacity: 0 });
        },
      },
      0
    )
    .to(
      ".trade-animation .mobile_waves svg g",
      {
        opacity: 1,
        ease: "none",
        stagger: { each: `${totalDuration / svgRectQuantity}` },
      },
      0
    )
    .add(() => {
      waveLines.forEach((waveLine, index) => {
        const multiplier = index * (svgRectQuantity * 0.00093);
        const tl = gsap.timeline();
        tl.to(waveLine, {
          fill: "#fff",
          duration: totalDuration / svgRectQuantity / 2,
          delay: totalDuration / svgRectQuantity / 2 + multiplier,
        }).to(waveLine, {
          fill: "#5C5F66",
          duration: totalDuration / svgRectQuantity / 2,
        });
      });
    }, 0)
    .to(".trade-animation .speak_sound-wrap", {
      opacity: 0,
      duration: 0.5,
    })
    .to(".trade-animation  .mobile-chat_msg-wrap.is-reverse", {
      "grid-template-rows": "1fr",
      duration: 0,
    })
    .to(".trade-animation  .mobile-chat_msg-wrap.is-reverse", {
      opacity: 1,
    })
    .to(".trade-animation  .mobile-chat_msg-wrap", {
      delay: 0.2,
      opacity: 1,
    })
    .to(".trade-animation  .mobile_loader-content", {
      backgroundPositionX: "100%",
      duration: 1,
      ease: "linear",
    })
    .to(".trade-animation .mobile_loader-content", {
      backgroundPositionX: "0%",
      duration: 0.6,
      ease: "linear",
    })
    .to(".trade-animation .mobile_loader-content", {
      backgroundPositionX: "100%",
      duration: 1,
      ease: "linear",
    })
    .to(".mobile_loader-content-wrap", { opacity: 0, height: 0 })
    .to(
      ".trade-animation .mobile-chat_chat-outer-wrap",
      {
        opacity: 1,
        height: "auto",
      },
      "<0%"
    );
}
