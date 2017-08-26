new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    customizeDivClasses: {
      bigText: false,
      purpleText: false,
      blackBorder: false
    },
    inputSelectionClasses: {
      bigText: false,
      purpleText: false,
      blackBorder: false
    },
    styleDiv: {
      color: 'blue'
    },
    progressBar: {
      width: '0%',
      backgroundColor: 'green'
    }
  },
  methods: {
    startEffect: function() {
      var vi = this;
      setInterval(function() {
        vi.effectClasses.highlight = !vi.effectClasses.highlight;
        vi.effectClasses.shrink = !vi.effectClasses.shrink
      }, 1000);
    },
    customizeDiv: function(e) {
      var vi = this;
      switch(e.target.value) {
        case 'bigText':
          vi.customizeDivClasses.bigText = !vi.customizeDivClasses.bigText
          break;
        case 'purpleText':
          vi.customizeDivClasses.purpleText = !vi.customizeDivClasses.purpleText
          break;
        case 'blackBorder':
          vi.customizeDivClasses.blackBorder = !vi.customizeDivClasses.blackBorder
          break;
      }
    },
    inputSelection: function(e) {
      var vi = this;

      className = document.getElementById('inputSelectionField').value;

      classBoolean = e.target.value;

      switch(className) {
        case 'bigText':
          vi.toggleClass('bigText', classBoolean)
          break;
        case 'purpleText':
          vi.toggleClass('purpleText', classBoolean)
          break;
        case 'blackBorder':
          vi.toggleClass('blackBorder', classBoolean)
          break;
      }
    },
    toggleClass: function(className, classBoolean) {
      var vi = this;
      if (classBoolean == 'true' || classBoolean == 'false') {
        classBoolean = JSON.parse(classBoolean.toLowerCase())

        vi.inputSelectionClasses[className] = classBoolean;
      }
    },
    startProgress: function() {
      var vi = this;
      var width = 0;
      var progressTimer = setInterval(increaseProgress, 500)

      function increaseProgress() {
        if (width === 100) {
          clearInterval(progressTimer)
        } else {
          width += 10;
          vi.progressBar.width = width + '%';
        }
      }
    },
  }
});
