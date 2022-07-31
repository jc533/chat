const MsgTab = () => {
    const rooms = [
        { name: "群組", type: "group-", description: "Lorem, ipsum dolor." },
        { name: "群組", type: "group-", description: "Lorem, ipsum dolor." },
        { name: "個人", type: "", description: "Lorem, ipsum dolor." }
    ];
    return (
        <div id="add_rooms">
            {rooms.map((obj,id)=>(
            <a key={id} href="#" className="aside-item">
                <span className={`mdi mdi-account-${obj.type}outline text-gray-700 text-4xl mr-4`}></span>
                <div className="inline-block">
                    <h4 className="text-gray-900 text-lg">{obj.name}</h4>
                    <p className="text-gray-600">{obj.description}</p>
                </div>
            </a>
            ))}
        </div>
    )
}
export { MsgTab };