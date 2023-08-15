import Card from "../../components/card"

export default function Skills() {
    return (
        <div class="flex flex-co m-auto p-auto">
        <h1
                class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-center"
              >
                I am Skilled at ... 
              </h1>
              <div
                class="flex overflow-x-scroll pb-10 hide-scroll-bar"
              >
                <div
                  class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
                >
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                 <Card/>
                </div>
              </div>
              </div>
    );
}