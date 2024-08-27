import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <Card className="p-10 flex  items-center h-96 bg-slate-400">
      <CardContent className="flex flex-col gap-6">
        <CardTitle className="text-4xl">
          Transform Your Life with Our Coaching
        </CardTitle>
        <CardDescription>
          Unlock your potential and achieve your goals with personalized
          coaching sessions.
        </CardDescription>
        <Link href="" className="mt-5">
          <Button>Join Now</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Hero;
