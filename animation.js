    // 1> render songs 2> scroll top 3> play/pause/loop</
    const PLAY_STORAGE_KEY = 'F8_PLAYER'
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    var songsAPI = 'http://localhost:3000/songs'
    const text = '[{"name": "Boy With Luv","author": "BTS", "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130258811289620/BTS____Boy_With_Luv_feat._HalMP3_160K.mp3","id": 77,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb82a5d58059f81867b871d8b6"},{"url": "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f"}]}},{ "name": "Come & Get It","author": "Selena Gomez","url": "https://cdn.discordapp.com/attachments/775740994595323954/782130215966605332/Selena_Gomez_-_Come___Get_ItMP3_128K.mp3","id": 76,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eba5205abffd84341e5bace828"},{ "url": "https://i.scdn.co/image/ab67616d0000b273cb16227d90152c2a5022bba1"}]}}, {"name": "Closer", "author": "The Chainsmokers", "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130132722384907/The_Chainsmokers_-_Closer_Lyric_ft._HalseyMP3_128K.mp3","id": 71,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb7e223c8c0a40da75838373b9"},{ "url": "https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453"}]}},{"name": "Believer","author": "Imagine Dragon","url": "https://cdn.discordapp.com/attachments/775740994595323954/782130083555966986/Imagine_Dragons_-_Believer_LyricsMP3_160K.mp3","id": 65,"links": { "images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e"},{ "url": "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a"}]}},{ "name": "I\'ll Show You","author": "Justin Bieber", "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130047695585310/Justin_Bieber_-_I_ll_Show_You_Official_Music_VideMP3_160K.mp3","id": 60,"links": {"images": [ {"url": "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"},{"url": "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de"}]}},{"name": "Alone","author": "Marshmello", "url": "https://cdn.discordapp.com/attachments/775740994595323954/782130063050014732/Marshmello_-_Alone_Official_Music_VideoMP3_160K.mp3","id": 61,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676"},{"url": "https://i.scdn.co/image/ab67616d0000b273153261ff7373a171c24ab9f9"} ] } },{"name": "Liar","author": "Camila Cabello","url": "https://cdn.discordapp.com/attachments/775740994595323954/782130071020371978/Camila_Cabello_-_Liar_LyricsMP3_160K.mp3","id": 62,"links": { "images": [{"url": "https://i.scdn.co/image/ab6761610000e5ebf4a0158ec2c8cc0f203761da"},{"url": "https://i.scdn.co/image/ab67616d0000b2732df02f0877da45295a759f4c"}]}}, {"name": "Sorry","author": "Justin Bieber","url": "https://cdn.discordapp.com/attachments/775740994595323954/782130017793998848/Justin_Bieber_-_Sorry_Official_Lyric_VideoMP3_160K.mp3","id": 59,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"}, {"url": "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de" }]}},{"name": "Ghost","author": "Au/Ra, Alan Walker","url": "https://cdn.discordapp.com/attachments/775740994595323954/782130010088669204/Au_Ra__Alan_Walker_-_Ghost_Official_VideoMP3_160K.mp3","id": 58,"links": {"images": [ {"url": "https://i.scdn.co/image/ab6761610000e5eb2eac2bd8d035f71531b0c08d"},{"url": "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431"}]}},{"name": "Infinite [NCS Release]","author": "Valence","url": "https://cdn.discordapp.com/attachments/775740994595323954/775742064893755402/Valence_-_Infinite_NCS_ReleaseMP3_160K.mp3","id": 29,"links": {"images": [ { "url": "https://i.scdn.co/image/ab6761610000e5ebd4d282937d2f49efd4273bae"},{"url": "https://i.scdn.co/image/ab67616d0000b27361cb41224d1cc9dd052a5dba"}]}},{"name": "Island [NCS BEST OF]", "author": "Jarico","url": "https://cdn.discordapp.com/attachments/775740994595323954/775741836840665158/Jarico_-_Island_NCS_BEST_OFMP3_160K.mp3","id": 13,"links": {"images": [{"url": "https://i.scdn.co/image/ab67616d0000b27371c82efdc4e41e6d3d4a3544"},{"url": "https://i.scdn.co/image/ab67616d0000b273058c78826c35cbc3d03516c1"}]} },{"name": "Whered You Go (feat. Luna Lark) ","author": "Julius Dreisig","url": "https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3","id": 12,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb942bc92abc325c9352527759"},{"url": "https://i.scdn.co/image/ab67616d0000b273100fb4649eae80922bf1acbf"}]}},{"name": "Sky High [NCS Release]","author": "Elektronomia","url": "https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3","id": 11,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5ebbd83cf91e7780f4b0a4f0687"},{"url": "https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba"}]}},{"name": "On & On (feat. Daniel Levi) [NCS Release]","author": "Cartoon","url": "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3","id": 4,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb65d82d90b55b4dd3cbb2efd2"},{"url": "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc"}]}},{"name": "About you-NCS Release","author": "Ascence","url":"https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3","id": 3,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb6e50f29c671af8aff68b321d"},{"url": "https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2"}]}},{"name": "Sing me to sleep","author": "Alan Walker","url": "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3","id": 0,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"},{"url": "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a"}]}},{"name": "She-NCS Release","author": "Andromedik","url": "https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3","id": 2,"links": {"images": [{"url": "https://i.scdn.co/image/ab6761610000e5eb37db62ee361f796bef5b49a6"},{"url": "https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233"}]}}]'
    const songsData = JSON.parse(text)
    const heading = $('header h2')
    const cdThumb = $('.cd-thumb')
    const audio = $('#audio')
    const player = $('.player')
    const playlist = $('.playlist')
    const playBtn = $('.btn-toggle-play')
    const progress = $('#progress')
    const nextBtn = $('.btn-next')
    const prevBtn = $('.btn-prev')
    const repeatBtn = $('.btn-repeat')
    const randomBtn = $('.btn-random')

    const app = {
        currentIndex : 0,
        isPlaying : false,
        songs : songsData,
        isRandom : false,
        isRepeat : false,
        config : JSON.parse(localStorage.getItem(PLAY_STORAGE_KEY)) || {},
        setConfig : function (key,value) {
            this.config[key] = value,
            localStorage.setItem(PLAY_STORAGE_KEY, JSON.stringify(this.config))
        },
        render : function() {
            const  htmls = songsData.map((song, index) => {
                return`
                <div data-index="${index}" class="song ${index === this.currentIndex ? 'active' : '' }">
                    <div class="thumb" style="background-image: url('${song.links.images[1].url}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.author}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `
            })
            playlist.innerHTML = htmls.join('')
            
        },
        defineProperties : function() {
            Object.defineProperty(this, 'currentSong', {  
                get : function() {  
                    return this.songs[this.currentIndex]
            }})
        },
        handleEvents : function() {
            const _this = this
            const cd = $('.cd')
            const cdWidth = cd.offsetWidth
            
            const newspaperSpinning = [
                { transform: 'rotate(0) ' },
                { transform: 'rotate(360deg) ' }
              ];
              
              const newspaperTiming = {
                duration: 20000,
                iterations: Infinity,
              }

            // xu ly rote cd
            const cdRota = cdThumb.animate(newspaperSpinning,newspaperTiming)
            cdRota.pause()

            // const eventScroll = $('.playlist')
            // const eventScrollHeight = eventScroll.offsetHeight

            // eventScroll.addEventListener('scroll', function() {
            //     const scrollTop = eventScroll.scrollTop
            //     const newCdWidth = cdWidth - scrollTop 
                
            //     cd.style.width = newCdWidth > 0 ? newCdWidth +"px" : 0 +"px";
            //     cd.style.opacity = newCdWidth/cdWidth

            //     // const newEventScrollHeight = eventScrollHeight + ((scrollTop))
            //     //  eventScroll.style.position ='absolute';
            //     //  eventScroll.style.bottom =  -693 + "px"
            //     //  eventScroll.style.height = (newEventScrollHeight +9) +"px"
                
            // })

            // xu ly khi play
            playBtn.onclick = function() { 
                
                if(_this.isPlaying) {
                    audio.pause()
                    cdRota.pause()
                }
                else {
                    audio.play()
                    cdRota.play()
                }

                audio.onplay = function() {
                    _this.isPlaying = true;
                    player.classList.add('playing')
                }
                audio.onpause = function() {
                    _this.isPlaying = false;
                    player.classList.remove('playing')
                }
                audio.ontimeupdate = function() {
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                    progress.value = progressPercent ;
                    setProgress(progressPercent)
                    // var boxAfter = window.getComputedStyle(progress, "::-webkit-slider-thumb");
                    // progress.style.width = progressPercent + "%";
                }
                // xu ly thanh progress
            
                const setProgress = (progressData) => {
                    const value = `${progressData}%`;
                    progress.style.setProperty('--progress', value)
                    // progress.setAttribute('aria-valuenow', value)
                }

                
                progress.onchange = () => {
                    setProgress(controller.value)
                }

                progress.onchange = function(e) {    
                    const seekTime = e.target.value * audio.duration / 100;
                    audio.currentTime = seekTime;
                }
            }
            // next buttton
            nextBtn.onclick = function() {
                if(_this.isRandom){
                    _this.playRandomSong();
                }else{
                    _this.nextSong();
                }
                cdRota.play()
                _this.isPlaying = true;
                player.classList.add('playing')
                audio.play()
                _this.render();
                _this.scrollActiveSong();


            }
            prevBtn.onclick = function() {
                if(_this.isRandom){
                    _this.playRandomSong();
                }else{
                    _this.prevSong();
                }
                cdRota.play()
                _this.isPlaying = false;
                player.classList.remove('playing')
                audio.play()
                _this.render();
                _this.scrollActiveSong();
            }
            randomBtn.onclick = function(e) {
                // e.classList.add('active')
                _this.isRandom = !_this.isRandom

                _this.setConfig('isRandom', _this.isRandom)
                randomBtn.classList.toggle('active',_this.isRandom)

            }
            // xua ly het bai se next song
            audio.onended = function() {
                if(_this.isRepeat){
                    audio.play()
                }
                else{
                    nextBtn.click()
                }
            }
            // xua ly repeat song
            repeatBtn.onclick = function() {
                _this.isRepeat = !_this.isRepeat
                _this.setConfig('isRepeat', _this.isRepeat)
               
                repeatBtn.classList.toggle('active',_this.isRepeat)
            }

            // xua ly chon bai tren playlist
            playlist.onclick = function(e) {
                const songNode = e.target.closest('.song:not(.active)')
                if(songNode||e.target.closest('.option')){
                  if(songNode){
                    _this.currentIndex= Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play()
                    _this.render();
                    cdRota.play();
                  }
                  else if(e.target.closest('.option')) {

                  }
                    
                }
            }
        },
        scrollActiveSong: function() {
            setTimeout(function() {
                $('.song.active').scrollIntoView(
                    {
                        behavior: 'smooth',
                        block: 'center'
                    }
                );
            },100);
        },
        loadCurrentSong: function() {
            heading.textContent = this.currentSong.name;
            cdThumb.style.backgroundImage = `url('${this.currentSong.links.images[1].url}')`;
            audio.src = this.currentSong.url;      
        },

        nextSong: function() {
            this.currentIndex++
            if(this.currentIndex >= this.songs.length) {
                this.currentIndex = 0;
            }
            this.loadCurrentSong(); 
        },
        prevSong: function() {
            this.currentIndex--
            if(this.currentIndex <= this.songs.length) {
                this.currentIndex = this.songs.length - 1;
            }
            this.loadCurrentSong(); 
        },
        playRandomSong: function() {
            let newIndex
            do{
                newIndex = Math.floor(Math.random() * this.songs.length);
            }while(newIndex == this.currentIndex)
            this.currentIndex = newIndex;
            this.loadCurrentSong(); 
        },
        loadConfig : function() {
            this.isRandom = this.config.isRandom
            this.isRepeat = this.config.isRepeat

            // hop nhat cau hinh config vao object 
            //Object.assign(this, this.config)
        },
        start: function() {
            // gan cau hinh  config vao cau hinh 
            this.loadConfig()
            this.defineProperties()
            this.handleEvents()
            this.loadCurrentSong()
            this.render()
            
            randomBtn.classList.toggle('active',this.isRandom)
            repeatBtn.classList.toggle('active',this.isRepeat)
        
        }
    }
    app.start();


