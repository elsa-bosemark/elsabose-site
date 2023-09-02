import { useState } from 'react';
import Image from "next/image";
import TeacherSurvey from '@/public/maker-cart/teacher-survey.png'

// Define a type for the FAQ it
type G2Card = {
    question: string;
    answer: React.ReactNode; // Use React.ReactNode for the answer
};



const faqItems: G2Card[] = [
    {
        question: 'Educator Survey',
        answer: (
            <>
                <p>Created a google survey to explore what types of Maker content would be most useful for educators. Survey questions were peer-reviewed by two educators</p>
                <Image src={TeacherSurvey} alt="Teacher Survey Form" width="500" quality="95" className="h-50 w-50 rounded border object-cover shadow-xl my-5" />
                <p className="w-full text-left font-semibold"> Results</p>
                <p>Top reasons that would help educators do more Maker activities:</p>
                <p>• Having activity/project lesson plan ideas</p>
                <p>• Getting supplies for free</p>
                <p>• When offered Free Maker Cart, Educators 80% wanted it.</p>
                <p className="w-full text-left font-semibold">Quotes:</p>
                <p>"I currently store maker supplies in plastic boxes on a shelf. A cart would be fantastic!"</p>
                <p>"Makerspaces really depend on many factors - space available, actors involved (principal, teacher/facilitator, parents, and kids), time available (we do it in our once a week tech class for a month or so)."</p>
                <p className="w-full text-left font-semibold"> Conclusion</p>
                <p>• There is interest in Maker Carts</p>
                <p>• Maker Carts would need to be compact/small to fit in classroom</p>
                <p>• Maker Carts should be able to close to avoid loosing supplies</p>
                <p>• Materials should be unique and not stable items (ie magnet, hot glue gun etc)</p>
                <p>• Cart should include activity cards that ideally relates to school curriculum</p>
                <p></p>
            </>
        ),
    },
    {
        question: 'Educator Interviews',
        answer: (
            <>
                <p className="w-full text-left font-semibold pt-4">STEM educator @ West Portal Elementary</p>
                <p>• Challenges include not enough supplies or time with students</p>
                <p>• Important to give activity ideas & some structure</p>
                <p>• Label bins & make tools easily accessible to students (not hidden away)</p>
                <p className="w-full text-left font-semibold pt-4">Exhibit Developer @ Exploratorium</p>
                <p>• Soup containers are not effective use of space -- but good at making supplies seen and cheap</p>
                <p>• Don’t need a metal frame & wood should be 3/4 thick</p>
                <p>• Should use piano hinge to connect the Maker Car</p>
                <p>• To avoid falling over easily make it bottom heavy</p>
                <p className="w-full text-left font-semibold pt-4">Education Outreach Director @ Community Resources for Science</p>
                <p>• Biggest challenge of Maker Cart is lack of educator bandwidth since pandemic</p>
                <p>• Helpful to use activities & MakerCart at school before school adopts it so that educators understand how they can use Maker Cart.</p>
                <p className="w-full text-left font-semibold pt-4">Spanish Teacher @ Public High School </p>
                <p>• Think about mess & clean up -- how can you make it easier?</p>
                <p>• There would have to be a point person with the MakerCart who takes action if something breaks or missing supplies</p>
                <p className="w-full text-left font-semibold pt-4">Director of tech shops @ Lick Wilmerding High School</p>
                <p>• Try to make design easy to build (use CNC when can)</p>
                <p>• Document build process so that future students can replicate/be inspired</p>
            </>
        ),
    },
    // Add more faqItems as needed
];


export default function G2Card() {

    return (
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2">
            {faqItems.map((item, index) => (
                <div key={index} className="border p-4 rounded-md">
                    <div className="w-full text-left font-semibold">
                        {item.question}</div>
                    <div className="mt-2">{item.answer}</div>
                </div>
            ))}
        </div>
    );
}

