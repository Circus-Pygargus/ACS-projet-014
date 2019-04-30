
      // Written by @labnol 
        function onYouTubeIframeAPIReady() {
          var player_1;
          player_1 = new YT.Player('video_blackPool', {
              videoId: 'Y0VoFSLi544', // YouTube Video ID
              width: 560, // Player width (in px)
              height: 316, // Player height (in px)
              playerVars: {
                  autoplay: 0, // Auto-play the video on load
                  controls: 1, // Show pause/play buttons in player
                  showinfo: 0, // Hide the video title
                  modestbranding: 1, // Hide the Youtube Logo
                  loop: 1, // Run the video in a loop
                  fs: 1, // Hide the full screen button
                  cc_load_policy: 0, // Hide closed captions
                  iv_load_policy: 3, // Hide the Video Annotations
                  autohide: 0 // Hide video controls when playing
              },
              events: {
                  onReady: function (e) {
                      e.target.mute();
                  }
              }
          });

          var player_2;
          player_2 = new YT.Player('video_maniaPlanet', {
              videoId: 'K3K2D4cIcc0', // YouTube Video ID  elysium:id: 2onGtPyXI9E
              width: 560, // Player width (in px)
              height: 316, // Player height (in px)
              playerVars: {
                  autoplay: 0, // Auto-play the video on load
                  controls: 1, // Show pause/play buttons in player
                  showinfo: 0, // Hide the video title
                  modestbranding: 1, // Hide the Youtube Logo
                  loop: 1, // Run the video in a loop
                  fs: 1, // Hide the full screen button
                  cc_load_policy: 0, // Hide closed captions
                  iv_load_policy: 3, // Hide the Video Annotations
                  autohide: 0 // Hide video controls when playing
              },
              events: {
                  onReady: function (e) {
                      e.target.mute();
                  }
              }
          });
          var player_3;
          player_3 = new YT.Player('video_rocketLeague', {
              videoId: 'BxAunQ9lf44', // YouTube Video ID
              width: 560, // Player width (in px)
              height: 316, // Player height (in px)
              playerVars: {
                  autoplay: 0, // Auto-play the video on load
                  controls: 1, // Show pause/play buttons in player
                  showinfo: 0, // Hide the video title
                  modestbranding: 1, // Hide the Youtube Logo
                  loop: 1, // Run the video in a loop
                  fs: 1, // Hide the full screen button
                  cc_load_policy: 0, // Hide closed captions
                  iv_load_policy: 3, // Hide the Video Annotations
                  autohide: 0 // Hide video controls when playing
              },
              events: {
                  onReady: function (e) {
                      e.target.mute();
                  }
              }
          });
        }
