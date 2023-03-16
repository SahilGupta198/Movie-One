import React from 'react'

export default function MovieCard(props) {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{props.movie1.Year}</p>
        </div>

        <div>
          <img src={props.movie1.Poster !== 'N/A' ? props.movie1.Poster : 'https://via.placeholder.com/400'} alt={props.movie1.Title} />
        </div>

        <div>
          <span>{props.movie1.Type}</span>
          <h3>{props.movie1.Title}</h3>
        </div>
      </div>
    </div>
  )
}
