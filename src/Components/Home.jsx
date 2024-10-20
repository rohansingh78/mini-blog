import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import RecentsPosts from "./RecentsPosts";

export default function App() {
  return (
 <>
    <div className="gap-4 grid grid-cols-12 px-4 sm:px-8 mt-5">
      <Card className="col-span-12 sm:col-span-4 h-[300px] relative overflow-hidden">
        <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
          <p className="text-tiny text-white/70 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-semibold text-lg">Stream the Acme event</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-4.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] relative overflow-hidden">
        <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
          <p className="text-tiny text-white/70 uppercase font-bold">Plant a tree</p>
          <h4 className="text-white font-semibold text-lg">Contribute to the planet</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] relative overflow-hidden">
        <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
          <p className="text-tiny text-white/70 uppercase font-bold">Supercharged</p>
          <h4 className="text-white font-semibold text-lg">Creates beauty like a beast</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
      </Card>
      <Card isFooterBlurred className="col-span-12 sm:col-span-6 h-[300px] relative overflow-hidden">
        <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
          <p className="text-tiny text-white/70 uppercase font-bold">New</p>
          <h4 className="text-white font-semibold text-lg">Acme camera</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 z-10 w-full flex justify-between px-6 py-4">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="col-span-12 sm:col-span-6 h-[300px] relative overflow-hidden">
        <CardHeader className="absolute z-10 top-4 left-4 flex-col items-start">
          <p className="text-tiny text-white/70 uppercase font-bold">Your day your way</p>
          <h4 className="text-white font-semibold text-lg">Your checklist for better sleep</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full flex justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-10"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/70">Breathing App</p>
              <p className="text-tiny text-white/70">Get a good night's sleep.</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
    < RecentsPosts/>
    </>
  );
}
