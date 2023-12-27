import React from 'react';
import {
  Tooltip
} from 'reactstrap';
import { Controls, PlayState, Tween, Reveal } from 'react-gsap';

function ToggleSwitch(props) {
  return (
    <div className="d-flex flex-direction-row slide-in-10">
      <div className="d-flex mx-auto mb-4">
        <div className="mr-3">
          <Reveal repeat>
            <Tween
              from={{ opacity: 0, x: '-100px' }} duration={0.5}
              to={{ opacity: 1, x: '0px' }} duration={0.5}
            >
              <i className="fas fa-grip-horizontal small-font default-nav pointer smooth-transition slide-in-10"
                id="grid-view"
                aria-label="Grid View"
                onClick={() => props.setView('grid')} />
            </Tween>
          </Reveal>
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
        <Reveal repeat>
          <Tween
            from={{ opacity: 0, x: '-100px' }} duration={0.5}
            to={{ opacity: 1, x: '0px' }} duration={0.5}
          >
            <div>
              <div className="toggle-outer bg-secondary rounded pointer"
                id="toggle-view"
                aria-label="Toggle View"
                onClick={props.toggleView}>
                <div className={`toggle-inner bg-white border rounded m-0 ${props.view === 'carousel' ? 'right' : 'left'}`} />
              </div>
            </div>
          </Tween>
        </Reveal>
        <div className="ml-3">
          <Reveal repeat>
            <Tween
              from={{ opacity: 0, x: '-100px' }} duration={0.5}
              to={{ opacity: 1, x: '0px' }} duration={0.5}
            >
              <i className="far fa-images small-font default-nav pointer smooth-transition"
                id="carousel-view"
                aria-label="Carousel View"
                onClick={() => props.setView('carousel')} />
            </Tween>
          </Reveal>
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
