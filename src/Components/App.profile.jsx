import React from 'react';

export default function Profile1(props) {
  return (
    <div className='container'>
      <img src={props.image} alt={props.alt} />
      <section>
        <h3>{props.name}</h3>
        <hr width='400px' />
        <p>{props.description}</p>
        <button>
          <a href={props.link}>Wiki page</a>
        </button>
      </section>
    </div>
  );
}

export function Profile2(props) {
  return (
    <div className='container'>
      <section>
        <h3>{props.name}</h3>
        <hr width='400px' />
        <p>{props.description}</p>
        <button>
          <a href={props.link}>Wiki page</a>
        </button>
      </section>
      <img src={props.image} alt={props.alt} />
    </div>
  );
}
