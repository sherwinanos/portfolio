import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { NextSeo } from "next-seo";

export default function Home() {
  const site = "Sherwin Anos"
  const title = "Sherwin Anos: Website Designer and Developer from the Philippines"
  const description = "Lorem ipsum dolor sit amet"
  const url = "https://www.sherwinanos.com"

  return (
    <>
      {/* <NextSeo 
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          site_name: site,
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: "/assets/og.webp",
              alt: "Sherwin Anos"
            }
          ]
        }}
      /> */}

      <Hero />
      <Projects />
      <Services />
      <About />
      <Testimonials />
    </>
  );
}
