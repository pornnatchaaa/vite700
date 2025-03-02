const Tech = ({isHighLight, data}) => {
    return (
        <div className="flex gap-4 text-sm">
            {
                data.map((e, i) =>(
                    <div key={`${e}-tech-${i}`} className={`bg-pink-200 px-2 py-1 rounded-md ${isHighLight ? "text-primaryTitle" : ""}`}>{e}</div>
                ))
            }        
        </div>
    )
}

export default Tech;