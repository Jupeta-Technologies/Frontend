import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <div>
        <div className='container2'>
        <div className='smallimgsection'>
            <div className='smallimgone'>
              <h3>Image 1</h3>
            </div>
            <div className='smallimgone'>
              <h3>Image 2</h3>
            </div>
            <div className='smallimgone'>
              <h3>Image 3</h3>
            </div>
            <div className='smallimgone'>
              <h3>Image 4</h3>
            </div>
            <div className='smallimgone'>
              <h3>Image 5</h3>
            </div>
        </div>
        <div className='bigimgsection'>  
            <h3>Big image will be displayed here</h3>
        </div>
        <div className='descriptionsection'>
          <div className='nameprice'>
            <h3>Product Name</h3>
            <br />
            <h3>Product Price</h3>
          </div>
          <div>
            <Link to='/login'>
              <button className='signinbtn'>Sign In To Buy</button>
            </Link>
          </div>
          <div>
            <button className='favoritebtn'>Favourite ()</button>
          </div>
          <div className='actualdesc'>
            <h3>Description Here...to be updated</h3>
            <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
      </div>
      <div className='container3'>
        <div className='sectiontwo'>
        <h3>YOU MAY ALSO LIKE</h3><br />
          <div className='sectiontwoprod'>
            <h3>first product here</h3>
          </div>
          <div className='sectiontwoprod'>
            <h3>second product here</h3>
          </div>
          <div className='sectiontwoprod'>
            <h3>third product here</h3>
          </div>
          <div className='sectiontwoprod'>
            <h3>fourth product here</h3>
          </div>
        </div>
        <div className='sectionthree'>
        <h3>OTHERS ALSO BOUGHT</h3><br />
          <div className='sectionthreeprod'>
            <h3>first product here</h3>
          </div>
          <div className='sectionthreeprod'>
            <h3>second product here</h3>
          </div>
          <div className='sectionthreeprod'>
            <h3>third product here</h3>
          </div>
          <div className='sectionthreeprod'>
            <h3>fourth product here</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage