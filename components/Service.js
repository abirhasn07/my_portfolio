import { serviceData } from "../data/data";
import Subtitle from "./Subtitle";

export default function Service() {
    return (
        <div className="mt-12 w-[90%] mx-auto">
            <Subtitle title={"My Services & Expertise 🤖"} />
            <div className="mt-8 flex flex-wrap gap-2">
                {
                    serviceData.map((item, index) => {
                        return (
                            <figure key={index} className="basis-[32%] text-center border-[1px] rounded border-accent p-[5px]">
                                <figcaption className="text-base">
                                    {item.title}
                                </figcaption>
                                <p>{item.description}</p>
                            </figure>
                        )
                    })
                }
            </div>
        </div>
    )
}
