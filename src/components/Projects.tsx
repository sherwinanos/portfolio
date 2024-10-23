"use client"

import SectionHeadline from './custom/SectionHeadline'
import { TfiNewWindow } from "react-icons/tfi";
import dataProjects from "@/components/data/projects.json"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const Projects = () => {
  const headlineData = {
    eyebrow: "Recent Projects",
    headline: "Showcasing My Work",
    subHeadline: "A few works from earlier where I applied my web design and front-end development skills. I share these projects to express my dedication in building visually engaging sites that also serve the needs of the business.",
  }

  return (
    <div id="projects" className="section-container section-dark">
      <SectionHeadline data={headlineData} />
      
      <div className="container px-4 lg:mx-auto">
        <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
          {dataProjects.map((item:any, i:number) => (
            <Dialog key={i}>
              <DialogTrigger>
                <div className="flex flex-col items-start">
                  <img 
                    src={item.projThumbnail} 
                    alt={`${item.projName} image`} 
                    className="w-[100%] rounded-lg"
                    width="340"
                    height="194"
                  />
                  <h4 className="text-primary mt-4 mb-">{item.projName}</h4>
                  <p className="text-tertiary-lightest uppercase text-sm">{item.projCategory}</p>
                </div>
              </DialogTrigger>

              <DialogContent className="bg-secondary-dark border-0 max-w-screen-xl max-h-full">
                <div className="flex py-6 px-4">
                  <div className="w-4/12">
                    <div>
                      <h3>{item.projName}</h3>
                      <p className="uppercase tracking-widest mt-2 text-sm">{item.projCountry}</p>
                    </div>

                    <div className="mt-4">
                      <p className="uppercase opacity-60 tracking-wider"><small>Project Category</small></p>
                      <p>{item.projCategory}</p>
                    </div>

                    <div className="mt-4">
                      <p className="uppercase opacity-60 tracking-wider"><small>Project Under</small></p>
                      <p>{item.projUnder}</p>
                    </div>

                    <div className="mt-4">
                      <p className="uppercase opacity-60 tracking-wider"><small>Technology Stacks</small></p>
                      <div className="flex flex-wrap gap-2">
                        {item.projStacks.map((stack: any, i: number) => (
                          <span key={i} className="bg-secondary-light leading-none py-2 px-2 text-xs uppercase">{stack}</span>
                        ))}
                      </div>
                    </div>

                    {item.projDescription &&
                      <div className="mt-4">
                        <p className="uppercase opacity-60 tracking-wider"><small>Project Description</small></p>
                        <p>{item.projDescription}</p>
                      </div>
                    }

                    <div className="mt-6">
                      <a 
                        href={item.projUrl ? item.projUrl : ''} 
                        className={item.projUrl
                          ? "btn btn-small btn-icon btn-primary"
                          : "hidden"
                        }
                        target="_blank"
                      >
                        Launch {item.projName} <TfiNewWindow />
                      </a>
                    </div>
                  </div>
                  
                  <div className="w-8/12 h-[720px] overflow-y-scroll">
                    <img src={item.projImage} alt={`${item.projName}`} />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="flex justify-center mt-6 lg:mt-12">
          <a href="/portfolio.pdf" className="btn btn-icon btn-primary" target="_blank">View my portfolio <TfiNewWindow /></a>
        </div>
      </div>
    </div>
  )
}

export default Projects

