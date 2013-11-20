(function() {

  Discourse.PostMenuView.reopen({

    shouldRerenderHideButton: Discourse.View.renderIfChanged("post.temporarily_hidden"),

    renderHide: function(post, buffer) {
      var direction = !!post.getWithDefault("temporarily_hidden", false) ? "down" : "up";
      buffer.push('<button title="' + direction + '" data-action="hide">');
      buffer.push('<i class="icon-chevron-' + direction + '"></i>');
      buffer.push('</button>');
    },

    clickHide: function() {
      $("#post_" + this.get("post.post_number") + " .cooked").toggle();
      this.toggleProperty("post.temporarily_hidden");
    }

  });

})();
