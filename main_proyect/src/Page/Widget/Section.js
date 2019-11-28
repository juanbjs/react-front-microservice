import React from 'react';

export function Section(props) {

  const {children} = props

  return (
    <section>
      {
        children
      }
    </section>
  )
}