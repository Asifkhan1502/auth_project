import Button from "../components/Button";

const Home = () => {
    return (
        <div>
            Home Page
            <Button label="Home Button" onClick={()=>alert("home")}/>
        </div>
    )
}
export default Home;