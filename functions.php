
<?php

require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');

function after_pagination(){
    echo 'cowboy';
};
function after_pagination_2(){
    echo 'cowboy_2';
};


add_action( '_themename_after_pagination', 'after_pagination');
add_action( '_themename_after_pagination', 'after_pagination_2');


function function_to_add($query){
   if($query->is_main_query()) {
       $query->set('posts_per_page', 2);
   }
}
add_action( 'pre_get_posts', 'function_to_add', 10, 1);


function no_posts_text($text){
    return esc_html__('No Posts', '_themename-child');
}

add_filter('_themename_no_posts_text', 'no_posts_text');

function filter_title($title){
    return 'Filtered' . $title;
}

add_filter('the_title', 'filter_title');

?>




