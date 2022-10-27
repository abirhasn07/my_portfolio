import Subtitle from "./Subtitle"


const Skills = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Subtitle title={"Skills & technology 🚀"} />
            <div className="flex justify-between items-center flex-wrap mt-8 flex-col-reverse lg:flex-row">
                <article className="lg:w-[40%] text-center text-base text-accent leading-[110%]">
                    {
                        ` I Have worked on multiple projects, building out UI with close attention to details. I've also had the opportunity to work with different frameworks like React and next, Astro while constantly learning to improve my skillsets.`
                    }
                </article>

                <aside className="list-none lg:w-[40%] flex flex-wrap justify-center gap-2 ">
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">HTML5</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">CSS3</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">SASS</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">JAVASCRIPT</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">REACT JS</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">NEXT JS</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">ASTRO</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">FIGMA</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">TAILWIND</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">MUI </li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">BOOTSTRAP</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">STYLE COMPONENTS</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">CHAKRA UI</li>

                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">GITHUB</li>
                    <li className="bg-secondary w-fit text-center py-2 px-2 text-white rounded">WEBFLOW</li>

                </aside>
            </div>
        </div>
    )
}

export default Skills