$(document).ready(function() {
    var $sections = $('.input-block.input-section'),
        $contents = $('<div id="section-links"><span>Jump to section:</span></div>');
    
    // loop through sections, grabbing data for each
    $sections.each(function() {
        var title = $(this).children('label').html(),
            slug = getSlug(title);
        
        // attach ID
        $(this).attr('id', slug);
        
        // append to contents
        $contents.append('<a href="#' + slug + '">' + title + '</a>');
    });
    
    // place contents on page
    if ($contents.find('a').length) {
        $('#status-bar').after($contents);
    }
});