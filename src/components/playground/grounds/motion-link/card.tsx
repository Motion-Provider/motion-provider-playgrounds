import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FC } from "react";
import { Tweet } from "@/interfaces/@types-components";

const TweetCard: FC<Tweet> = ({
  author,
  handle,
  avatar,
  text,
  minutesAgo,
  id,
}) => {
  return (
    <Card
      className="w-full max-w-md justify-self-center p-4 grid gap-4 my-2 mx-2 bg-transparent"
      key={id}
    >
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src={avatar} alt="Avatar" />
          <AvatarFallback>{author.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-2 flex-1">
          <div className="flex items-center gap-2">
            <div className="font-medium">{author}</div>
            <div className="text-muted-foreground text-sm">{handle}</div>
            <div className="text-muted-foreground text-sm ml-auto">
              {minutesAgo}m ago{" "}
            </div>
          </div>
          <div className="text-sm">{text}</div>
        </div>
      </div>
    </Card>
  );
};

export default TweetCard;
