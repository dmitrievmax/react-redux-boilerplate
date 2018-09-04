import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Grid = ({
	className,
	container,
	alignItems,
	direction,
	gap,
	justify,
	wrap,
	item,
	xs,
	sm,
	md,
	lg,
	xl,
	...rest
}) => {
	const containerName = 'grid-container';
	const itemName = 'grid-item';
	const containerClassNames = classNames({
		[containerName]: container,
		[`${containerName}--align-items-${alignItems}`]: alignItems,
		[`${containerName}--direction-${direction}`]: direction,
		[`${containerName}--justify-${justify}`]: justify,
		[`${containerName}--gap-${gap}`]: gap,
		[`${containerName}--wrap-${wrap}`]: wrap,
		[itemName]: item,
		[`${itemName}--xs-${xs}`]: xs,
		[`${itemName}--sm-${sm}`]: sm,
		[`${itemName}--md-${md}`]: md,
		[`${itemName}--lg-${lg}`]: lg,
		[`${itemName}--xl-${xl}`]: xl,
	}, className);

	return (
		<div className={containerClassNames} {...rest} />
	);
};

Grid.defaultProps = {
	className: null,
	container: false,
	alignItems: null,
	direction: null,
	gap: null,
	justify: null,
	wrap: null,
	item: false,
	xs: null,
	sm: null,
	md: null,
	lg: null,
	xl: null,
};

const gridSizes = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Grid.propTypes = {
	className: PropTypes.string,
	container: PropTypes.bool,
	alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
	direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
	gap: PropTypes.oneOf([8, 16, 24, 32, 40]),
	justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
	wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	item: PropTypes.bool,
	xs: PropTypes.oneOf(gridSizes),
	sm: PropTypes.oneOf(gridSizes),
	md: PropTypes.oneOf(gridSizes),
	lg: PropTypes.oneOf(gridSizes),
	xl: PropTypes.oneOf(gridSizes)
};

export default Grid;
