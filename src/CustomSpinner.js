import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const customSpinner = (props) => {
        return (
          <div className='sweet-loading'>
            <ClipLoader
              className="test"
              sizeUnit={"px"}
              size={450}
              color={'#123abc'}
              loading={props.loading}
            />
          </div> 
        )

}

export default customSpinner;
