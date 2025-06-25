import { Button } from "@/components/ui/button"
import {
  Facebook, Instagram,
  Youtube, ArrowUpRight,
  Map, CarTaxiFront, LocateOff,
  CableCar, CarFront,
  Activity, Atom,
  MapPinCheckInside, Locate
} from "lucide-react"
import BookingForm from "./booking-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.jpg";
import img5 from "./assets/image5.jpg";
import img6 from "./assets/image6.jpg";


function App() {
  return (
    <>
      <div className="grid gap-4">
        <section className="grid gap-4 py-8 grid-cols-2">

	  <div className="content-center pl-2">
	  <div className="">

	    <div className="mb-10 leading-8">

	      <h3 className="mb-10 px-2 rounded-full inline-block w-70 text-center border-black-500 border-1">Welcome To Smart Car Rental</h3>
	      <h2 className="relative text-[76px]/25 mb-10">
	        Rent your Car.<br/>Safe with Our GPS Tracking <span className="absolute -bottom-2 right-35">
	          <Locate strokeWidth={1} size={100}/>
	        </span>
	      </h2>
	      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
	    </div>

	    <div className="flex items-center gap-10 mb-10">
	      <Button className="w-50 py-8 rounded-full">
	        Rent Now
	        <ArrowUpRight />
	      </Button>
	      <div className="flex justify-center items-center h-20 w-20 rounded-full border-black-500 border-2">
		<MapPinCheckInside size={50}/>
	      </div>
	    </div>

	  </div>
	  </div>

	  <div className="px-8 content-center">
	    <div className="px-8 py-8 b-10 border-black-500 border-2">
	      <h3 className="text-2xl">Search Your Ride</h3>
	      <BookingForm />
	    </div>
	  </div>

	</section>

        <section className="grid gap-4 py-4">
	  <div className="flex flex-col gap-8 justify-center items-center">
	    <h3 className="rounded-full py-1 px-4 border-grey-500 border-1">CHOOSE YOUR CAR</h3>
	    <h3 className="text-5xl">Best Car Collection</h3>
	    <p className="w-150 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
	  </div>

	  <div className="grid gap-4 p-4 lg:grid-cols-3 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  <img src={img1} alt="Image 1" />
	        </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Rent</Button>
              </CardFooter>
            </Card>

	   <Card>
	    <CardHeader>
	      <CardTitle>
                <img src={img2} alt="Image 2" />
	      </CardTitle>
	      <CardDescription>Card Description</CardDescription>
	    </CardHeader>
	    <CardContent>
	      <p>Card Content</p>
	    </CardContent>
	    <CardFooter>
              <Button>Rent</Button>
	    </CardFooter>
	   </Card>

	   <Card>
            <CardHeader>
              <CardTitle>
                  <img src={img3} alt="Image 3" />
	      </CardTitle>
              <CardDescription>Card Description</CardDescription>            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Rent</Button>
            </CardFooter>
           </Card>

          <Card>
            <CardHeader>
              <img src={img4} alt="Image 4" />
	    <CardTitle>
	  </CardTitle>
              <CardDescription>Card Description</CardDescription>            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Rent</Button>
            </CardFooter>
           </Card>

 	   <Card>
            <CardHeader>
              <CardTitle>
                <img src={img5} alt="Image 5" />
	      </CardTitle>
              <CardDescription>Card Description</CardDescription>            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Rent</Button>
            </CardFooter>
           </Card>

	    <Card>
            <CardHeader>
              <CardTitle>
                <img src={img4} alt="Image 4" />
	      </CardTitle>
              <CardDescription>Card Description</CardDescription>            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Rent</Button>
            </CardFooter>
           </Card>

	   <Card>
            <CardHeader>
              <CardTitle>
                <img src={img1} alt="Image 7" />
	      </CardTitle>
              <CardDescription>Card Description</CardDescription>            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Rent</Button>
            </CardFooter>
           </Card>

	   <Card>
            <CardHeader>
              <CardTitle>
                <img src={img3} alt="Image 8" />
	      </CardTitle>
              <CardDescription>Card Description</CardDescription>            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <Button>Rent</Button>
            </CardFooter>
           </Card>

          </div>
	</section>

        <section className="py-20 px-10 grid gap-10">
          <div className="flex justify-between rounded-full p-10 border-grey-500 border-2">
	    <div className="flex items-center pr-8 border-r-2 border-r-grey-500">
	      <ArrowUpRight />
	      <div className="ml-10">
	        <p>Call Booking</p>
	        <p>+234 70 468 692 57</p>
	      </div>
	    </div>
	    <div className="flex items-center pr-8 border-r-2 border-r-grey-500">
	      <ArrowUpRight />
              <div className="ml-10">
                <p>Our Location</p>
                <p>Owerri, Abia State, Nigeria</p>
              </div>
	    </div>
	    <div className="flex items-center pr-8 border-r-2 border-r-grey-500">
	      <ArrowUpRight />
              <div className="ml-10">
                <p>Call Booking</p>
                <p>+234 70 468 692 57</p>
              </div>
	    </div>

	    <div className="flex items-center">
              <ArrowUpRight />
              <div className="ml-10">
                <p>Work Hour</p>
                <p>09:00 AM - 22:00 PM</p>
              </div>
	    </div>
	  </div>

	  <div className="flex justify-between">
            <div className="">
	      <CarTaxiFront strokeWidth={1} size={200} />
	      <p className="w-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
	      <div className="flex space-x-4 mt-4 pt-4 border-t-blue-500 border-t-2">
	        <Facebook />
	        <Instagram />
	        <Youtube />
	      </div>
	    </div>

	    <div className="flex flex-col">
              <h3 className="mb-10 text-2xl">Quick Links</h3>
	      <ul className="flex flex-col grow justify-between">
                <li className="flex">
	  	  <ArrowUpRight />
	          <p>About us</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Our Services</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Blogs</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Pricing Plan</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Contact us</p>
	        </li>
	      </ul>
	    </div>

            <div className="flex flex-col">
              <h3 className="mb-10 text-2xl">Services</h3>
              <ul className="flex flex-col grow justify-between">
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Airport Transfers</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Local Rides</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Car Rent</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Business Travel</p>
	        </li>
                <li className="flex content-center">
	          <ArrowUpRight />
	          <p>Rent Local Rides</p>
	        </li>
              </ul>
            </div>

	    <div className="flex flex-col justify-between">
	      <h3 className="text-2xl">G P S</h3>
	      <div className="grid grid-cols-3 gap-3 pb-20">
	        <Map size={40} strokeWidth={1} />
	        <Atom size={40} strokeWidth={1} />
	        <LocateOff size={40} strokeWidth={1} />
                <CableCar size={40} strokeWidth={1} />
	        <Activity size={40} strokeWidth={1} />
	        <CarFront size={40} strokeWidth={1} />
	      </div>
	    </div>

	  </div>

	  <div className="flex justify-center pt-8 border-t-grey-500 border-t-2">
            <p>Smart Car Rental © 2025 – Design and Developed by UGOCHUKWU GOODLUCK CHIGOZIE</p>
	  </div>

	</section>
      </div>
    </>
  )
}

export default App
