"use client"
import React from "react";
import BackButton from "@/components/project/back-button"
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import SectionDivider from "@/components/section-divider";
import G2ImageCard from "@/components/project/G2ImageCard"
import MiniDivider from "@/components/project/minidivider"
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
    <main className=" flex justify-center">
      <BackButton />
      <div className=" flex items-center justify-center flex-col lg:max-w-[50rem] md:max-w-[40rem] sm:max-w-[35rem] xs:max-w-[10rem] px-5">
        <SectionHeading>Safe Bites App</SectionHeading>
        <p> Was one of two designers and developers of app that tackled the confusing process of finding restaurants dedicated to keeping customers and employees safe from COVID-19. Through our review app, users can find the places that best follow CDC pandemic regulations, while providing resources for users to support local businesses during quarantine.
        </p>

        <div className="flex flex-col md:flex-row justify-center mt-5">
          <div className="md:mr-4">
            <h1 className="font-bold text-center">Initial</h1>
            <Image
              src={SB1}
              alt="Screen shot of a light green background and a demo iphone screen with the old app design"
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
              alt="Screen shot of a light blue background and a demo iphone screen with the old app design"
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

        <div className="justify-center flex">
          <SectionDivider />
        </div>


        <SectionHeading>Initial</SectionHeading>
        <p>Part of team of 5 peers who created an app for the one week long MIT App Inventor Hackathon. First place winner for youth team category. Our work was covered by CNN Digital and featured on their instagram.</p>
        <div className="flex justify-center my-10">
          <Image
            src={timeline}
            alt="A line with separating branches and dates. The first branch is marked by March 2020 and reads, Covid effects world, team transitions to social distancing and reflects on the pandemic issues. Next is April 2020 with the blurb, start of SafeBites, born form the community's needs. On july 2020, it reads, winner of youth MIT App Inventor Hackathon. Finally, on October 2020, it says contact restaurants review platforms for possible integration.  "
            width="750"
            quality="100"
            className="h-50 w-50 rounded border object-cover shadow-xl"
          />
        </div>

        <p>The UX of the project was created under a fast hackathon deadline and was not optimized with feedback.</p>

        <div className="flex justify-center">
          <Image
            src={UX1}
            alt="Example of the UX of the old app design. Shoes eight screens ranging from home screen to portfolio page."
            width="700"
            quality="100"
            className="h-50 w-50 rounded border object-cover shadow-xl my-5"
          />
        </div>



        <h1 className="font-bold text-center mt-10">Deliverables/Press</h1>
        <div className="justify-center flex">
          <MiniDivider />
        </div>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="py-5">
            <div className="aspect-w-16 aspect-h-9 flex">
              <iframe
                loading="lazy"
                width="100%" height="100%"
                className="w-full aspect-video rounded border object-cover shadow-xl my-5"
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
              alt="Featured image of the team on the CNN instagram page with 90k likes"
              width="750"
              quality="100"
              className="h-50 w-50 rounded border object-cover shadow-xl my-5"
            />
            <p><a className="underline text-blue-500" href="https://www.cnn.com/2020/09/27/us/teen-inventors-coronavirus-pandemic-trnd">CNN Article by Christina Walker</a>, the article covers three different projects and SafeBites was the third story mentioned.</p>
          </div>
        </div>


        <div className="justify-center flex">
          <SectionDivider />
        </div>

        <SectionHeading>Revised</SectionHeading>
        <p>After the hackathon, the team pursued the app development. I became the project manager that helped with the development and design. Most of the 12 team members outreached and sought feedback for the design. I was one of two coders and designers for the project. I also taught workshops on React Native mobile app programming and how to use Figma for the other team members.</p>

        <h1 className="font-bold text-center ">Design Exploration</h1>
        <div className="justify-center flex">
          <MiniDivider />
        </div>
        <G2ImageCard
          srcL={casestudy}
          altL="Image of the UX of Yelp sourced from Lucia Liu's article."
          descL="1. Researched designs of other restaurants related applications to understand what users were used to/expected. Image sourced from Lucia Liu."
          srcR={UX2}
          altR="New UX designs for SafeBites with more features on the home page like buttons for delivery, curbside pick up and more."
          descR="2. Testing new homepage screens to include more functionality than the previous design. The design above was created as a team as we talked though was aspects of the app we thought would be important."
        />
        {/* https://uxdesign.cc/using-the-yelp-app-c37f8f7eeb2 */}

        <G2ImageCard
          srcL={Yelp}
          altL="Screenshot of the chief of staff's Linkedin profile"
          descL="3. Met with the chief of staff at Yelp to understand the challenges of launching products in the restaurant industry. We also got feedback on the UX and app business strategy. "
          srcR={team}
          altR="Image of the safe bites team profile pics and names underneath"
          descR="4. Team created surveys and outreached to local restaurants to find beta testers for the application."
        />

        <h1 className="font-bold text-center ">Final Design</h1>
        <div className="justify-center flex">
          <MiniDivider />
        </div>
        <div className=" justify-center w-full h-full mt-7 mb-5">
          <iframe className="w-full aspect-video rounded border object-cover shadow-xl" width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIg94HK4ytAYLTLemD750mK%2FFinal-Safe-Bites-Design%3Ftype%3Ddesign%26node-id%3D811%253A2414%26mode%3Ddesign%26t%3DX2cTNdNN7gSGnuYe-1" ></iframe>
        </div>
        <p>Changes include, homepage screen functionality, adding more restaurant information to search bar, a more developed restaurant detail page, and an updated restaurant safety survey whose questions were derived from CDC guidelines.</p>


        <h1 className="font-bold text-center mt-10">Demo Video of React Native App</h1>
        <div className="justify-center flex">
          <MiniDivider />
        </div>
        <div className="aspect-w-16 aspect-h-9 w-full h-full justify-center mt-7 mb-5">
          <iframe
            className="rounded border object-cover shadow-xl w-full aspect-video"
            width="100%" height="100%"
            src="https://www.youtube.com/embed/JU45pUJp5jA?si=Kl3ONcZgR1s635JY"
          ></iframe>
        </div>
        <p>As one of the two coders on this project, I primally handled the front end development to make the UX (map, restaurant detail page, formate for IOS vs Android, button interaction, alerts, etc)</p>

        <div className="justify-center flex">
          <SectionDivider />
        </div>

        <SectionHeading>Lessons</SectionHeading>
        <div className="flex flex-col align-start">
          <h1 className="font-bold mt-5">Power of MVP</h1>
          <p> When the project initially kicked off, we were racing against the clock with just one week to meet the hackathon deadline. It wasn't much time to build an app from the ground up. To tackle this challenge, our team collaborated closely to determine the essential features for our Minimum Viable Product (MVP). The MVP turned out to be a lifesaver, serving a dual purpose. Not only did it provide us with a functional project to showcase to the MIT judges, but it also allowed people to connect with our concept right from the early stages of development.</p>
          <h1 className="font-bold mt-5">Managing Virtual Work</h1>
          <p> The app came to life during the COVID lockdown, which meant a whole lot of Zoom sessions. Collaborating virtually brought its own set of pros and cons, and it was a valuable learning experience for me. The key lesson here is all about communication! I found that things worked smoother when people regularly shared their progress, especially in the realm of software development. I started adopting this practice myself because, well, I appreciated it when others did it. Turns out, those quick updates at shorter intervals proved to be a better way of keeping everyone on the same page. Sure, it might have been easier for us since we were a small and tech-savvy team, but it taught me to truly value the concept of sharing work and ideas collaboratively.</p>
          <h1 className="font-bold mt-5">The Fleeting Wave of Demand</h1>
          <p> If I could offer advice to my past self during the development of SafeBites, I would emphasize the importance of thinking long term. Our approach to addressing our users' needs was inherently short-sighted. It was apparent that larger companies like Yelp and Google would eventually incorporate similar features into their products. Our app fulfilled a "spike demand" rather than addressing a longer-term need. Still, I enjoyed working on the project and gained valuable skills in the process. In the future, recognize that my focus should be on creating products with enduring utility, rather than those catering to short-lived trends.</p>
        </div>
      </div>
    </main>
  );
}
