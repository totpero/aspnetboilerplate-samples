﻿var App = App || {};
(function () {

    var appLocalizationSource = abp.localization.getSource('InterceptionDemo');
    App.localize = function () {
        return appLocalizationSource.apply(this, arguments);
    };

})(App);