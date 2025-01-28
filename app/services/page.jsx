import Button from "@/components/Button";

export const metadata = {
  title: "Services"
}

export default function Services() {
  return (
    <div className="flex items-center justify-center h-[75vh] flex-col gap-5 max-w-[1200px] mx-auto">
      <Button className="bg-black">Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline" size="large">Large Outline Button</Button>
      <Button variant="danger" isLoading>Loading Button</Button>
      {/* <Button variant="success" icon={<Heart />}>With Icon</Button> */}
      {/* <Button variant="ghost" icon={<ArrowRight />} iconPosition="right">Ghost Button</Button> */}
      <Button fullWidth>Full Width Button</Button>
    </div>
  );
}
