import React from "react";
import "./Header.css";
import ButtonIcon from "../commanComponent/buttonIcon";
import { iconSvg } from "../../assets/svgExport/svgIcon";
import { autoMation } from "../../assets/svgExport/svgIcon";
import { iconInsights } from "../../assets/svgExport/svgIcon";
import { favStart } from "../../assets/svgExport/svgIcon";
import { clockIcon } from "../../assets/svgExport/svgIcon";
import { threeDotICon } from "../../assets/svgExport/svgIcon";
import { searchIcon } from "../../assets/svgExport/svgIcon";

export const Header: React.FC = () => {
  return (
    <div>
      <div className="headerMainContainer">
        <div className="subHeaderContainer">
          <div className="Bread">
              <ol className="breadCrumbItems">
                <li className="breadCrumbItemTitle">
                  <p className="breadCrubmText">
                    <span className="textSpan">Projects</span>
                  </p>
                </li>
                <li className="breadCrumbItemTitle">
                  <p className="breadCrubmText">
                    <span className="textSpan">True Moso App</span>
                  </p>
                </li>
              </ol>
          </div>
          <div className="sprintContainer">
            <div className="sprintTextMainContainer">
              <div
                className="sprintTextSubContainer"
                data-testid="software-board.header.title.container"
              >
                <div className="sprintTextContainer">
                  <p className="sprintText">TMA Sprint 4</p>
                </div>
              </div>
            </div>
            <div className="sprintSubContainer">
              <div className="sprintContainerItem">
                <div className="sprintSub">
                  <div className="sprintActionContainer">
                    <div className="sprintActionItem">
                      <div role="presentation" className="sprintContainerItem">
                        <button
                          data-test-id="automation-menu.ui.button.menu-button"
                          className="presentationText"
                          type="button"
                        >
                          {autoMation}
                        </button>
                      </div>
                      <span>
                        <div>
                          <span role="presentation">
                            <div role="presentation">
                              <button
                                className="presentationText"
                                type="button"
                              >
                                {favStart}

                              </button>
                            </div>
                          </span>
                        </div>
                      </span>
                      <div role="presentation">
                        <div className="TimeRemaining">
                          <span className="timeicon">
                            <span
                              role="img"
                              className="timeIcon"
                            >
                              {clockIcon}
                            </span>
                          </span>
                          0 days remaining
                        </div>
                      </div>
                    </div>
                    <button
                      className="CompleteSprintButton"
                      type="button"
                    >
                      <span >Complete sprint</span>
                    </button>
                  </div>
                  <button className="presentationText" type="button">
                     {threeDotICon}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="searchAndFilterContainer main">
            {" "}
            <div className="searchAndFilterContainer subMain">
              <div className="searchAndFilterContainer quMain">
                <div className="searchAndFilterContainer onlyMain">
                  <div
                    className="inputContainer"
                  >
                    <input 
                      type="text"
                      name="search"
                      placeholder="Search this board"
                    />
                    <div className="searchIcon">
                      <span aria-hidden="true" className="serchIconSvg">
                       {searchIcon}
                      </span>
                    </div>
                  </div>
                  <div className="optionMain">
                    <div className="optionContainer">
                      <ButtonIcon
                        buttonType={"Epic"}
                        extendClass=""
                        Icon={iconSvg}
                      />
                      <ButtonIcon
                        buttonType={"type"}
                        extendClass=""
                        Icon={iconSvg}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sideContainer">
                <div className="groupBy">
                  <label className="groupByText">Group by</label>
                  <ButtonIcon
                    buttonType={"None"}
                    extendClass={"sideContainerButton"}
                    Icon={iconSvg}
                  />
                </div>
                <div>
                  <ButtonIcon
                    buttonType={"Insights"}
                    extendClass={"sideContainerButton"}
                    Icon={iconInsights}
                  />
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
