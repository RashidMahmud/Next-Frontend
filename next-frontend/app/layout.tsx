import "./globals.css";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./(authGroup)/_components/shared/navbar";
const raleway = Raleway({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", raleway.variable)}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar/>
        <Toaster position= "top-right" richColors/>
        {children}</body>
    </html>
  );
}
