"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const bgColors = ['bg-yellow-300', 'bg-purple-400', 'bg-green-400', 'bg-cyan-300', 'bg-pink-400', 'bg-orange-400'];

  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 pb-8"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className={`p-8 rounded-2xl border-[3px] border-black ${bgColors[(i + index) % bgColors.length]} shadow-[8px_8px_0_0_#0F172A] max-w-xs w-full relative group`} 
                  key={i}
                >
                  {/* Neobrutalist Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border-[3px] border-black rounded-lg flex items-center justify-center shadow-[3px_3px_0_0_#0F172A] transform -rotate-12 group-hover:rotate-0 transition-transform">
                    <span className="font-black text-2xl leading-none">"</span>
                  </div>

                  <div className="font-bold text-black leading-relaxed text-lg mb-6">
                    {text}
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t-[3px] border-black/20">
                    <div className="p-0.5 bg-white border-[3px] border-black rounded-xl overflow-hidden flex-shrink-0 shadow-[2px_2px_0_0_#0F172A]">
                      <img
                        width={44}
                        height={44}
                        src={image}
                        alt={name}
                        className="h-11 w-11 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-black tracking-tight leading-none text-sm uppercase text-black">{name}</div>
                      <div className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded mt-2 inline-block w-fit uppercase tracking-wider">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
