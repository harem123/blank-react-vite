/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X4tqnJtzMOY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-10">
        <div className="container flex items-center justify-between px-4 space-y-4 md:flex-col md:space-y-0 md:px-6">
          <Link className="flex space-x-2 items-center" href="#">
            <FlagIcon className="h-6 w-6" />
            <span className="font-bold">Company</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link className="font-medium text-dark-blue dark:text-dark-blue hover:underline" href="#">
              Home
            </Link>
            <Link className="font-medium text-dark-blue dark:text-dark-blue hover:underline" href="#">
              Services
            </Link>
            <Link className="font-medium text-dark-blue dark:text-dark-blue hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container max-w-2xl py-12 space-y-6 text-center md:py-24 md:space-y-8 lg:max-w-3xl xl:max-w-4xl xl:space-y-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Get in Touch</h1>
            <p className="mx-auto max-w-[600px] text-dark-blue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-dark-blue">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
            <Input className="max-w-[400px] flex-1" id="email" placeholder="Enter your email" type="email" />
            <Button className="h-12 min-w-[100px] bg-dark-blue text-gray-50 hover:bg-dark-blue/90">Send</Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container flex flex-col items-center justify-center space-y-4 text-center md:flex-row md:space-y-0 md:space-x-4 md:text-left">
          <div className="space-y-2">
            <h3 className="font-bold">Company</h3>
            <p className="text-sm text-gray-500 dark:text-gray-50">We make really cool stuff that you should buy.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Contact</h3>
            <address className="not-italic text-sm">
              123 Street
              <br />
              City, ST 12345
            </address>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Social</h3>
            <div className="space-x-2 text-2xl">
              <Link className="text-dark-blue dark:text-dark-blue" href="#">
                <TwitterIcon className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link className="text-dark-blue dark:text-dark-blue" href="#">
                <FacebookIcon className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link className="text-dark-blue dark:text-dark-blue" href="#">
                <InstagramIcon className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
