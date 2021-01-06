import React from 'react';
import {
  Tooltip
} from 'reactstrap';

function ToggleSwitch(props) {
  return (
    <div className="d-flex flex-direction-row slide-in-10">
      <div className="d-flex mx-auto mb-4">
        <div className="mr-3">
          <i className="fas fa-grip-horizontal small-font default-nav pointer smooth-transition slide-in-10"
            id="grid-view"
            aria-label="Grid View"
            onClick={() => props.setView('grid')} />
          <Tooltip placement="left"
            isOpen={props.tooltipOpen && props.iconView === 'grid'}
            className="d-none d-sm-block"
            target="grid-view"
            toggle={() => {
              props.toggleTooltip('grid');
            }}>
            Grid View
          </Tooltip>
        </div>
        <div>
          <div className="toggle-outer bg-secondary rounded pointer"
            id="toggle-view"
            aria-label="Toggle View"
            onClick={props.toggleView}>
            <div className={`toggle-inner bg-white border rounded m-0 ${props.view === 'carousel' ? 'right' : 'left'}`} />
          </div>
        </div>
        <div className="ml-3">
          <i className="far fa-images small-font default-nav pointer smooth-transition"
            id="carousel-view"
            aria-label="Carousel View"
            onClick={() => props.setView('carousel')} />
          <Tooltip placement="right"
            isOpen={props.tooltipOpen && props.iconView === 'carousel'}
            className="d-none d-sm-block"
            target="carousel-view"
            toggle={() => {
              props.toggleTooltip('carousel');
            }}>
            Carousel
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
