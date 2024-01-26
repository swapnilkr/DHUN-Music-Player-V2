function SimilarBrand() {

    const brandInfo = [
        {
            id: 1,
            imgSrc: '/band/one d.jpg',
            name: 'One Direction'
        },
        {
            id: 2,
            imgSrc: '/band/local train.jpg',
            name: 'The Local Train'
        },
        {
            id: 3,
            imgSrc: '/band/cs.jpg',
            name: 'Chainsmoker'
        },
    ]

    return (
        <>
            <div className="similar">
                <div className="section-heading">
                    <h1>Similar Bands</h1>
                    <div className="view-all-button">
                        View All
                    </div>
                </div>
                <>
                    <div className="list">
                        {brandInfo.map((item,index) => (

                            <div key={index} className="list-item">
                                <div>
                                    <img src={item.imgSrc} />
                                    <div className="play-btn">
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                                <div style={{ position: "absolute", left: "120px" }}>
                                    <h5>
                                        {item.name}
                                    </h5>

                                </div>
                            </div>


                        ))}
                    </div>
                </>
            </div>
        </>
    )
}

export default SimilarBrand