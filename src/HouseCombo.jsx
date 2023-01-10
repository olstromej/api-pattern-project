function HouseCombo({house}) {
    return(
        <div>
            <h1>{house.name}</h1>
            <h3>Founder:{house.founder}</h3>
            <h3>House:{house.houseColours}</h3>
            <h3>House Ghost:{house.ghost}</h3>
            <h3>Common Room:{house.commonRoom}</h3>
            <h3>House Element:{house.element}</h3>
            
        </div>
    )
}

export default HouseCombo;