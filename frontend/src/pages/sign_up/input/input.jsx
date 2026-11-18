import "./input.css"
export default function InputObraznic(props){

    const {text, image, setThing} = props;


    const handleChange = (e) => {
        setThing(e.target.value);
    }
    return(
    <div className="input-wrapper">
        <img src={image} />
        <input type="text" placeholder={text} onChange={handleChange}></input>
    </div>
    )
}