import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, UserRound } from "lucide-react";

// Card Component
const Card = ({ image, title, description, date, author, comments }) => {
  return (
    <div className="flex max-w-[664px] items-stretch justify-between gap-[32px] flex-col sm:flex-row">
      <Image
        src={image}
        width={0}
        height={0}
        alt="Picture of the author"
         sizes="100vw"
        className="w-full h-auto"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-[24px] tracking-[0px] leading-[36px] mb-[16px] text-center md:text-start">
            {title}
          </h2>
          <p className="text-[#979797] text-[16px] tracking-[0px] leading-[24px] mb-[10px] text-center md:text-start">
            {description}
          </p>
        </div>

        <div className="flex w-full justify-evenly md:justify-start items-center gap-[15px]  ">
          {/* Date */}
          <div className="flex items-center gap-[5px] text-[#979797]">
            <Calendar size={"16px"} />
            <p className="text-[12px] leading-[16px] tracking-[0px]">{date}</p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-[5px] text-[#979797]">
            <UserRound size={"16px"} />
            <p className="text-[12px] leading-[16px] tracking-[0px]">{author}</p>
          </div>

          {/* Comments */}
          <div className="flex items-center gap-[5px] text-[#979797]">
            <MessageCircle size={"16px"} />
            <p className="text-[12px] leading-[16px] tracking-[0px]">
              {comments}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const TravelTipsAndAdvice = () => {
  // List of card data
  const cards = [
    {
      image: "/tips/t1.png",
      title: "East Village Ice Cream Crawl",
      description:
        "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…",
      date: "Today",
      author: "Maria Philips",
      comments: 2,
    },
    {
      image: "/tips/t2.png",
      title: "Brooklyn Pizza Tour",
      description:
        "Join us on a delicious journey through Brooklyn's best pizzerias. We'll visit four iconic spots and learn about the history of New York-style pizza while enjoying slices from each location.",
      date: "Tomorrow",
      author: "John Doe",
      comments: 5,
    },
  ];

  return (
    <div className="inner-row">
      <div className="flex flex-col md:flex-row w-full justify-between items-center mt-[120px] mb-[25px] md:mb-[64px] gap-[10px]">
        <h2 className="text-[32px] font-semibold text-center md:text-start">
          Travel Tips and Advices
        </h2>
        <Button className=" text-[16px] tracking-[0px] text-white px-[25px] py-[12px] bg-[#7B61FF]">
          View all
        </Button>
      </div>

      {/* Display Cards */}
      <div className="flex flex-col lg:flex-row gap-[32px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            date={card.date}
            author={card.author}
            comments={card.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelTipsAndAdvice;