import React from 'react'
import { data } from '../data/Data'

const Foods = () => {
  // console.log(data);
  return (
    <div>
      <h1>Top Rated Menu Items</h1>

      {/* Filter Row */}
      <div>
        {/* Filter Type */}
          <div>
            <p>Filter Type</p>
            <div>
              <button>All</button>
              <button>Burgers</button>
              <button>Pizza</button>
              <button>Salads</button>
              <button>Chicken</button>
            </div>
          </div>
        <div>

          {/* Filter Price */}
          <div>
            <p>Filter Price</p>
            <div>
              <button>$</button>
              <button>$$</button>
              <button>$$$</button>
              <button>$$$$</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Foods
