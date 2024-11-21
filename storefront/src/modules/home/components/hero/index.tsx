import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] bg-black text-white w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-white font-normal"
          >
            Welcome to OGLyf.
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-white font-normal"
          >
            Stay tuned for our Brand launch
          </Heading>
        </span>
        <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>
            We are Excited to share our products with you
          </h1>
        </a>
      </div>
    </div>
  )
}

export default Hero
