<form role="search" method="get" class="c-search-form" action="<?php echo esc_url( home_url('/')); ?>" >
    <label class="c-search-form__label">
        <span class="u-screen-reader-text"> <?php echo esc_html( 'Search for:', 'label', '_themename' ) ?></span>
        <input type="search" name="s" placeholder="Search" value="<?php echo esc_attr(get_search_query()); ?>"/>
    </label>

    <button type="submit" class="c-search-form__button">
        <span class="u-screen-reader-text">
            <?php echo esc_html_x( 'Search', 'submit button', '_themename' ); ?>
        </span>
        <i class="fas fa-search" aria-hidden="true"></i>
    </button>
</form>