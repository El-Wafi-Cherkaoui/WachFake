export default function Statistic({percentage, text}: {percentage: string, text: string}){
    return <p>
        <span className="my-auto">{percentage}</span>
        <i className="my-auto font-tajawal">
            {text}
        </i>
    </p>
}