"use client"
import React from "react";

import BackButton from "@/components/project/back-button"
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import SectionDivider from "@/components/section-divider";
import G2ImageCard from "@/components/project/G2ImageCard"
import G2Card from "@/components/project/G2Card"
import MiniDivider from "@/components/project/minidivider"

import { motion } from "framer-motion";

import MC0 from '@/public/maker-cart/MC0.png'
import MC1 from '@/public/maker-cart/MC1.png'
import MC2 from '@/public/maker-cart/MC2.jpg'
import MC21 from '@/public/maker-cart/MC21.jpg'
import MC23 from '@/public/maker-cart/MC23.png'
import MC3 from '@/public/maker-cart/MC3.png'
import MC4 from '@/public/maker-cart/MC4.png'
import MC5 from '@/public/maker-cart/MC5.png'
import MC6 from '@/public/maker-cart/MC6.jpg'

import SKT1 from '@/public/maker-cart/SKT1.png'
import SKT2 from '@/public/maker-cart/SKT2.png'
import SKT3 from '@/public/maker-cart/SKT3.png'
import SKT4 from '@/public/maker-cart/SKT4.png'

import CAD1 from '@/public/maker-cart/CAD1.png'
import CAD5 from '@/public/maker-cart/CAD5.png'
import CAD3 from '@/public/maker-cart/CAD3.png'
import CAD4 from '@/public/maker-cart/CAD4.png'

import ACT1 from '@/public/maker-cart/ACT1.png'
import ACT2 from '@/public/maker-cart/ACT2.png'

import P1 from '@/public/maker-cart/P1.png'
import P2 from '@/public/maker-cart/P2.png'


import { BsArrowRight } from "react-icons/bs";



