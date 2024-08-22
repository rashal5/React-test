import React from 'react'
import './testcss.css';
/* this have sm,lg,xxl,xl size for the container */
function TestB() {
  return (
    <div>
      /* /* test for the container start*/ */
      <div className='container'>
        <p>normal container</p>
      </div>

      <div className="container-sm">
      <p>This is an test for container</p>
      </div>
      <div className="container-xl">
      <p>This is an test for container</p>
      </div>
      <div className="container-xxl">
      <p>This is an test for container</p>
      </div>

      <div className='container-fluid'>
        <p>full length</p>
      </div>
      /* test for the container end*/
      <br/>
      /* test for the grid system */ 
      <div className='container'>
        <div className='row'>
          <div className="col-1">1</div>
          <div className="col-1">2</div>
          <div className="col-1">3</div>
          <div className="col-1">4</div>
          <div className="col-1">5</div>
          <div className="col-1">6</div>
          <div className="col-1">7</div>
          <div className="col-1">9</div>
          <div className="col-1">10</div>
          <div className="col-1">11</div>
        </div>

      </div>
      
      <div className='container'>
        <div className='row'>
          <div className="col-4">1</div>
          <div className="col-4">2</div>
          <div className="col-4">3</div>
        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className="col-sm-4">this code for the size of ms</div>
          <div className="col-sm-4">this code for the size of ms</div>
          <div className="col-sm-4">this code for the size of ms</div>
        </div>
      </div>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className="col-xl-4">this code for the size of ms</div>
          <div className="col-xl-4">this code for the size of ms</div>
          <div className="col-xl-4">this code for the size of ms</div>
        </div>
      </div>
      /* test for the grid system */
      /* color system */
      <div className='container'>
        <h1 className='text-primary'>check color</h1>
        <h1 className='text-secondary'>check color</h1>
        <h1 className='text-success'>check color</h1>
        <h1 className='text-danger'>check color</h1>
        <h1 className='text-warning'>check color</h1>
        <h1 className='text-info'>check color</h1>
        <h1 className='text-primary'>check color</h1>
      </div> 
      /* end of color system */
      
    </div>
  )
}

export default TestB