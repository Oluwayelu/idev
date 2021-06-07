import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Button,
	Hidden,
	Drawer,
	IconButton
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu'
import styles from '../../assets/js/components/headerStyle'

const useStyles = makeStyles(styles)

const Navbar = (props) => {
	const classes = useStyles()
	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener("scroll", headerColorChange)
		}
		return () => {
			if (props.changeColorOnScroll) {
				window.removeEventListener("scroll", headerColorChange);
			}
		};
	})

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props;

		const windowScrollTop = window.pageYOffset;
		if (windowScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[color])
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[changeColorOnScroll.color])
		} else {
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};

	const { color, rightLinks, leftLinks, brand, fixed, absolute } = props
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed
	})

	const brandComponent = <Button className={classes.title}>{brand}</Button>

	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				{leftLinks !== undefined ? brandComponent : null}
				<div className={classes.flex}>
					{leftLinks !== undefined ? (
						<Hidden smDown implementation="css">
							{leftLinks}
						</Hidden>
					) : (
							brandComponent
						)}
				</div>
				<Hidden smDown implementation="css">
					{rightLinks}
				</Hidden>
				<Hidden mdUp>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
					>
						<Menu />
					</IconButton>
				</Hidden>
			</Toolbar>
			<Hidden mdUp implementation="js">
				<Drawer
					variant="temporary"
					anchor="right"
					open={mobileOpen}
					classes={{
						paper: classes.drawerPaper
					}}
					onClose={handleDrawerToggle}
				>
					<div className={classes.appResponsive}>
						{leftLinks}
						{rightLinks}
					</div>
				</Drawer>
			</Hidden>
		</AppBar>
	)
}

Navbar.defaultProp = {
	color: "white"
};

Navbar.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"transparent",
		"white",
		"rose",
		"dark"
	]),
	rightLinks: PropTypes.node,
	leftLinks: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			"primary",
			"info",
			"success",
			"warning",
			"danger",
			"transparent",
			"white",
			"rose",
			"dark"
		]).isRequired
	})
}

export default Navbar