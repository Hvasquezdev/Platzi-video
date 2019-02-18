import React from 'react';

function SearchLayout(props) {
  return(
    <div className="Search-container">
      <form 
        className="Search"
        onSubmit={props.handleSubmit}
      >
        <input 
          ref={props.setRef}
          type="text" 
          placeholder="Busca tu video favorito"
          className="Search-input" 
          name="search"
        />
      </form>
    </div>
  );
}

export default SearchLayout;