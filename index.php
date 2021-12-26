<?php 
// Silence is golden.
if (!defined('ABSPATH')) exit;

get_header();?>

<?php 
        
    if(have_posts())  {  

        while(have_posts())  { 

            the_post();?>

            <h2>
                <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"> <?php the_title() ?> </a>
            </h1>

            <div> 
                <?php _themename_post_meta()?>
            </div>

            <div>
                <?php the_excerpt(); ?>
            </div>

            <div>
                <?php _themename_read_more_link()?>
            </div>

        <?php } ?>

        <?php the_posts_pagination(); ?>

        <?php do_action('_themename_after_pagination'); ?>

    <?php } else { ?>
        <p>No posts</p>
    <?php } ?>

<?php get_footer(); ?>




