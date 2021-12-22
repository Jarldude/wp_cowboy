<?php
    function cowboy_post_meta(){
        /* translators: %s: Post Date */
        printf(
            esc_html( ' Posted on %s', 'firstname' ), 
            '<a href="'. esc_url(get_permalink()) .'">
                <time dateime="'. esc_attr(get_the_date('c')) . '"> '. esc_html(get_the_date()) . '</time>      
             </a>'
        );
        /* translators: %s: Post Author */
        printf(
            esc_html( ' By %s', 'firstname' ), 
            '<a href="'. esc_url(get_author_posts_url(get_the_author_meta( 'ID'))) .'">
                 ' . esc_html(get_the_author()) . '
             </a>'
        );
    }

    function cowboy_read_more_link(){
        echo '<a href="'. esc_url(get_permalink()) . '"title="'. the_title_attribute(['echo' => false]) . '">';
         /* translators: %s: Post Title */
        printf(
            wp_kses(  
                    __( ' Read More <span class="u-screen-reader-text">About %s</span>', 'firstname' ), 
                    [
                        'span' =>[
                            'class'=>[]
                        ]
                    ]
            ),
            get_the_title()
        );
        echo '</a>';
    }
?>