import React from "react";
import "./index.css";
import ButtonIcon from "../commonComponent/buttonIcon";
import { iconSvg } from "../../assets/svgExport/svgIcon";
import { switchToicon } from "../../assets/svgExport/svgIcon";
import {  appLogo} from "../../assets/svgExport/svgIcon";
 import { notificationIcon } from "../../assets/svgExport/svgIcon";
 import { helpIcon } from "../../assets/svgExport/svgIcon";
 import { settingIcon } from "../../assets/svgExport/svgIcon";
 import { avatorIcon } from "../../assets/svgExport/svgIcon";
const index: React.FC = () => {
  return (
    <div className="mainHeaderContainer">
      <ol className="itemList1">
        <ButtonIcon tooltipTitle="Switch to..." buttonType={""} extendClass="Circle" Icon={switchToicon} />
        <ButtonIcon buttonType={""} extendClass="hover" Icon={appLogo} />
        <ButtonIcon
          buttonType={"Your wrok"}
          extendClass="hover"
          Icon={iconSvg}
        />
        <ButtonIcon buttonType={"Projects"} extendClass="hover" Icon={iconSvg} />
        <ButtonIcon buttonType={"Filters"} extendClass="hover" Icon={iconSvg} />
        <ButtonIcon
          buttonType={"DashBoards"}
          extendClass="hover"
          Icon={iconSvg}
        />
        <ButtonIcon buttonType={"Teams"} extendClass="hover" Icon={iconSvg} />
        <ButtonIcon buttonType={"Apps"} extendClass="hover" Icon={iconSvg} />
        <button className="CompleteSprintButton" type="button">
          <span>Create</span>
        </button>
      </ol>
      <ol className="itemList1">
      <ButtonIcon tooltipTitle="Notification" buttonType={""} extendClass="Circle" Icon={notificationIcon} />
      <ButtonIcon tooltipTitle="Help" buttonType={""} extendClass="Circle" Icon={helpIcon} />
      <ButtonIcon tooltipTitle="Settings" buttonType={""} extendClass="Circle" Icon={settingIcon} /> 
      <div className="Circle extendAvt">
      <ButtonIcon buttonType={"G"} extendClass="avatorIcon" Icon={''} />
      </div>
      
      </ol>
    </div>
  );
};

export default index;
