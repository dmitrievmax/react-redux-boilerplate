import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pendingSelector, photosSelector, getAllPhotos } from '../../ducks/galleryPage';

const GalleryPage = ({ pending, photos, getAllPhotos }) => {
	if (pending) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Welcome to the gallery!</h1>
			<div>
				{photos.length === 0
					? <div>There are no photos yet :( <button onClick={getAllPhotos}>Download</button></div>
					: photos.map(p => <img key={p.id} src={p.thumbnailUrl} alt={p.title} />)
				}
			</div>
		</div>
	);
};

GalleryPage.propTypes = {
	pending: PropTypes.bool.isRequired,
	photos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		thumbnailUrl: PropTypes.string.isRequired,
	})).isRequired,
	getAllPhotos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	pending: pendingSelector(state),
	photos: photosSelector(state)
});

const mapDispatchToProps = ({ getAllPhotos });

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
