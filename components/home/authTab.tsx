"use client";
import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FcGoogle } from "react-icons/fc";

import { ScrollArea } from "../ui/scroll-area";
import { SignupForm } from "@/components/form/signupform";
import { SigninForm } from "../form/signinform";

export function AuthTab() {
  return (
    <Tabs defaultValue="account" className="w-[80vw] md:w-[400px] h-[70vh]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Signin</TabsTrigger>
        <TabsTrigger value="password">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="space-y-2 mt-5">
            <SigninForm />
          </CardContent>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-5 h-[2px] w-full" />
          </div>
          <CardFooter>
            <Button
              className="w-full gap-3"
              onClick={async () => {
                await signIn("google");
              }}
            >
              <FcGoogle /> Sign in with Google
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <ScrollArea className="h-[550px] w-[80vw] md:w-[400px] rounded-md border p-4">
            <SignupForm></SignupForm>
          </ScrollArea>

          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}