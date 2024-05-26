import { Link } from "@nextui-org/link";

export function Footer() {
  return (
    <footer className=" py-6 px-6 md:px-24 md:py-12 w-full bg-gray-100 text-zinc-800 border-t">
      <div className="container max-w-7xl md:flex  justify-start items-start  gap-8 text-sm space-y-6 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link href="#">About Us</Link>
          <Link href="#">Our Team</Link>
          <Link href="#">Careers</Link>
          <Link href="#">News</Link>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h3 className="font-semibold">Products</h3>
          <Link href="#">Server Clusters</Link>
          <Link href="#">Storage Solutions</Link>
          <Link href="#">Networking Devices</Link>
          <Link href="#">Other hardware Services</Link>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h3 className="font-semibold">Contact</h3>
          <Link href="#">Sales</Link>
          <Link href="#">Partnerships</Link>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h3 className="font-semibold">Address</h3>
          <p>
            307A, 3rd Floor, Govardhan House, 53‐54, Nehru Place, New Delhi –
            110019
          </p>
          <p>011‐41051450, 9871925813,</p>
          <p>info@bluestonetechservices.com</p>
        </div>
      </div>
    </footer>
  );
}
