import Button from "@/components/Button";

export const metadata = {
  title: "Services"
}

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-2xl font-bold mb-4">Customizable Button Example</h1>
    <Button
      width="w-48"
      height="h-[48px]"
      color="bg-green-500"
      hoverColor="hover:bg-green-600"
    >
      Click Me
    </Button>

    <Button
      width="w-64"
      height="h-16"
      color="bg-purple-500"
      textColor="text-white"
      padding="px-6 py-3"
      borderRadius="rounded-lg"
      hoverColor="hover:bg-purple-600"
      className="mt-4"
    >
      Another Button
    </Button>
  </div>
  );
}
