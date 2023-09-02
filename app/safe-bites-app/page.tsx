"use client"
import React from "react";
import BackButton from "@/components/project/back-button"
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import SectionDivider from "@/components/section-divider";
import G2ImageCard from "@/components/project/G2ImageCard"
// import ToggleAccordion from "@/components/project/accordion"
import G2Card from "@/components/project/G2Card"


import SB1 from '@/public/safe-bites/SB1.png'
import SB2 from '@/public/safe-bites/SB2.png'
import timeline from '@/public/safe-bites/timeline.png'
import UX1 from '@/public/safe-bites/UX1.png'
import UX2 from '@/public/safe-bites/UX2.png'
import CNN from '@/public/safe-bites/CNN.png'
import Yelp from '@/public/safe-bites/Yelp.png'
import team from '@/public/safe-bites/team.png'
import casestudy from '@/public/safe-bites/casestudy.png'


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <BackButton />
      <section className="flex items-center flex-col max-w-[50rem]">
        <SectionHeading>Safe Bites App</SectionHeading>
        <p> Was one of two designers and developers of app that tackled the confusing process of finding restaurants dedicated to keeping customers and employees safe from COVID-19. Through our review app, users can find the places that best follow CDC pandemic regulations, while providing resources for users to support local businesses during quarantine.
        </p>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-4">
            <h1 className="font-bold text-center">Initial</h1>
            <Image
              src={SB1}
              alt="Sketch of Maker Cart"
              width="500"
              quality="95"
              className="h-50 w-50 rounded border object-cover shadow-xl my-5"
            />
          </div>

          <div className="hidden md:flex justify-center items-center opacity-80 mx-4 text-2xl">
            <BsArrowRight />
          </div>

          <div className="md:ml-4">
            <h1 className="font-bold text-center">Revised</h1>
            <Image
              src={SB2}
              alt="Photo of Built Maker Cart"
              width="500"
              quality="95"
              className="h-50 w-50 rounded border object-cover shadow-xl my-5"
            />
          </div>
        </div>

        <div>
          <p className="mb-3"><span className="font-medium">Timeline:</span> 3 months</p>
          <p className="mb-3"><span className="font-medium">My Role:</span> Project Manager, Designer, Developer </p>
          <p className="mb-3"><span className="font-medium">Goal:</span> Help people find restaurants that follow COVID safety protocols</p>
          <p className="mb-3"><span className="font-medium">Constraints:</span>Everything was completed virtually (harder to get feedback on work)</p>
        </div>


        <SectionDivider />


        <SectionHeading>Initial</SectionHeading>
        <p>Part of team of 5 peers who created an app for the one week long MIT App Inventor Hackathon. First place winner for youth team category. Our work was covered by CNN Digital and featured on their instagram.</p>
        <Image
          src={timeline}
          alt=""
          width="750"
          quality="100"
          className="h-50 w-50 rounded border object-cover shadow-xl"
        />
        <p>The UX of the project was created under a fast hackathon deadline and was not optimized with feedback.</p>
        <Image
          src={UX1}
          alt=""
          width="700"
          quality="100"
          className="h-50 w-50 rounded border object-cover shadow-xl my-5"
        />
        <h1 className="font-bold text-center mt-10">Deliverables/Press</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="py-5">
            <div className="relative w-full pb-[77.2727%] shadow-sm mt-6 mb-3 overflow-hidden rounded-lg will-change-transform">
              <iframe
                loading="lazy"
                className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
                src="https://www.youtube.com/embed/S3TGxuxbhts?si=WllspwLpPV7_xbBX"
                allowFullScreen
                allow="fullscreen"
              ></iframe>
            </div>
            <p>My main role during the hackathon was to develop the story and video of "why our project matters"</p>
          </div>
          <div className="py-5">
            <Image
              src={CNN}
              alt=""
              width="750"
              quality="100"
              className="h-50 w-50 rounded border object-cover shadow-xl my-5"
            />
            <p><a className="underline text-blue-500" href="https://www.cnn.com/2020/09/27/us/teen-inventors-coronavirus-pandemic-trnd">CNN Article by Christina Walker</a>, the article covers three different projects and SafeBites was the third story mentioned.</p>
          </div>
        </div>


        <SectionDivider />



        <SectionHeading>Revised</SectionHeading>
        <p>After the hackathon, the team pursued the app development. I became the project manager that helped with the development and design. Most of the 12 team members outreached and sought feedback for the design. I was one of two coders and designers for the project. I also taught workshops on React Native mobile app programming and how to use Figma for the other team members.</p>

        <h1 className="font-bold text-center">Design Exploration</h1>
        <G2ImageCard
          srcL={casestudy}
          altL=""
          descL="Researched designs of other restaurants related applications to understand what users were used to/expected. Image sourced from Lucia Liu."
          srcR={UX2}
          altR=""
          descR="Testing new homepage screens to include more functionality than the previous design. The design above was created as a team as we talked though was aspects of the app we thought would be important."
        />
        {/* https://uxdesign.cc/using-the-yelp-app-c37f8f7eeb2 */}

        <G2ImageCard
          srcL={Yelp}
          altL=""
          descL="Met with the chief of staff at Yelp to understand the challenges of launching products in the restaurant industry. We also got feedback on the UX and app business strategy. "
          srcR={team}
          altR=""
          descR="Team created surveys and outreached to local restaurants to find beta testers for the application."
        />

        <h1 className="font-bold text-center">Final Design</h1>
        <iframe className="rounded border object-cover shadow-xl my-10" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIg94HK4ytAYLTLemD750mK%2FFinal-Safe-Bites-Design%3Ftype%3Ddesign%26node-id%3D811%253A2414%26mode%3Ddesign%26t%3DX2cTNdNN7gSGnuYe-1" ></iframe>
        <p>Changes include, homepage screen functionality, adding more restaurant information to search bar, a more developed restaurant detail page, and an updated restaurant safety survey whose questions were derived from CDC guidelines.</p>

        <h1 className="font-bold text-center">Demo Video of React Native App</h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded border object-cover shadow-xl my-5"
            width="560" height="315"
            src="https://www.youtube.com/embed/JU45pUJp5jA?si=Kl3ONcZgR1s635JY"
          ></iframe>
        </div>
        <p>As one of the two coders on this project, I primally handled the front end development to make the UX (map, restaurant detail page, formate for IOS vs Android, button interaction, alerts, etc)</p>

        <SectionDivider />

        <SectionHeading>Lessons</SectionHeading>
        <div className="flex flex-col align-start">
          <h1 className="font-bold mt-5">Power of MVP</h1>
          <p> When the project initially kicked off, we were racing against the clock with just one week to meet the hackathon deadline. It wasn't much time to build an app from the ground up. To tackle this challenge, our team collaborated closely to determine the essential features for our Minimum Viable Product (MVP). The MVP turned out to be a lifesaver, serving a dual purpose. Not only did it provide us with a functional project to showcase to the MIT judges, but it also allowed people to connect with our concept right from the early stages of development.</p>
          <h1 className="font-bold mt-5">Managing Virtual Work</h1>
          <p> The app came to life during the COVID lockdown, which meant a whole lot of Zoom sessions. Collaborating virtually brought its own set of pros and cons, and it was a valuable learning experience for me. The key lesson here is all about communication! I found that things worked smoother when people regularly shared their progress, especially in the realm of software development. I started adopting this practice myself because, well, I appreciated it when others did it. Turns out, those quick updates at shorter intervals proved to be a better way of keeping everyone on the same page. Sure, it might have been easier for us since we were a small and tech-savvy team, but it taught me to truly value the concept of sharing work and ideas collaboratively.</p>
          <h1 className="font-bold mt-5">The Fleeting Wave of Demand</h1>
          <p> If I could offer advice to my past self during the development of SafeBites, I would emphasize the importance of thinking long term. Our approach to addressing our users' needs was inherently short-sighted. It was apparent that larger companies like Yelp and Google would eventually incorporate similar features into their products. Our app fulfilled a "spike demand" rather than addressing a longer-term need. Still, I enjoyed working on the project and gained valuable skills in the process. In the future, recognize that my focus should be on creating products with enduring utility, rather than those catering to short-lived trends.</p>
        </div>


      </section>
    </main>
  );
}
