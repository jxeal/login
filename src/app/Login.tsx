"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs_Trigger,
} from "@/components/ui/tabs";

export default function Login() {
  const [signupNext, setSignupNext] = useState(0);

  return (
    <>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login" onClick={() => setSignupNext(0)}>
            Login
          </TabsTrigger>
          <TabsTrigger value="signup" onClick={() => setSignupNext(0)}>
            Signup
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              {/* Maybe an welcome icon */}
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>
                Please enter your login credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" /*placeholder="@zhunxeal"*/ />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="signup">
          {signupNext == 0 && (
            <Card>
              <CardHeader>
                {/* Maybe an signup icon */}
                <CardTitle>Hey There!</CardTitle>
                <CardDescription>
                  Create an account. It just takes a couple minutes!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Zhun Xeal" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="@zhunxeal" />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setSignupNext(1)}>Next</Button>
              </CardFooter>
            </Card>
          )}
          {signupNext == 1 && (
            <Card>
              <CardHeader>
                {/* Maybe an signup icon */}
                <CardTitle>Continue</CardTitle>
                <CardDescription>Just a few more things!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="password">Enter Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Next</Button>
              </CardFooter>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
