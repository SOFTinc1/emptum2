import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { withRouter } from "../../components/directory/withRouter";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { compose } from "redux";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.params.collectionId)(state)
});

export default compose(withRouter, connect(mapStateToProps))(CollectionPage);
// export default connect(mapStateToProps)(CollectionPage);
