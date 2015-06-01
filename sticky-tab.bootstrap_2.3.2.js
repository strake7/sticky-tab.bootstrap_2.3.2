/*  ============ 
    STICKY-TAB DATA-API. Store hash of active tab in url for persistence. Target prioritzed by location hash > local storage.
        Only one sticky-tab group should exist per page
 * ============ */
$(function () {
    var __key = location.pathName  + ".sticky-tab" // local storage sticky tab key
    $('body').on('click.sticky-tab.data-api', '[data-toggle="sticky-tab"]', function (e) {
        e.preventDefault()
        $(this).tab('show')
        // set location hash
        var hash = $(this).attr("href")
        if (!hash)
            hash = $(this).attr("data-target")
        if (!hash)
            // no hash target found
            return;
        // defuse the target node to prevent hash scroll
        var node = $(hash)
        if (node.length > 0)
            // strip id from node (defuse)
            node.attr('id', "")
        document.location.hash = hash
        localStorage.setItem(__key, hash)
        // fuse back the target node
        if (node.length > 0)
            node.attr('id', hash.replace(/^#/, ""))
    })

    // load location hash tab if stick tabs
    var __initial = location.hash || localStorage.getItem(__key)
    if (__initial && $("[data-toggle=sticky-tab]").length > 0) {
        var node = $("a[href=" + __initial + "]")
        if (node && node.attr("data-toggle") === "sticky-tab")
            node.tab('show')
    }
})
