import React, { useEffect, useState } from 'react';

import { useStateValue } from '../Provider';

const Component = React.createClass({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function () {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.iframe()} />
      </div>
    );
  }
});

export function MicroFrontEnd(props) {
  const { path } = props;
  const { state } = useStateValue();
  const [page, setPage] = useState('');

  useEffect(
    () => {
      const componentDidMount = () => {
        let url = "";

        state.microPageURL.forEach(
          (item) => {
            if (item.path === path) {
              url = item.url
            }
          }
        );

        if (url !== "") {
          console.log("url", url);
          setPage('http://jzarate.cabal.coop.py/micabal')
        }
      }
      componentDidMount()
    },
    // eslint-disable-next-line
    []
  )

  return (
    <Component iframe = {page} />
  )
}