import Button from "../components/Button";

const Home = () => {
    return (
        
        <div className="landing-page">
            <h1 style={{color:'#219ebc',fontSize:'50px',display:'flex'}}>Your idea matters</h1>
            <p style={{color:'#ffb703',fontSize:'20px'}} >Welcome to my wesbite,<br />this is the simple landing page.</p>
            <Button label="Home Button" onClick={()=>alert("home")}/>
        </div>
           
    
    )
}
export default Home;