import React from 'react'

const Gallery = () => {
  return (
    <section id = 'gal'>
        <h2>Gallery</h2>
            <ul>
                <li><img width={200} src="./src/assets/ME1.jpg" alt="picture1"></img></li>      
                <li><img width={200} src="./src/assets/ME2.jpg" alt="picture1"></img></li>
                <li><img width={200} src="./src/assets/ME3.jpg" alt="picture1"></img></li> 
            </ul>
        </section>
  )
}

export default Gallery