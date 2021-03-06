import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverviewcContainer } from "./collections-overview.styles";
import CollectionPreview from "../preview-collection/collection-preview.component";

const CollectionsOverview = ({ collections }) => (

    <CollectionsOverviewcContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewcContainer>

)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);