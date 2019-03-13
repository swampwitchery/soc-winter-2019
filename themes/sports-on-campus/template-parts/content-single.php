<?php
/**
 * Template part for displaying single posts.
 *
 * @package Sport_On_Campus_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'large' ); ?>
		<?php endif; ?>

		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>

	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->

	<div class="uni-program"> <?php echo CFS()->get('program'); ?> </div>
	<div class="uni-prerequisites"> <?php echo CFS()->get('prerequisites'); ?> </div>
	<div class="uni-facilities"> <?php echo CFS()->get('facilities'); ?> </div>
	<div class="uni-maps"> <?php echo CFS()->get('maps'); ?> </div>

	<footer class="entry-footer">
		<?php Sport_On_Campus_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
