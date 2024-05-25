import Image from "next/image";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <>
    <main className="flex-1 px-24 bg-gray-100">
    <section className="w-full pt-12 md:pt-24 lg:pt-32 ">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Reliable Server Clusters for Your Business
            </h1>
            <p className="mx-auto max-w-[700px]  md:text-xl ">
              Bluestone Tech Services provides scalable, secure, and high-performance server clusters for businesses
              and universities.
            </p>
            <div className="space-x-4 mt-6">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-500 px-3 py-1 text-sm text-white">
                  Server Clusters
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful, Scalable, and Reliable</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our server clusters are designed to handle the most demanding workloads, with industry-leading
                  hardware, advanced monitoring, and seamless scalability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">High-Performance Hardware</h3>
                <p className="text-sm ">
                  Our server clusters are equipped with the latest Intel Xeon processors, high-capacity RAM, and fast
                  SSD storage to ensure maximum performance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seamless Scalability</h3>
                <p className="text-sm ">
                  Easily scale your server resources up or down as your needs change, without any downtime or disruption
                  to your applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Unparalleled Reliability</h3>
                <p className="text-sm ">
                  Our server clusters are designed with redundancy and fault-tolerance in mind, ensuring maximum uptime
                  and availability for your critical workloads.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Advanced Monitoring</h3>
                <p className="text-sm ">
                  Gain real-time visibility into the performance and health of your server clusters with our
                  comprehensive monitoring solutions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Dedicated Support</h3>
                <p className="text-sm ">
                  Our team of experts is available 24/7 to provide industry-leading support and ensure your server
                  clusters are always running at peak performance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Flexible Pricing</h3>
                <p className="text-sm ">
                  We offer flexible pricing models to suit the unique needs of your business or university, with options
                  for both on-premises and cloud-based deployments.
                </p>
              </div>
            </div>
          </div>
        </section>
    <section className="w-full py-12 md:py-24 lg:py-32 " id="clients">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Trusted by Leading Businesses and Universities
          </h2>
          <p className="mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Bluestone Tech Services has a proven track record of delivering reliable and scalable server solutions
            to a wide range of clients.
          </p>
        </div>
        <div className="divide-y rounded-lg border ">
          <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-5">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-5">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
          <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Fill out the form below to learn more about our server cluster solutions and how we can help your
            business or university.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">Name</label>
              <Input id="name" placeholder="Enter your name" required type="text" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input id="email" placeholder="Enter your email" required type="email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message">Message</label>
              <Textarea id="message" placeholder="Enter your message" required />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer className=" p-6 md:py-12 w-full bg-gray-100 text-zinc-800 border-t">
    <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
      <div className="grid gap-1">
        <h3 className="font-semibold">Company</h3>
        <Link href="#">About Us</Link>
        <Link href="#">Our Team</Link>
        <Link href="#">Careers</Link>
        <Link href="#">News</Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Products</h3>
        <Link href="#">Server Clusters</Link>
        <Link href="#">Storage Solutions</Link>
        <Link href="#">Networking Devices</Link>
        <Link href="#">Managed Services</Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Resources</h3>
        <Link href="#">Blog</Link>
        <Link href="#">Documentation</Link>
        <Link href="#">Support</Link>
        <Link href="#">FAQs</Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Legal</h3>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Cookie Policy</Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Contact</h3>
        <Link href="#">Sales</Link>
        <Link href="#">Support</Link>
        <Link href="#">Partnerships</Link>
        <Link href="#">Press</Link>
      </div>
    </div>
  </footer>
    </>

)
}

function ServerIcon(props:any) {
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
  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
  <line x1="6" x2="6.01" y1="6" y2="6" />
  <line x1="6" x2="6.01" y1="18" y2="18" />
</svg>
)
}