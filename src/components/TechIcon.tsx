import { IconType } from "react-icons"

type TechIconProps = {
    IconElement: IconType,
    tooltip: string,
    animation?: string | null,
    color?: string | null
}

export function TechIcon({ IconElement, tooltip, animation, color } : TechIconProps) {

    return (
        <div className="relative group cursor-help">
            <span className={`relative text-[${color !== null ? color : "#56b0bc"}] text-[1.5rem]`}>
                <IconElement className={`${animation && animation}`}/>
            </span>
            <span className="absolute opacity-0 group-hover:opacity-60 bg-slate-500 text-white text-[0.75rem] left-1/2 -translate-x-1/2 group-hover:translate-y-1 p-1 w-[6rem] rounded-full transition-all duration-300 ease-in-out">{tooltip}</span>
        </div>
    )
}