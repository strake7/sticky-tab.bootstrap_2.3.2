/*  ============ 
    STICKY-TAB DATA-API. Store hash of active tab in url for persistence. Target prioritzed by location hash > local storage.
        Only one sticky-tab group should exist per page
 * ============ */
$(function () {
    var __key = location.pathName  + ".sticky-tab", // local storage sticky tab key
        __initial = location.hash || localStorage.getItem(__key), // initial value
        __tabs = $("[data-toggle=sticky-tab]")

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
        var el = $(hash)
        // defuse the target node to prevent hash scroll
        if (el.length > 0)
            el.attr('id', "")
        document.location.hash = hash
        localStorage.setItem(__key, hash)
        // fuse back the target node
        if (el.length > 0)
            el.attr('id', hash.replace(/^#/, ""))
    })

    // load location hash tab if sticky tabs
    if (__tabs.length === 0)
        return;

    if (__initial) {
        // has initial value
        var el = $("a[href=" + __initial + "]")
        if (el && el.attr("data-toggle") === "sticky-tab")
            el.tab('show')
        else 
            $(__tabs[0]).tab('show')
    } else 
        $(__tabs[0]).tab('show')
})
