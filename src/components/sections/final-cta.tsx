import { ArrowRight } from "lucide-react";

import { PhoneFrame } from "@/components/device/phone-frame";
import { SavedScreen } from "@/components/device/screens";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { AmbientGlow, AuroraGlow, LightBeam } from "@/components/ui/ambient-glow";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { QrPlaceholder } from "@/components/ui/qr-placeholder";
import { StoreBadges } from "@/components/ui/store-badges";
import { scaleIn } from "@/lib/motion";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="section-pad grain relative isolate overflow-hidden"
    >
      <AuroraGlow
        from="aqua"
        to="violet"
        size="72rem"
        opacity={0.34}
        className="left-1/2 top-[1rem] -translate-x-1/2"
      />
      <AmbientGlow
        tone="magenta"
        size="42rem"
        opacity={0.2}
        className="bottom-[-8rem] right-[-8rem]"
      />
      <AmbientGlow
        tone="mint"
        size="34rem"
        opacity={0.14}
        className="bottom-[-4rem] left-[-10rem]"
      />
      <LightBeam
        tone="aqua"
        className="left-1/2 top-0 h-[26rem] w-px -translate-x-1/2 opacity-70"
      />

      <div className="container-page">
        <div className="panel hairline-top relative overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            data-decorative
            className="absolute inset-0 -z-10 opacity-[0.3]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] lg:gap-16">
            <div>
              <Reveal as="span" className="eyebrow block">
                Get started
              </Reveal>

              <h2 id="download-heading" className="display-2 mt-6">
                <TextReveal lines={["Your next device", "may already"]} />
                <TextReveal lines={["be waiting."]} lineClassName="text-aurora" delay={0.2} />
              </h2>

              <Reveal as="p" delay={0.12} className="lede mt-6 max-w-lg">
                Download {site.name}, browse what is available near you, and list
                the devices you have stopped using.
              </Reveal>

              <Reveal delay={0.18} className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticButton href={site.appStoreUrl} external size="lg">
                  Download the App
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </MagneticButton>
                <MagneticButton href="#categories" size="lg" variant="secondary">
                  Browse categories
                </MagneticButton>
              </Reveal>

              <Reveal delay={0.24} className="mt-10 flex flex-wrap items-start gap-6">
                <StoreBadges note />
                <QrPlaceholder className="hidden sm:flex" />
              </Reveal>
            </div>

            <Reveal
              variants={scaleIn}
              className="relative mx-auto w-full max-w-[16rem] sm:max-w-[17.5rem]"
            >
              <AuroraGlow
                from="azure"
                to="magenta"
                size="28rem"
                opacity={0.4}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <PhoneFrame label={`${site.name} app — saved products screen`}>
                <SavedScreen />
              </PhoneFrame>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
