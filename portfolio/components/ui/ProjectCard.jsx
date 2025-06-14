"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./card";
import { Link2Icon } from "lucide-react";
import { Badge } from "./badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Reveal from "./Reveal";
import { Toaster } from "sonner";
import { AlertDialogDemo } from "@/components/ui/alert";
import ProjectDetailsDialog from "./ProjectDetailsDialog";

const ProjectCard = ({ project, showBadge }) => {
  return (
    <>
      <ProjectDetailsDialog project={project}>
        <Card className="h-[520px] cursor-pointer transition-all hover:scale-[1.02] duration-300 hover:shadow-xl relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>

          {/* View Details overlay that appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <div className="bg-primary/80 dark:bg-primary/90 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
          </div>

          <CardHeader className="group overflow-hidden relative p-1">
            {/* image  */}
            <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 bg-work_project_bg_light bg-[50%] lg:bg-[110%] bg:no-repeat overflow-hidden">
              <Image
                className="absolute botom-0 shadow-2xl rounded-[15px] transition-transform duration-300 group-hover:scale-105"
                src={project.image}
                width={247}
                height={250}
                alt="project ui"
                property
              />

              {/* btns  */}
              <div className="flex gap-x-4">
                <Link
                  href={project.link}
                  target={project.link !== "/" ? "_blank" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    project.link === "/" ? e.preventDefault() : "";
                  }}
                  className="bg-black dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                >
                  <AlertDialogDemo show={project.link === "/"} linkOf={'Hosted'} >
                    <Link2Icon className="text-white" />
                  </AlertDialogDemo>
                </Link>
                <Link
                  href={project.github}
                  target={project.github !== '/' ? "_blank" : ''}
                  onClick={(e) => {
                    e.stopPropagation();
                    project.github === "/" ? e.preventDefault() : "";
                  }}
                  className="bg-black dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                >
                  <AlertDialogDemo show={project.github === "/"} linkOf={'Github'} >
                    <GitHubLogoIcon
                      className="text-white "
                      width={50}
                      height={50}
                    />
                  </AlertDialogDemo>
                </Link>
              </div>
            </div>
          </CardHeader>
          <div className="h-full px-8 py-4">
            <div className="flex items-center justify-between">
              <Badge
                className={`uppercase text-sm font-medium mb-2 absolute top-4 left-5  ${showBadge ? "" : "hidden"
                  }`}
              >
                {project.category}
              </Badge>

              <div className="absolute top-4 right-5 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Details
              </div>
            </div>

            <h4 className="h4 mb-1">
              <Reveal>{project.name}</Reveal>
            </h4>
            <p className="text-muted-foreground text-lg line-clamp-3 overflow-hidden">{project.description}</p>
          </div>
        </Card>
      </ProjectDetailsDialog>
      <Toaster position="top-center" richColors />
    </>
  );
};

export default ProjectCard;
