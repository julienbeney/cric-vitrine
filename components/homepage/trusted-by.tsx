"use client";
import { Title } from "./title";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { useState } from "react";

export const TrustedBy = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <div className="mt-12"></div>
      <Title title="Trusted By" />
      <div className="my-6 flex flex-row justify-evenly w-full">
        {!clicked ? (<Button variant={"outline"} onClick={() => setClicked(true)} className="rounded-full">
          <Icon
            name={"Eye"}
            strokeWidth={"1.2"}
            size={"22"}
            color={"var(--foreground)"}
          />
          <span className="mx-2">Check out our partners</span>{" "}
          <Icon
            name={"Eye"}
            strokeWidth={"1.2"}
            size={"22"}
            color={"var(--foreground)"}
          />
        </Button>) : 
        (<h1 className={"text-md text-muted-foreground"}>
          Nice try, we'll never expose who our clients are..
        </h1>)}
      </div>
    </>
  );
};
