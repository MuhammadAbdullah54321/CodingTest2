import React, {useState, useEffect} from 'react'

import Image1 from './assets/Image1.jpeg'
import Image2 from './assets/Image2.jpg'
import Image3 from './assets/Image3.png'
import Image4 from './assets/Image4.jpg'
import Image5 from './assets/Image5.jpg'


const App = () => {
  //this is the solution to the problem that dynamically giving source to img is not possible in react
  const imagesArray1 = [Image1, Image2, Image3, Image4, Image5]
  const imagesArray2 = ['Image1', 'Image2', 'Image3', 'Image4', 'Image5']

  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState()
  const [currentImage, setCurrentImage] = useState()

  useEffect(() =>[
    getData()
  ], [])

  const getData = () =>{
    fetch("http://localhost:3000/retrieve-img")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("This is data", result[0])
          setData(result[0])
          let x = imagesArray2.indexOf(result[0].name)
          setCurrentImage(imagesArray1[x])
        },
        (error) => {
          console.log("We are getting this error", error)
        }
      ).then(setIsLoaded(true))
  }

  return (
    <div >
      <h1>Welcome to this awesome random image displaying app</h1>
      {isLoaded ?
                  <div style={{marginLeft: 20}}>
                    <p><b>Image id:</b> {data?.id}</p>
                    <p><b>Image name:</b> {data?.name}</p>
                    <p><b>Image brand:</b> {data?.brand}</p>
                    <p><b>Image description:</b> {data?.description}</p>
                    <img alt={"here is "} src={currentImage} width={400} height={300}/>
                  </div> 
                  : "Lodaing ..."}
      <button style={{margin: 15,  }} onClick={getData}>
        <>Load new image</>
      </button>
    </div>
  );
}

export default App;