// MAKE CART
export default function Home() {

  return (
    <main className="flex justify-center ">
      <BackButton />

      <div className="flex items-center justify-center flex-col lg:max-w-[50rem] md:max-w-[40rem] sm:max-w-[35rem] xs:max-w-[10rem] px-5">

        <SectionHeading>Maker Cart</SectionHeading>
        <p> Led initiative to build four Maker Carts for educators in public schools to introduce tinkering and making to k-8 classrooms. The project addressed the lack of hands on opportunities in under-resourced institutions. Maker Carts are equipped with supplies and activity cards that encourage students to develop the hard and soft skills needed in the 21st century. A Maker Cart has been tested at Aptos Middle school and adopted by two public libraries. Maker Carts continue to be built by Lick Wilmerding High School's wood-shop class.
        </p>
        <div className="flex flex-col md:flex-row align-center justify-center mt-5">
          <div className="md:mr-4">
            <h1 className="font-bold text-center">Idea</h1>

            <Image
              src={SKT4}
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
            <h1 className="font-bold text-center">Product</h1>
            <Image
              src={MC5}
              alt="Photo of Built Maker Cart"
              width="500"
              quality="95"
              className="h-50 w-50 rounded border object-cover shadow-xl my-5"
            />
          </div>
        </div>

        <div>
          <p className="mb-3"><span className="font-medium">Timeline:</span> 8 months</p>
          <p className="mb-3"><span className="font-medium">My Role:</span> Project Manager, Designer, Developer </p>
          <p className="mb-3"><span className="font-medium">Goal:</span> Share maker opportunities with under-resourced students</p>
          <p className="mb-3"><span className="font-medium">Constraints:</span> Time that team has access to wood-shop & cart was built under a budget</p>
        </div>

        <SectionDivider />

        <SectionHeading>Iteration Process</SectionHeading>
        <h1 className="font-bold text-center">Success Criteria</h1>
        <div className="justify-start py-5">
          <p>• Help 2 public schools incorporate maker opportunities for students</p>
          <p>• Product should be scalable from a smaller to larger classroom of students</p>
          <p>• Students can build with minimal teacher supervision (provide activities/materials to students)</p>
        </div>



        <h1 className="font-bold text-center">Audience Research</h1>
        <MiniDivider />
        <div className="my-7">
          <G2Card />
        </div>



        <h1 className="font-bold text-center">Product Test & Design</h1>
        <MiniDivider />
        <G2ImageCard
          srcL={P2}
          altL="Photo of a free workshop that was run. There is a table with people around working on an activity."
          descL="1. Hosted free public Maker Workshops to test activity ideas, supplies, and engagement with content."
          srcR={P1}
          altR="Photo of Elsa and a student looking at activity supplies together."
          descR="2. Led Maker activities using Kits created from scratch. Initially thought that we could create kits for educators, but kits demand high facilitation and coordination (not something students/educators would likely do regularly). "
        />
        <G2ImageCard
          srcL={SKT1}
          altL="Sketch of a Maker Cart idea"
          descL="2. Cart is closable so that educator can better manage 'maker' vs non 'maker time.' The inside is open with materials on display so that students can easily see what supplies are available to them"
          srcR={SKT2}
          altR="Another Maker Cart sketch"
          descR="3. Designing a Maker Cart that is safe for students (making it bottom heavy so it doesn't tip over easily)."
        />

        <h1 className="font-bold text-center mt-10">Prototype 1</h1>
        <MiniDivider />
        <div>
          <G2ImageCard
            srcL={CAD1}
            altL="A Rhino CAD Model of the first iteration of Maker Cart"
            descL="1. Feedback for initial design included that it looked like a bench which could be dangerous if students used it as one. Also, it was pretty big and audience reach informed use that educators preferred carts that used minimal space."
            srcR={CAD3}
            altR="Rhino CAD Model of a scaled down iteration of Maker Cart"
            descR="2. Tried a scaled down version of cart to save supplies for first prototype."
          />
          <G2ImageCard
            srcL={MC0}
            altL="Photo of bins with different materials inside at Mission Science Workshop that were tested"
            descL="3. Tested supplies with a Maker Cart's space constraint at Mission Science Workshop in San Francisco."
            srcR={MC1}
            altR="Two photos of the scaled down version of the Maker Cart that was built with plywood "
            descR="4. Built 1/2 of Cart with CNC machine to see if the tool would make it fast/easy to build carts. Against expectations, it was not faster or easier. Tested cart at a public Mission Science event. The cart was too small & struggled to fit supplies."
          />
        </div>

        <h1 className="font-bold text-center  mt-10">Prototype 2</h1>
        <MiniDivider />

        <div>
          <G2ImageCard
            srcL={CAD4}
            altL="Screenshot of the second prototype's Rhino CAD Model"
            descL="1. Used lessons from prototype 1 to design second version of the cart: make cart bigger to accommodate more materials, the locked door is not needed, studier wheels, & people liked the soup containers and general layout"
            srcR={MC23}
            altR="Photo of the Maker Cart being built. The cart sits on a table with different clamps holding wood together to dry."
            descR="2. Built the cart using table saw, and drill press which created cleaner cuts and a more seamless process. The side pieces needed a jigsaw which is not hard, but may be a tricky task for beginner woodworkers (which is important because my goal is for student at my highschool to continue building carts after I graduate)"
          />
          <G2ImageCard
            srcL={MC2}
            altL="Photo of the built cart open with materials inside"
            descL="3. Materials fit in the cart, but it seemed a bit cramped."
            srcR={MC21}
            altR="Photo of the built cart closed. The closed side is covered with a black board paint and has different chalk doodles on it."
            descR="4. There was a lot of love for the blackboard side. It does leave a chalk dust mess, so we used a white board in the next cart design."
          />

          <div className="flex items-center justify-center flex-col ">
            <h1 className="font-bold text-center my-7">Featured Video of Prototype 2</h1>
            <p>The intention of this video was to introduce the Maker Cart project to my high school’s wood working class so that their students would continue to build carts after I graduate.</p>

            <div className="aspect-w-16 aspect-h-9 w-full h-full my-5">
              <iframe
                className="rounded border object-cover shadow-xl w-full aspect-video  "
                width="100%" height="100%"
                src="https://www.youtube.com/embed/1VzE2EJLPFQ?si=tj_PFbaPDp95UI4-"
              ></iframe>
            </div>

          </div>

          <p>Feedback: Interviewed the Librarian who is hosting the Maker Cart for feedback. She also interviewed the students. Her thoughts and the students' feedback can be found in this <a className="underline text-blue-500" href='https://docs.google.com/document/d/1177-oAzJJ8uyEo255quBCVW_H4REjcTi5DVfszdHfIQ/edit?usp=sharing'>GOOGLE DOC</a></p>
        </div>


        <h1 className="font-bold text-center mt-20">Prototype 3 (Current)</h1>
        <MiniDivider />

        <div>
          <G2ImageCard
            srcL={CAD5}
            altL="Screen shot of the third Maker Cart Rhino CAD"
            descL="1. Based on feedback from the Aptos Librarian and her students, changes included making the cart taller with more space between the bin shelves, adding a low bottom shelf for paper/other flat items, and handles on the cart. "
            srcR={SKT3}
            altR="Photo of a mini MDF cart prototype created using a laser cutter."
            descR="2. Tested additional interior layouts using MDF and laser cutter before building the cart. Ended up removing the top shelf for fear of items falling on kids trying to get materials bellow. Decided to keep the horizontal/vertical spacing from the previous design because it's the most effective layout to build based on wood-equipment and time."
          />
          <G2ImageCard
            srcL={MC4}
            altL="Photo of me screwing on the cart wheels"
            descL="3. Took about 2 months to build the two carts on a 2.5h a week schedule. An estimated total of 9 hours to create per cart (when you know the process), especially when you can build in bulk."
            srcR={MC6}
            altR="Photo of the newest cart open with materials inside"
            descR="4. Maker Cart at Visitacion Valley Public School. Materials did not completely fill up the cart, which is good because the librarian has space to add more types of supplies that his students like."
          />
        </div>


        <h1 className="font-bold text-center mt-5">Activity Cards</h1>
        <MiniDivider />

        <G2ImageCard
          srcL={ACT1}
          altL="Activity Card for Catapults with images and step by step instructions with images and text"
          descL="1. Example of the first iteration of the activity card design. Items are cramped together and it's hard to know what to look at. It's also text heavy which can be challenging for younger students."
          srcR={ACT2}
          altR="New activity card design with more images and less text whose prompts include building a tiny home and a mini basketball game"
          descR="2. Simplified design with more images and fewer inductions which encourages students to think and design for themselves. The activity cards assumes that the viewer speaks english. Yet many students are bilingual (Spanish is the most spoken langue after english in California)."
        />

        <div className="relative w-full pb-[77.2727%] shadow-sm mt-6 mb-3 overflow-hidden rounded-lg will-change-transform">
          <iframe
            loading="lazy"
            className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
            src="https://www.canva.com/design/DAFrFJbxcc4/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <p>3. Current activity card deck. The layout emphasize using images when possible (including photos of materials to help with language barriers and young students). Titles are in english and spanish to reflect that most of the schools we're targeting have a large spanish speaking population.</p>

        <SectionDivider />

        <SectionHeading>Lessons</SectionHeading>
        <div className="flex flex-col align-start">
          <h1 className="font-bold mt-5"> Build <i>with</i> not <i>for</i></h1>
          <p>As a designer, I've come to realize that if I'm not careful, I can inadvertently make assumptions about what works and what doesn't. I've made that mistake before, and with this project, I aimed to take the time to truly comprehend the situations, needs, and challenges of my target audience— the educators running the cart and the students using it. Schools are intricate environments, and without grasping some of the nuances, the maker cart concept could easily falter. Collaborating closely with the target audience might demand more time initially, but it significantly clarifies the design process in the later stages. Thanks to the small tests I conducted early on in this project, I was able to craft a product and quickly realize whether it resonated with the intended users.</p>
          <h1 className="font-bold mt-5"> Collaborate</h1>
          <p>One of the reasons I believe the project was able to fulfill its success criteria was thanks to the help and mentorship of multiple established organizations. Instead of starting from scratch, it's more effective and useful to find people who've tried what I've done and learn from them. An especially important collaborator for this project was Mission Science Workshop. They are a nonprofit that has been running science activities for 30 years. They have an amazing network of educators that they connected me with, and they generously let me use their space (and students) for tests. Moreover, they offered to continue connecting the Maker Carts with educators in the future and will oversee Maker Cart programming at the educators' respective schools.</p>
          <h1 className="font-bold mt-5"> Exploration</h1>
          <p>If I could redo the project, I'd change the process to be more explorative early on. I noticed that once I had a design, I mostly stuck to it and made changes based on feedback. As Ford Model, the creator of one of the first mass-produced vehicles, said, "If I had asked people what they wanted, they would have said faster horses." People may not know what they want, but they can tell me from a list of options. And I believe that I should have presented a more diverse variety of options for educators to choose from. I say this because while the Maker Cart works, there could have been another idea out there that is more effective. </p>
        </div>
      </div>
    </main>
  );
}
