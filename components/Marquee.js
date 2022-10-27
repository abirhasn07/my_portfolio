
import Marquee from "react-fast-marquee";
export default function MarqueeComponent() {
    return (
        <Marquee pauseOnHover={true} direction="right" speed={100} gradient={false} >
            <div className="mt-8 border-t-[1px] border-b-[1px] border-accent cursor-grab">

                <h3 className="text__stroke uppercase text-[42px] lg:text-[72px] font-extrabold italic text-transparent">frontend engineer, Webflow developer, creative designer</h3>
            </div>
        </Marquee>
    )
}
