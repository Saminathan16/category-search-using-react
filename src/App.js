import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const images=[
    {id :'1', imageName:'bird1.jpg', tag: 'birds'},
    {id :'2', imageName:'food1.jpg', tag: 'food'},
    {id :'3', imageName:'place1.jpg', tag: 'places'},
    {id :'4', imageName:'wonder1.jpg', tag: 'wonders'},
    {id :'5', imageName:'bird2.jpg', tag: 'birds'},
    {id :'6', imageName:'food2.jpg', tag: 'food'},
    {id :'7', imageName:'place2.jpg', tag: 'places'},
    {id :'8', imageName:'wonder2.jpg', tag: 'wonders'},
    {id :'9', imageName:'bird3.jpg', tag: 'birds'},
    {id :'10', imageName:'food3.jpg', tag: 'food'},
    {id :'11', imageName:'place3.jpg', tag: 'places'},
    {id :'12', imageName:'wonder3.jpg', tag: 'wonders'},
    {id :'13', imageName:'bird4.jpg', tag: 'birds'},
    {id :'14', imageName:'food4.jpg', tag: 'food'},
    {id :'15', imageName:'place4.jpg', tag: 'places'},
    {id :'16', imageName:'wonder4.jpg', tag: 'wonders'}
  ];
  const [tag,setTag]=useState("");
  const [simage,setSimage]=useState([]);

  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(()=>{
    console.log(tag);
    if(tag === '')
       setSimage(images.slice(0,4))
    else if(tag=='food' || tag=='birds' || tag=='places' || tag=='wonders' )
      setSimage(images.filter(image=>image.tag===tag))
    else 
      setSimage(images.slice(0,4))
  },[tag]);



  return (
    <div className="container">
      <h1>Category-Search</h1>
      <div className="search">
        <input
          type="textfield"
          id="searchbox"
          variant="outlined"
          label="Search"
          onChange={handleChange}
        />
        <button
          type="button"
          id="search"
          name="tag"
          onClick={() => setTag(message)}
          >
            <i className="fa fa-search"></i>
          </button>
      </div><br/>
      <div>
        <button id="c" name="tag" value="food" onClick={() => setTag("food")} >Food</button>
        <button id="c" name="tag" value="wonders" onClick={() => setTag("wonders")} >Wonders</button>
        <button id="c" name="tag" value="birds" onClick={() => setTag("birds")}>Birds</button>
        <button id="c" name="tag" value="places" onClick={() => setTag("places")}>Places</button>
      </div>
      <br/>
      
      <div id="imagebox">
        {simage.map(image =>
        <div id='image'>
          <img src={`/img/${image.imageName}`} alt={tag}/>
          <div id="text" align="center">{tag}</div>
        </div>)}
      </div>
    </div>
  );
}

export default App;
