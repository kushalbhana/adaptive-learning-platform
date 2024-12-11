"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoLogOut } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { AuthTab } from "./authTab";

export function AuthDialogbox() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const [refID, setRefID] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    try {
      const refIDParam = searchParams.get("refID");
      if (refIDParam) {
        setRefID(refIDParam);
        setDialogOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  if (session) {
    return (
      <div className="md:flex gap-2 md:gap-x-5 hidden">
        {/* @ts-ignore */}
        <Link href={`/profile/${session.user?.id}`}>
          <Avatar className=" border-indigo-700 border-4">
            <AvatarImage src={session.user?.image!} />

            <AvatarFallback>{session.user?.name?.[0] || "?"}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="hidden md:block text-4xl text-indigo-700 ml-2 items-center justify-center">
          <Link href={"/"} onClick={() => signOut()}>
            <IoLogOut className=" items-center justify-center mt-1" />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-16 md:w-30 bg-indigo-700 rounded-sm h-8 mr-2 mt-1 md:h-10 md:mt-0 md:mr-0 text-white hover:text-background">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] md:max-w-[450px]">
        <DialogHeader>
          <DialogTitle> Authenticate</DialogTitle>
          <DialogDescription>
            Authenticate yourself. Click Signin/Signup to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 mr-2">
          <AuthTab />
        </div>
      </DialogContent>
    </Dialog>
  );
}