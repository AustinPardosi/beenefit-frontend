import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface BuzzEduCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
}

const BuzzEduCard: React.FC<BuzzEduCardProps> = ({
  imageSrc,
  date,
  title,
  description,
}) => {
  return (
    <Card className="py-4 w-80 h-96">
      <CardHeader className="pt-2 px-4 flex-col items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-sm"
          src={imageSrc}
          width={400}
          draggable='false'
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 gap-2">
        <p className="text-sm font-light text-[#888888]">Posted on {date}</p>
        <h4 className="font-bold text-large">{title}</h4>
        <h1 className="text-sm">{`${description}`}</h1>
      </CardBody>
    </Card>
  );
};

export default BuzzEduCard;
