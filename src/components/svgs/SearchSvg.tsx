"use client"
export default function SearchSvg({color="currentColor", width="32px", height="auto"}: {color?: string, width?: string, height?: string}) {
    return(
        <svg width={width} height={height} viewBox="0 2 39 39" 
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6875 34.125C27.2134 34.125 34.125 27.2134 34.125 18.6875C34.125 10.1616 27.2134 3.25 18.6875 3.25C10.1616 3.25 3.25 10.1616 3.25 18.6875C3.25 27.2134 10.1616 34.125 18.6875 34.125Z" fill={color}/>
            <path d="M34.6133 35.7477C34.3208 35.7477 34.0283 35.634 33.8171 35.4227L30.7946 32.4002C30.3558 31.9615 30.3558 31.2465 30.7946 30.7915C31.2333 30.3527 31.9483 30.3527 32.4033 30.7915L35.4258 33.814C35.8646 34.2527 35.8646 34.9677 35.4258 35.4227C35.1983 35.634 34.9058 35.7477 34.6133 35.7477Z" fill={color}/>
        </svg>
    )
}