function ResearcherTile({image, name, role="Researcher"}) {
    return (
        <div className="h-[5rem] px-4 bg-brand-turqoise-300 rounded-xl">
            <div className="h-full flex items-center">
                <div className="w-[3.5rem] h-[3.5rem] bg-brand-turqoise-400 rounded-full mr-5"></div>
                <div className="flex flex-col">
                    <p className="text-white text-lg font-semibold">{name}</p>
                    <p className="text-white text-base font-light">{role}</p>
                </div>
            </div>
        </div>
    );
}

export default ResearcherTile;