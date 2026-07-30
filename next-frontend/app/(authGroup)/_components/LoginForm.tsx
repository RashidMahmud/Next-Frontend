"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { loginAction } from "../_actions/authActions";
import { useActionState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginAction, false);
  const router = useRouter();

  console.log(state, "state");

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Login successful");
      router.push("/dashboard");
    }
    if (!state.success) {
      toast.error(state.message || "Login failed");
    }
  }, [router, state]);

  return (
    <form action={action} className="space-y-4">
      <Card className="p-5 space-y-4">
        <Input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <Button type="submit">{pending ? "Submitting..." : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginForm;
