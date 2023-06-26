import './Home.css';

const Home = () => {
  return (
    <div id="Home" className="Home">
        <picture className="Home-container">
       <source media="(max-width:684px)" srcset="MH-SMALL.jpg"></source>
       <img class="Home-img" src="MH-LARGE.jpg"></img>
        </picture>
    </div>
  )
}

export default Home