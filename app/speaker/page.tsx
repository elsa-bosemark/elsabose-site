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

import finalSpeaker from '@/public/speaker/final.png'
import circuits1 from '@/public/speaker/Circuits1.png'
import solder1 from '@/public/speaker/solder1.png'
import solder2 from '@/public/speaker/solder2.png'
import speakerCAD1 from '@/public/speaker/SpeakerCAD1.png'
import speakerCAD2 from '@/public/speaker/SpeakerCAD2.png'
import speakerCAD3 from '@/public/speaker/SpeakerCAD3.png'
import speakerCardboard from '@/public/speaker/SpeakerCardboard.jpg'
import speakerMDF1 from '@/public/speaker/SpeakerMDF1.jpg'
import speakerMDF2 from '@/public/speaker/SpeakerMDF2.png'
import sketch from '@/public/speaker/sketch.png'

import { BsArrowRight } from "react-icons/bs";

// SPEAKER
export default function Home() {

  return (
    <main className="flex justify-center ">
      <BackButton />

      <div className="flex items-center justify-center flex-col lg:max-w-[50rem] md:max-w-[40rem] sm:max-w-[35rem] xs:max-w-[10rem] px-5">

        <SectionHeading>Bluetooth Speaker</SectionHeading>
        <p>Designed and developed a bluetooth speaker used for alumni showcase at high school.</p>
        <div className="flex flex-col md:flex-row align-center justify-center mt-5">
          <div className="md:mr-4">
            <h1 className="font-bold text-center">Idea</h1>

            <Image
              src={sketch}
              alt="Sketch different designs for the speaker encasing"
              width="500"
              quality="95"
              className="h-50 w-50 rounded border object-cover shadow-xl my-5"
            />
          </div>

          <div className="hidden md:flex justify-center items-center opacity-80 mx-4 text-2xl">
            <BsArrowRight />
          </div>

          <div className="md:ml-4">
            <h1 className="font-bold text-center">Final</h1>
            <Image
              src={finalSpeaker}
              alt="Photo of Built Speaker with Bluetooth"
              width="500"
              quality="95"
              className="h-50 w-50 rounded border object-cover shadow-xl my-5"
            />
          </div>
        </div>

        <div>
          <p className="mb-3"><span className="font-medium">Timeline:</span> 1 month</p>
          <p className="mb-3"><span className="font-medium">My Role:</span> Designer, Creator </p>
          <p className="mb-3"><span className="font-medium">Goal:</span> Create a beautiful speaker encasing </p>
          <p className="mb-3"><span className="font-medium">Constraints:</span> Limited access to material: circuitry, acrylic, and MDF board</p>
        </div>

        <SectionDivider />

        <SectionHeading>Iteration Process</SectionHeading>
        <h1 className="font-bold text-center">Success Criteria</h1>
        <div className="justify-start py-5">
          <p>• Create a working breadboard speaker with bluetooth ability</p>
          <p>• Design a beautiful encasing</p>
        </div>

        <h1 className="font-bold text-center mt-10">Electronics</h1>
        <MiniDivider />
        <div>
          <Image
            src={circuits1}
            alt="Three images showing amplifier circuit schematic, amplifier circuit board, and the PCB"
            className="h-50 w-50 rounded border object-cover shadow-xl my-5"
          />
          <p>Designed the PCB circuit using Eagle software, while referencing a speaker schema. PCB was out sourced for production.</p>
          <G2ImageCard
            srcL={solder1}
            altL="Image of the bread board and alligator wires connecting components "
            descL="1. Testing the speaker schema using a breadboard and alligator clips."
            srcR={solder2}
            altR="Progress photo of soldering components onto the PCB board."
            descR="2. Soldering components onto the PCB board."
          />
        </div>
        <h1 className="font-bold text-center">Sketches</h1>
        <MiniDivider />
        <Image
          src={sketch}
          alt="Different sketches of speaker encasing designs"
          className="w-full h-auto rounded border object-cover shadow-xl my-5"
        />

        <h1 className="font-bold text-center mt-10">CAD Modeling</h1>
        <MiniDivider />
        <div>
          <G2ImageCard
            srcL={speakerCAD3}
            altL="A Rhino CAD Model of speaker design from top view"
            descL=""
            srcR={speakerCAD2}
            altR="Isometric Rhino model of the speaker"
            descR=""
          />
          <Image
            src={speakerCAD1}
            alt="Another isometric view of the speaker CAD model"
            className="w-full h-auto rounded border object-cover shadow-xl my-5"
          />
          <p>Created the speaker design in Rhino and used the dxf file to laser cut the encasing. Utilized the split and boolean Rhino functions.</p>
        </div>

        <h1 className="font-bold text-center mt-10">Prototyping</h1>
        <MiniDivider />
        <div>
          <G2ImageCard
            srcL={speakerCardboard}
            altL="The speaker encasing made out of cardboard and tape"
            descL=""
            srcR={speakerMDF2}
            altR="Speaker encasing built from MDF"
            descR=""
          />
          <Image
            src={speakerMDF1}
            alt="Another angle of the speaker encasing built from MDF"
            className="w-full h-auto rounded border object-cover shadow-xl my-5"
          />
          <p>Used laser cutter to test cut on cardboard and MDF; checked size and assembly process.</p>
        </div>

        <h1 className="font-bold text-center mt-10">Final</h1>
        <MiniDivider />
        <div>
          <Image
            src={finalSpeaker}
            alt="Final encasing sprayed painted white and layered acrylic"
            className="w-full h-auto rounded border object-cover shadow-xl my-5"
          />
          <p>Assembled the layered acrylic and electronic components; spray painted encasing. </p>
        </div>

        <SectionDivider />

        <SectionHeading>Lessons</SectionHeading>
        <div className="flex flex-col align-start">
          <h1 className="font-bold mt-5">Understanding the Mechanics</h1>
          <p>A neat aspect about the circuit is that it uses AC (energy goes back and forth) to create the oscillation needed for the speakers to vibrate and make sound. Furthermore the translation of electrical pulses into detectable signals is possible thanks to OpAmps (yay OpAmps!).</p>
          <h1 className="font-bold mt-5"> I love Prototyping</h1>
          <p>Prioritizing prototyping with inexpensive materials before incorporating high-quality ones is a strategic approach crucial in design and innovation. Cheap materials allow for rapid iteration, experimentation, and refinement without significant financial investment. I tested the speaker design on cardboard and MDF before using the acrylic, allowing me to minimize cost and time spent on the speaker.</p>
        </div>
      </div>
    </main>
  );
}
