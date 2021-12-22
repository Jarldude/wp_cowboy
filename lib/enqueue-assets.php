<?php

function cowboy_assets() {
    wp_enqueue_style('cowboy-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css',  array(), '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', 'cowboy_assets');


function cowboy_admin_assets() {
    wp_enqueue_style('cowboy-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css',  array(), '1.0.0', 'all');
}
add_action('admin_enqueue_scripts', 'cowboy_admin_assets');