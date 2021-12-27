<?php 
    if(have_posts())  {  
        while(have_posts())  { 
            the_post();?>
            
            <article <?php post_class('c-post u-margin-bottom-20')?>>
                <h2 class="c-post__title">
                    <a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"> <?php the_title() ?> </a>
                </h2>

                <div class="c-post__meta">
                    <?php _themename_post_meta()?>
                </div>

                <div class="c-post__exerpt">
                    <?php the_excerpt(); ?>
                </div>

                <?php _themename_read_more_link()?>                                            
            </article>

        <?php } ?>

        <?php the_posts_pagination(); ?>
        <?php do_action('_themename_after_pagination'); ?>

    <?php } else { ?>
        <p><?php echo apply_filters( '_themename_no_posts_text',esc_html__( 'Sory, no posts blablabla', '_themename' ))?></p>
    <?php } ?>