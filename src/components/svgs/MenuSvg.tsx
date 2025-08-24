export default function MenuSvg({width="32px", height="auto", color="currentColor"}:{width?: string, height?: string, color?: string}) {
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" 
        fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M4 12H20M4 8H20M4 16H12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            </g>
        </svg>
    )
}