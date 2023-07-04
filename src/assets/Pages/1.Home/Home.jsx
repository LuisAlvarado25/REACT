import './Home.css';

const Home = () => {
  return (
    <div id="Home" className="Home">
        <picture className="Home-container">
       <source media="(max-width:684px)" srcSet="MH-SMALL.jpg"></source>
       <img className="Home-img" src="MH-LARGE.jpg"></img>
        </picture>
    </div>
  )
}

export default Home