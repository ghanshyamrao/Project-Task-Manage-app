import React from 'react'
import { ButtonType } from '../../InterFace/interface'


const buttonIcon:React.FC<ButtonType> = ({buttonType,Icon,extendClass}) => {
  return (
    <div className="presentationText">
    <button className={extendClass?`${extendClass} arrowIcon`:'arrowIcon '} type="button">
      <span>
        <div role="presentation">
          <div>
            <span>{buttonType}</span>
          </div>
        </div>
      </span>
      <span>
        <span role="img">
       {Icon 
       
          }
        </span>
      </span>
    </button>
</div>
  )
}

export default buttonIcon