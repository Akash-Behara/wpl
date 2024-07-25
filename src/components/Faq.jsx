import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

const Faq = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-pretty font-gridular text-[#FAF1B1] text-[48px]'>FAQ</h1>
        </div>
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Faq