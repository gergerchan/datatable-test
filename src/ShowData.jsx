const ShowData = ({data}) => {
    return (
        <div>
            <h1>Data</h1>
            <h2>Name : {data.name}</h2>
            <h2>Addres : {data.address}</h2>
        </div>
    )
}

export default ShowData
