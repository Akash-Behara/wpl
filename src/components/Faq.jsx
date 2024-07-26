import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

const faq = [
    {title: 'Is there a free trial available', content: 'Yes. It adheres to the WAI-ARIA design pattern.'},
    {title: 'Is there a free trial available', content: 'Yes. It adheres to the WAI-ARIA design pattern.'},
    {title: 'Is there a free trial available', content: 'Yes. It adheres to the WAI-ARIA design pattern.'},
    {title: 'Is there a free trial available', content: 'Yes. It adheres to the WAI-ARIA design pattern.'},
    {title: 'Is there a free trial available', content: 'Yes. It adheres to the WAI-ARIA design pattern.'},
]

const Faq = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[105vh]'>
        <div>
            <h1 className='text-pretty font-gridular text-[#FAF1B1] text-[48px] leading-[45px]'>FAQ</h1>
        </div>

        <div className='min-w-[350px] md:min-w-[500px] lg:min-w-[912px] mt-14'>
            <Accordion type="single" collapsible>
                {faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-[#E4E7EC1A] mb-4">
                        <AccordionTrigger className="text-white text-[18px] font-medium hover:no-underline">{item.title}</AccordionTrigger>
                        <AccordionContent className="text-white">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}             
            </Accordion>
        </div>
    </div>
  )
}

export default Faq