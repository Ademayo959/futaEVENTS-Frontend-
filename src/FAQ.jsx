import { useState } from "react";

const FAQ = ({faqs}) => {
    
    const [openIndex, setOpenIndex] = useState(null)
    return (
        <div className="font-bricolage mb-18">
            <div>
                <div className="justify-self-center border bg-white border-gray-300 rounded-2xl mt-12 grid max-sm:px-2 max-md:bg-transparent max-md:border-0">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 w-150 p-3 max-sm:w-full max-sm:p-1">
                            <div className="flex items-center justify-between p-2" onClick={() => setOpenIndex(openIndex == index ? null : index)}>
                                <p className="text-black">{faq.question}</p>
                                <span className="ml-4">{openIndex === index ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }</span>
                            </div>
                            <div className={`overflow-hidden transition-all duration-400 ${openIndex == index ? `max-h-90 opacity-100` : `max-h-0 opacity-0`}`}>
                                <p className="p-2 text-gray-500">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;