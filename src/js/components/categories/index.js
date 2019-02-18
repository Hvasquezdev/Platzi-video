import React from 'react';

// Components
import Category from './category/index';
import Search from '../../widgets/containers/search';

function Categories (props) {
  const categories = props.data.categories;
  return(
    <div>
      <Search />
      {
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
      }
    </div>
  );
}

export default Categories;