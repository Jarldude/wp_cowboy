<?php
    function cowboy_post_meta(){
        ?>
        Posted On
        <a href="<?php echo get_permalink(); ?>">
            <time dateime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>      
        </a>

        Posted By 
        <a href="<?php echo get_author_posts_url(get_the_author_meta( 'ID')); ?>">
            <?php echo get_the_author(); ?>
        </a>
        <?php
    }

    function cowboy_read_more_link(){
        ?>
        <a href="<?php echo get_permalink(); ?>" title="<?php the_title_attribute(); ?>">
            Read More <span class="u-screen-reader-text">About <?php the_title(); ?></span>
        </a>
        <?php
    }
?>