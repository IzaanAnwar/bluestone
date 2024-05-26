import { Image } from "@nextui-org/image";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <>
      <main className="flex-1 md:px-24 ">
        <section className="static h-screen">
          <div className="w-full h-[35vh] md:h-[50vh] lg:h-screen overflow-clip absolute left-0 right-0 -z-50 bg-zinc-900 ">
            <div className="opacity-10 w-full h-full">
              <Image
                src="/abc.jpg"
                className=" object-cover h-[35vh] md:h-[50vh] lg:h-screen  brightness-95 saturate-150"
              />
            </div>
          </div>
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16 relative   ">
            <div className="flex justify-center items-center  w-full h-[35vh] md:h-[50vh] lg:h-screen">
              <div className="z-10 text-white text-center  space-y-6">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] w-full md:max-w-[32rem] lg:max-w-[64rem]  ">
                  <span className="bg-gradient-to-r font-black tracking-tight from-pink-700 via-purple-500 to-primary-500 inline-block text-transparent bg-clip-text">
                    Reliable
                  </span>{" "}
                  IT Solutions for Your Organization
                </h1>
                <p className="mx-auto w-full md:max-w-[24rem] lg:max-w-[44rem]  md:text-xl ">
                  Bluestone Tech Services provides scalable, secure, and
                  high-performance computing solutions, network solutions, data
                  center solutions, software solutions and much more services
                  for organisations.
                </p>
                <div className="space-x-4 mt-6 mx-auto w-full  ">
                  <Button
                    variant="solid"
                    className="bg-white text-primary"
                    href="#"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="services">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center ">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary-200 px-3 py-1 text-sm text-zinc-950">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful, Scalable, and Reliable
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our solutions are designed to handle the most demanding
                  workloads, with industry-leading hardware and software,
                  advanced monitoring, and seamless scalability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 ">
              <div className="grid gap-1 border border-gray-100 hover:border-primary p-4 hover:scale-105 rounded duration-200 hover:bg-primary-50">
                <h3 className="text-lg font-bold text-primary">
                  High-Performance Hardware
                </h3>
                <p className="text-sm ">
                  Our server clusters are equipped with the latest Intel Xeon
                  processors, high-capacity RAM, and fast SSD storage to ensure
                  maximum performance.
                </p>
              </div>
              <div className="grid gap-1 border border-gray-100 hover:border-primary p-4 hover:bg-primary-50 hover:scale-105 rounded duration-200">
                <h3 className="text-lg font-bold text-primary">
                  Seamless Scalability
                </h3>
                <p className="text-sm ">
                  Easily scale your server resources up or down as your needs
                  change, without any downtime or disruption to your
                  applications.
                </p>
              </div>
              <div className="grid gap-1 border border-gray-100 hover:border-primary p-4 hover:bg-primary-50 hover:scale-105 rounded duration-200">
                <h3 className="text-lg font-bold text-primary">
                  Unparalleled Reliability
                </h3>
                <p className="text-sm ">
                  Our server clusters are designed with redundancy and
                  fault-tolerance in mind, ensuring maximum uptime and
                  availability for your critical workloads.
                </p>
              </div>
              <div className="grid gap-1 border border-gray-100 hover:border-primary p-4 hover:bg-primary-50 hover:scale-105 rounded duration-200">
                <h3 className="text-lg font-bold text-primary">
                  Advanced Monitoring
                </h3>
                <p className="text-sm ">
                  Gain real-time visibility into the performance and health of
                  your server clusters with our comprehensive monitoring
                  solutions.
                </p>
              </div>
              <div className="grid gap-1 border border-gray-100 hover:border-primary p-4 hover:bg-primary-50 hover:scale-105 rounded duration-200">
                <h3 className="text-lg font-bold text-primary">
                  Dedicated Support
                </h3>
                <p className="text-sm ">
                  Our team of experts is available 24/7 to provide
                  industry-leading support and ensure your server clusters are
                  always running at peak performance.
                </p>
              </div>
              <div className="grid gap-1 border border-gray-100 hover:border-primary p-4 hover:bg-primary-50 hover:scale-105 rounded duration-200">
                <h3 className="text-lg font-bold text-primary">
                  Flexible Pricing
                </h3>
                <p className="text-sm ">
                  We offer flexible pricing models to suit the unique needs of
                  your business or university, with options for both on-premises
                  and cloud-based deployments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 " id="clients">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Trusted by Leading Corporations and Institutes
              </h2>
              <p className="mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Bluestone Tech Services has a proven track record of delivering
                reliable and scalable server solutions to a wide range of
                clients.
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
          <div className="container grid items-center justify-center gap-4  px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Fill out the form below to learn more about our server cluster
                solutions and how we can help your business or university.
              </p>
            </div>
            <div className="mx-auto w-full  space-y-2">
              <form className="flex flex-col space-y-4 w-full">
                <div className="flex justify-between items-center w-full gap-4">
                  <div className="space-y-2 w-full text-left">
                    <label htmlFor="name">Name</label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2 w-full text-left">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="message">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <Button className="w-full bg-primary" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ServerIcon(props: any) {
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
  );
}
