
const Color = () => {
    const colorData = [
        {
            color: "bg-red-300",
        },
        {
            color: "bg-blue-300",
        },
        {
            color: "bg-yellow-300",
        },
        {
            color: "bg-[#687EFF]",
        },
        {
            color: "bg-blue-300",
        },
        {
            color: "bg-red-300",
        },
        {
            color: "bg-red-300",
        },
        {
            color: "bg-blue-300",
        },
        {
            color: "bg-yellow-300",
        },
        {
            color: "bg-[#687EFF]",
        },
        {
            color: "bg-blue-300",
        },
        {
            color: "bg-red-300",
        },
    ]
    return (
        <div>
            <p className="text-sm font-medium my-4">Color Changes</p>
            <div className="grid grid-cols-6 gap-2 my-6">
                {colorData?.map((item,idx) => (
                    <div key={idx} className={`w-[30px] h-[30px]  rounded-full ${item?.color}`}>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Color
