(function($) {
    'use strict';

    function Tracker() {
        this.checkInstalled();
    }

    Tracker.prototype = {
        checkInstalled: function() {
            var request = window.navigator.mozApps.getSelf();
            request.onsuccess = function() {
                if (request.result) {
                    $('.install').hide();
                }
            };
        }
    };

    // Install app button
    $('.install').click(function(e) {
        e.preventDefault();
        var request = window.navigator.mozApps.install('manifest.webapp');
    });

    $(function() {
        window.tracker = new Tracker();
    });
})(jQuery);
