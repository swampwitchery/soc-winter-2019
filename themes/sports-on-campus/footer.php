<?php
/**
 * The template for displaying the footer.
 *
 * @package Sport_On_Campus_Theme
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
			<?php wp_nav_menu( array( 'theme_location' => 'desktop-menu-two', 'container_class' => 'desktop-menu-two' ) ); ?>
			<h4>Copyright 2019</h4>
					<div class="nav-dropdown">
				<div class="site-info">
					<img src=<?php echo get_template_directory_uri() . '/icons/twitter-footer.svg'?>>
					<img src=<?php echo get_template_directory_uri() . '/icons/facebook-footer.svg'?>>
					<img src=<?php echo get_template_directory_uri() . '/icons/instagram-footer.svg'?>>
				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
