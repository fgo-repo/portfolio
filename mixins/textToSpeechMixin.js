export default {
    mounted() {
      this.speechSynthesisEnabled = window.speechSynthesis !== undefined
      if (this.speechSynthesisEnabled) {
        window.addEventListener('beforeunload', () => window.speechSynthesis.cancel())        
        this.voices = window.speechSynthesis.getVoices().filter(i => i.lang.startsWith(this.$i18n.locale))
      }
      else {
        this.$destroy()
      }
    },
    data(){
      return {
        speechSynthesisEnabled: false,
        voices: [],
        progress: 0,
        // fix the slider start position as progress will be set to 0 by the onboundary method
        offsetProgress: 0,
        textLength: 0,
        // to fix the button states (play vs stop/pause)
        playing: false,
        // internal pause status
        paused: false
      }
    },
    computed: {
      hasSpeechSynthesis() {
        return this.speechSynthesisEnabled
      },
      voicesSynthesis() {
        return this.voices
      },
      playSynthesis() {
        return this.playing
      },
      progressSynthesis() {
        return this.progress + this.offsetProgress
      },
      currentTextLength() {
        return this.textLength
      }
    },
    methods: {
      speak(data) {
        try
        {
          if (this.paused) {
            this.resume()
          } 
          else {
            window.speechSynthesis.cancel()
          }

          this.paused = false
          this.playing = true
          this.offsetProgress = data.progress > 0 ? data.progress : 0
          this.progress = 0
          this.textLength = data.text.length

          if (this.offsetProgress > 0) {
            const index = data.text.lastIndexOf(' ', this.offsetProgress)
            data.text = data.text.slice(index)
          }

          const speaker = new SpeechSynthesisUtterance(data.text)
          speaker.onboundary = (e) => {
            if (e.name === 'word') {
              this.progress = e.charIndex
            }
          }
          speaker.onpause = () => {
            this.playing = false
            this.paused = true
          }
          speaker.onend = () => {
            this.cancel()
          }
          if(!!data.voice) {
            for(const voice in this.voicesSynthesis) {
              if(voice.name === data.voice) {
                speaker.voice = voice
                break
              }
            }
          }
          else {
            speaker.voice = window.speechSynthesis.getVoices().filter(i => i.lang.startsWith(this.$i18n.locale))[0]
          }

          speaker.pitch = data.pitch
          speaker.rate = data.rate
          window.speechSynthesis.speak(speaker)
        }
        catch {
          this.speechSynthesisEnabled = false
        }
      },
      resume() {
        window.speechSynthesis.resume()
      },
      pause() {
        window.speechSynthesis.pause()
      },
      cancel() {
        window.speechSynthesis.cancel()
        this.progress = 0
        this.offsetProgress = 0
        this.playing = false
      }
    }
  }