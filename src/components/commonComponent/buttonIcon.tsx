import React from "react";
import { ButtonType } from "../../InterFace/interface";

const buttonIcon: React.FC<ButtonType> = ({
  buttonType,
  Icon,
  extendClass,
  tooltipTitle,
}) => { 
  return (
    <div className={`presentationText ${extendClass}`}>
      <button    data-tooltip={tooltipTitle}
        className={extendClass ? `${extendClass} arrowIcon` : "arrowIcon"}
        type="button"
      >
        <div role="presentation"> 
          <div>
            <span>{buttonType}</span>
          </div>
        </div>

        <div role="img">{Icon}</div>
      </button>
    </div>
  );
};

export default buttonIcon;
