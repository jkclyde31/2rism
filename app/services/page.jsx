import Button from "@/components/Button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Buttons Section */}
      <div className="w-full max-w-2xl">
        <h3 className="text-lg font-semibold mb-4">Button Examples</h3>
        <div className="flex flex-col gap-4">
          <Link href={"/about"}> 
            <Button className="w-full py-[19.5px] bg-black rounded-[15px] hover:bg-gray-800 hover:text-white">
              Button Label
            </Button>
          </Link>
          <Button className="w-full py-[15px] bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Gradient Button
          </Button>

          <Button className="rounded-full" href="/about">Rounded Button</Button>

          <Button className="border-2 border-blue-500">Custom Border</Button>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-[1200px] mt-8">
        <h3 className="text-lg font-semibold mb-4">Accordion Examples</h3>
        <Accordion type="single" collapsible className="w-full bg-black text-white rounded-lg">
          {/* Accordion Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left px-4 py-2 rounded-lg data-[state=open]:bg-blac data-[state=open]:text-white hover:bg-gray-200 hover:text-black">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 bg-white text-black rounded-b-lg">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left px-4 py-2 rounded-lg data-[state=open]:bg-black data-[state=open]:text-white hover:bg-gray-200 hover:text-black">
              How do I customize the accordion?
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 bg-white text-black rounded-b-lg">
              You can customize the accordion by modifying the styles in the `className` prop or by adding custom CSS.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left px-4 py-2 rounded-lg data-[state=open]:bg-black data-[state=open]:text-white hover:bg-gray-200 hover:text-black">
              Can I add icons to the accordion?
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 bg-white text-black rounded-b-lg">
              Yes, you can add icons to the `AccordionTrigger` by including them as children. For example, use an arrow icon to indicate the open/close state.
            </AccordionContent>
          </AccordionItem>

          {/* Accordion Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left px-4 py-2 rounded-lg data-[state=open]:bg-black data-[state=open]:text-white hover:bg-gray-200 hover:text-black">
              Is it responsive?
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2 bg-white text-black rounded-b-lg">
              Yes, the accordion is fully responsive and works well on all screen sizes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}