import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from 'components/Grid';
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
					: (
						<Grid container gap={24}>
							{photos.map(p => (
								<Grid item key={p.id} xs={12} sm={4} md={3} lg={2}>
									<img src={p.thumbnailUrl} alt={p.title} style={{ width: '100%' }} />
								</Grid>
							))}
						</Grid>
					)
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
