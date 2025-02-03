import Button from "@/components/Button";

export const metadata = {
  title: "Services"
}

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Size Variations */}
       {/* Width Variations */}
        <h3 className="text-lg font-semibold">Width Variations</h3>
        <div className="flex flex-col gap-4">
        <Button className="w-full py-[19.5px] bg-black rounded-[15px] hover:bg-gray-800 hover:text-white">
          Button Label
        </Button>

        <Button className="w-[500px] py-[15px] bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Gradient Button
          </Button>

          <Button className="rounded-full">
            Rounded Button
          </Button>

          <Button className="border-2 border-blue-500">
            Custom Border
          </Button>

        </div>
 
  </div>
  );
}
