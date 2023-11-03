export default function Components({onClick, name,age,id}){
    console.log(onClick)
    return <div  onClick={onClick}>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{id}</h1>
    </div>

}