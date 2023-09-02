import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "@/context/scroll-top-button"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elsa B | Personal Portfolio",
  description: "Elsa is a Stanford undergrad pursuing human-computer interaction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#d7f2fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#d7d9fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollToTopButton />
            {/* <Header /> */}
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

// TASKS: 
// 1 - check margin for mobile phone if looks good, XXXX
// 2- add alt for safebites, XXX
// 3- update the domain so it's better, 4 - delete other rep of git on the hosting place, XXX
// 5 - When open website be in light mode, XX
//create more space in safebites area + numbering on desc, XXX
// 6 - for the bolded text maybe make it bigger? with more margin? --- looks cramped, XX
// 7- add a button lets you quickly scroll up when on project page
// clean the code so there aren't a ton of commented out stuff, 
