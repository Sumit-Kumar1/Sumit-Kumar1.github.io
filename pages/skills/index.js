import Card from "../../components/card"
import ProjectCard from "../../components/projectCard"

import { TbBrandCpp, TbBrandGolang, TbBrandCSharp, TbBrandPython, TbBrandMysql, TbBrandJavascript } from "react-icons/tb"

export default function Skills() {
  return (
    <div className="flex flex-col items-center mt-5 m-2 -mb-1 gap-5">
      <h2 className="text-2xl text-center text-primary divider">
        Programming Languages
      </h2>
      <div className="flex mobile:flex-col flex-row gap-5 md:flex-row flex-wrap items-center justify-center">
        <Card text="GO" icon={<TbBrandGolang size={64} />} percent="80" expLevel="Advance Industury Level" exp="2 year" />
        <Card text="CPP" icon={<TbBrandCpp size={64} />} percent="70" expLevel="Project Level" exp="3 year" />
        <Card text="C#" icon={<TbBrandCSharp size={64} />} percent="50" expLevel="Project Level" exp="1 year"/>
        <Card text="Python" icon={<TbBrandPython size={64} />} percent="75" expLevel="Project Level" exp="2 year"/>
        <Card text="MySQL" icon={<TbBrandMysql size={64} />} percent="85" expLevel="Project Level" exp="2 year"/>
        <Card text="JavaScript" icon={<TbBrandJavascript size={64} />} percent="80" expLevel="Project Level" exp="2 year"/>
      </div>
      <h2 className="text-2xl text-center text-primary divider">
        Projects
      </h2>
      <div className="flex mobile:flex-col flex-row gap-5 md:flex-row flex-wrap items-center justify-center">
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      </div>
    </div>
  );
}