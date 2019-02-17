import React from 'react';

// Components
import Category from './category/index';

function Categories (props) {
  const categories = props.data.categories;
  return(
    categories.map((category) => {
      const categoryName = category.title.split(' ').join('').toLowerCase();
      return(
        <div className="Categories-container" key={category.id} style={{ gridArea: categoryName }}>
          <Category 
            {...category} 
            toggleModal={props.toggleModal}
          />
          <hr/>
        </div>
      );
    })
  );
}

export default Categories;