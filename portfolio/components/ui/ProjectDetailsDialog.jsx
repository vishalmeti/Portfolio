"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "./badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink, Link2Icon, Code, ListChecks, Layers } from "lucide-react";
import { AlertDialogDemo } from "@/components/ui/alert";
import { Button } from "./button";
import Reveal from "./Reveal";

const ProjectDetailsDialog = ({ project, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold flex items-center gap-3 mb-2">
            <Reveal>{project.name}</Reveal>
            <Badge className="uppercase text-xs font-medium">
              {project.category}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="mb-6 rounded-full relative">
            <TabsTrigger value="overview" className="flex items-center gap-2 relative z-10">
              <ExternalLink className="h-4 w-4" />
              Overview
              <span className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300 data-[state=active]:animate-pulse"></span>
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2 relative z-10">
              <ListChecks className="h-4 w-4" />
              Features
              <span className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300 data-[state=active]:animate-pulse"></span>
            </TabsTrigger>
            <TabsTrigger value="technologies" className="flex items-center gap-2 relative z-10">
              <Code className="h-4 w-4" />
              Tech Stack
              <span className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full -z-10 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300 data-[state=active]:animate-pulse"></span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="animate-in fade-in-50 duration-300">
            <div className="flex flex-col gap-6">
              <div className="w-full flex justify-center bg-tertiary dark:bg-secondary/40 bg-work_project_bg_light rounded-xl p-6 relative overflow-hidden">
                {/* Decorative dots */}
                <div className="absolute top-0 left-0 w-24 h-24 opacity-20">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_552_83)">
                      <path d="M6.66667 6.66667C6.66667 10.3485 3.68171 13.3333 0 13.3333C-3.68171 13.3333 -6.66667 10.3485 -6.66667 6.66667C-6.66667 2.98477 -3.68171 0 0 0C3.68171 0 6.66667 2.98477 6.66667 6.66667Z" fill="currentColor"/>
                      <path d="M6.66667 33.3333C6.66667 37.0152 3.68171 40 0 40C-3.68171 40 -6.66667 37.0152 -6.66667 33.3333C-6.66667 29.6515 -3.68171 26.6667 0 26.6667C3.68171 26.6667 6.66667 29.6515 6.66667 33.3333Z" fill="currentColor"/>
                      <path d="M6.66667 60C6.66667 63.6819 3.68171 66.6667 0 66.6667C-3.68171 66.6667 -6.66667 63.6819 -6.66667 60C-6.66667 56.3181 -3.68171 53.3333 0 53.3333C3.68171 53.3333 6.66667 56.3181 6.66667 60Z" fill="currentColor"/>
                      <path d="M6.66667 86.6667C6.66667 90.3485 3.68171 93.3333 0 93.3333C-3.68171 93.3333 -6.66667 90.3485 -6.66667 86.6667C-6.66667 82.9848 -3.68171 80 0 80C3.68171 80 6.66667 82.9848 6.66667 86.6667Z" fill="currentColor"/>
                      <path d="M33.3333 6.66667C33.3333 10.3485 30.3486 13.3333 26.6667 13.3333C22.9848 13.3333 20 10.3485 20 6.66667C20 2.98477 22.9848 0 26.6667 0C30.3486 0 33.3333 2.98477 33.3333 6.66667Z" fill="currentColor"/>
                      <path d="M33.3333 33.3333C33.3333 37.0152 30.3486 40 26.6667 40C22.9848 40 20 37.0152 20 33.3333C20 29.6515 22.9848 26.6667 26.6667 26.6667C30.3486 26.6667 33.3333 29.6515 33.3333 33.3333Z" fill="currentColor"/>
                      <path d="M33.3333 60C33.3333 63.6819 30.3486 66.6667 26.6667 66.6667C22.9848 66.6667 20 63.6819 20 60C20 56.3181 22.9848 53.3333 26.6667 53.3333C30.3486 53.3333 33.3333 56.3181 33.3333 60Z" fill="currentColor"/>
                      <path d="M33.3333 86.6667C33.3333 90.3485 30.3486 93.3333 26.6667 93.3333C22.9848 93.3333 20 90.3485 20 86.6667C20 82.9848 22.9848 80 26.6667 80C30.3486 80 33.3333 82.9848 33.3333 86.6667Z" fill="currentColor"/>
                    </g>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20 rotate-180">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_552_83)">
                      <path d="M6.66667 6.66667C6.66667 10.3485 3.68171 13.3333 0 13.3333C-3.68171 13.3333 -6.66667 10.3485 -6.66667 6.66667C-6.66667 2.98477 -3.68171 0 0 0C3.68171 0 6.66667 2.98477 6.66667 6.66667Z" fill="currentColor"/>
                      <path d="M6.66667 33.3333C6.66667 37.0152 3.68171 40 0 40C-3.68171 40 -6.66667 37.0152 -6.66667 33.3333C-6.66667 29.6515 -3.68171 26.6667 0 26.6667C3.68171 26.6667 6.66667 29.6515 6.66667 33.3333Z" fill="currentColor"/>
                      <path d="M6.66667 60C6.66667 63.6819 3.68171 66.6667 0 66.6667C-3.68171 66.6667 -6.66667 63.6819 -6.66667 60C-6.66667 56.3181 -3.68171 53.3333 0 53.3333C3.68171 53.3333 6.66667 56.3181 6.66667 60Z" fill="currentColor"/>
                      <path d="M6.66667 86.6667C6.66667 90.3485 3.68171 93.3333 0 93.3333C-3.68171 93.3333 -6.66667 90.3485 -6.66667 86.6667C-6.66667 82.9848 -3.68171 80 0 80C3.68171 80 6.66667 82.9848 6.66667 86.6667Z" fill="currentColor"/>
                      <path d="M33.3333 6.66667C33.3333 10.3485 30.3486 13.3333 26.6667 13.3333C22.9848 13.3333 20 10.3485 20 6.66667C20 2.98477 22.9848 0 26.6667 0C30.3486 0 33.3333 2.98477 33.3333 6.66667Z" fill="currentColor"/>
                      <path d="M33.3333 33.3333C33.3333 37.0152 30.3486 40 26.6667 40C22.9848 40 20 37.0152 20 33.3333C20 29.6515 22.9848 26.6667 26.6667 26.6667C30.3486 26.6667 33.3333 29.6515 33.3333 33.3333Z" fill="currentColor"/>
                      <path d="M33.3333 60C33.3333 63.6819 30.3486 66.6667 26.6667 66.6667C22.9848 66.6667 20 63.6819 20 60C20 56.3181 22.9848 53.3333 26.6667 53.3333C30.3486 53.3333 33.3333 56.3181 33.3333 60Z" fill="currentColor"/>
                      <path d="M33.3333 86.6667C33.3333 90.3485 30.3486 93.3333 26.6667 93.3333C22.9848 93.3333 20 90.3485 20 86.6667C20 82.9848 22.9848 80 26.6667 80C30.3486 80 33.3333 82.9848 33.3333 86.6667Z" fill="currentColor"/>
                    </g>
                  </svg>
                </div>
                
                <Image
                  src={project.image}
                  width={500}
                  height={350}
                  alt={project.name}
                  className="shadow-2xl rounded-lg transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="bg-tertiary/10 dark:bg-secondary/10 rounded-xl p-6 border border-primary/10">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="bg-primary/20 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  About This Project
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-2 border-t border-border pt-6">
                <Button variant="outline" asChild className="flex gap-2 transition-all hover:bg-primary/10">
                  <Link 
                    href={project.github} 
                    target={project.github !== "/" ? "_blank" : ""}
                    onClick={(e) => { project.github === "/" && e.preventDefault() }}
                  >
                    <AlertDialogDemo show={project.github === "/"} linkOf={'Github'}>
                      <span className="flex items-center gap-2">
                        <GitHubLogoIcon className="h-4 w-4" />
                        GitHub Repository
                      </span>
                    </AlertDialogDemo>
                  </Link>
                </Button>
                
                <Button variant="default" asChild className="flex gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300">
                  <Link 
                    href={project.link} 
                    target={project.link !== "/" ? "_blank" : ""}
                    onClick={(e) => { project.link === "/" && e.preventDefault() }}
                  >
                    <AlertDialogDemo show={project.link === "/"} linkOf={'Hosted'}>
                      <span className="flex items-center gap-2">
                        <Link2Icon className="h-4 w-4" />
                        Live Demo
                      </span>
                    </AlertDialogDemo>
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="animate-in fade-in-50 duration-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <ListChecks className="text-primary" />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {project.features ? (
                    project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 bg-tertiary/20 dark:bg-secondary/20 p-3 rounded-lg">
                        <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-center gap-2 bg-tertiary/20 dark:bg-secondary/20 p-3 rounded-lg">
                        <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Responsive design for all device sizes</span>
                      </li>
                      <li className="flex items-center gap-2 bg-tertiary/20 dark:bg-secondary/20 p-3 rounded-lg">
                        <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Modern UI/UX with clean aesthetics</span>
                      </li>
                      <li className="flex items-center gap-2 bg-tertiary/20 dark:bg-secondary/20 p-3 rounded-lg">
                        <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Optimized performance</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="technologies" className="animate-in fade-in-50 duration-300">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Layers className="text-primary" />
                Technology Stack
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column */}
                <div className="space-y-4">
                  <div className="bg-tertiary/10 dark:bg-secondary/10 rounded-xl p-6 border border-primary/10">
                    <h4 className="text-xl font-medium mb-3">Core Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack ? (
                        project.techStack.slice(0, Math.ceil(project.techStack.length/2)).map((tech, index) => (
                          <Badge key={index} variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">
                            {tech}
                          </Badge>
                        ))
                      ) : (
                        // Default tech stack based on project category
                        project.category === "react js" ? (
                          <>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">React</Badge>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">JavaScript</Badge>
                          </>
                        ) : project.category === "next js" ? (
                          <>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">Next.js</Badge>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">React</Badge>
                          </>
                        ) : project.category === "Django" ? (
                          <>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">Django</Badge>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">Python</Badge>
                          </>
                        ) : project.category === "Full stack" ? (
                          <>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">MERN Stack</Badge>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">MongoDB</Badge>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">Express.js</Badge>
                          </>
                        ) : (
                          <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">HTML/CSS</Badge>
                        )
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 p-6 rounded-xl">
                    <h4 className="text-xl font-medium mb-2">Development Process</h4>
                    <ul className="space-y-2 ml-4 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Design-first approach</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Component-based architecture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Responsive implementation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>Performance optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Right column */}
                <div className="space-y-4">
                  <div className="bg-tertiary/10 dark:bg-secondary/10 rounded-xl p-6 border border-primary/10">
                    <h4 className="text-xl font-medium mb-3">Supporting Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack ? (
                        project.techStack.slice(Math.ceil(project.techStack.length/2)).map((tech, index) => (
                          <Badge key={index} variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">
                            {tech}
                          </Badge>
                        ))
                      ) : (
                        // Default tech stack based on project category
                        project.category === "react js" ? (
                          <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">HTML/CSS</Badge>
                        ) : project.category === "next js" ? (
                          <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">JavaScript</Badge>
                        ) : project.category === "Django" ? (
                          <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">HTML/CSS</Badge>
                        ) : project.category === "Full stack" ? (
                          <>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">React</Badge>
                            <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">Node.js</Badge>
                          </>
                        ) : (
                          <Badge variant="outline" className="px-4 py-2 text-base bg-tertiary/10 dark:bg-secondary/20 hover:bg-primary/20 transition-colors">JavaScript</Badge>
                        )
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-tertiary/20 dark:bg-secondary/20 p-6 rounded-xl">
                    <h4 className="text-xl font-medium mb-2">Key Technical Highlights</h4>
                    <ul className="space-y-2 ml-4 text-muted-foreground">
                      {project.category === "Full stack" ? (
                        <>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>RESTful API implementation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>User authentication & authorization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Database design & optimization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Frontend-backend integration</span>
                          </li>
                        </>
                      ) : project.category === "react js" || project.category === "next js" ? (
                        <>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>State management</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Component reusability</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>API integration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Responsive design patterns</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Modular design patterns</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Cross-browser compatibility</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Performance optimization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span>Clean code architecture</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
