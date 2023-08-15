import Card from "../../components/card"
import {TbBrandCpp, TbBrandGolang, TbBrandCSharp, TbBrandPython, TbBrandMysql} from "react-icons/tb"

export default function Skills() {
  return (
    <div className="flex flex-col m-auto p-auto md:w-7/12">
      <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-2xl text-center">
        Programming Languages
      </h1>
      {/* cards carousel*/}
      <div class="flex overflow-x-scroll pb-10">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          <Card Text="GO" icon={<TbBrandGolang size={128}/>} Desc="Experienced at professional level"/>
          <Card Text="CPP" Img={<TbBrandCpp size={64}/>} Desc="Experienced Project Level"/>
          <Card Text="C#" Img={<TbBrandCSharp size={128}/>} Desc="Experienced Project Level"/>
          <Card Text="Python" Img={<TbBrandPython size={128}/>} Desc="Experienced Project Level"/>
          <Card Text="SQL" Img={<TbBrandMysql size={128}/>} Desc="Experienced Project Level"/>
        </div>
      </div>
    </div>
  );
}