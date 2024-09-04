import Image from "next/image";
import { Card, CardHeader } from "./ui/card";

const ActivitiesCard = ({ activity }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div
          className="relative w-full h-[300px] flex items-center justify-center 
        bg-tertiary dark:bg-secondary/40 xl:bg-activity_bg_light 
        xl:dark:bg-activity_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden"
        >
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={activity.image}
            width={300}
            height={250}
            alt=""
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-1">{activity.name}</h4>
        <p className="text-muted-foreground text-lg">{activity.description}</p>
      </div>
    </Card>
  );
};

export default ActivitiesCard;
