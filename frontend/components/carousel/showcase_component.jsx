import React from 'react';


class ShowcaseComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="showcase-parent">
        </div>

        <section className="showcase-text">
          <div className="showcase-hook">
            <div className="showcase-hook-shadow">
              An Airwave Original
            </div>
            <div className="showcase-hook-origin">
              An Airwave Original
            </div>
          </div>

          <div className="showcase-title">
            <div className="showcase-title-shadow">
              Westinghouse Studio One
            </div>
            <div className="showcase-title-origin">
              Westinghouse Studio One
            </div>
          </div>

          <div className="showcase-episode-title">
            <div className="showcase-episode-title-shadow">
              S2 E6: Ticket to Tahiti
            </div>
            <div className="showcase-episode-title-origin">
              S2 E6: Ticket to Tahiti
            </div>
          </div>

          <div className="showcase-description">
            <div className="showcase-description-shadow">
              When the local credit union is robbed, some neighborhood folks suspect an inside job
            </div>
            <div className="showcase-description-origin">
              When the local credit union is robbed, some neighborhood folks suspect an inside job

            </div>
          </div>

        </section>
    </div>
    );
  }
}



export default ShowcaseComponent;
