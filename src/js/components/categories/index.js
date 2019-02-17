import React from 'react';

// Components
import Category from './category/index';

function Categories (props) {
  const categories = props.data.categories;
  return(
    categories.map((category) => {
      return(
        <div className="Categories-container" key={category.id}>
          <Category {...category} />
          <hr/>
        </div>
      );
    })
  );
}

export default Categories;