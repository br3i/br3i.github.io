document.addEventListener("DOMContentLoaded", function() {
    var player = document.getElementById("player");
    var progress = document.getElementById("progress");
    var seekbar = document.getElementById("seekbar");
    var playbtn = document.getElementById("playbtn");
    var prevbtn = document.getElementById("prevbtn");
    var nextbtn = document.getElementById("nextbtn");
    var current = document.getElementById("current");
    var songTitle = document.getElementById("songTitle");
    var playlistBtn = document.getElementById("playlistbtn");
    var playlistContainer = document.getElementById("playlist");

    var playlist = [
        {'title': 'Girassóis de Van Gogh - Cover - Mari Froes', 'src': './audio/Girassóis de Van Gogh (Cover) - Mari Froes.mp3'},
        {'title': "Casi q' me pierdo - Los Cafres", 'src': "./audio/Casi q' me pierdo - Los Cafres.mp3"},
        {'title': 'Without You - Oh Wonder', 'src': './audio/Without You - Oh Wonder.mp3'},
        {'title': 'Abrazado a Ti - Kevin Kaarl', 'src': './audio/Abrazado a Ti - Kevin Kaarl.mp3'},
        {'title': 'Something About Us - Daft Punk', 'src': './audio/Something About Us - Daft Punk.mp3'},
        {'title': 'M.A.I - Milo j', 'src': './audio/M.A.I - Milo j.mp3'},
        {'title': "We Don't Believe What's on TV - Twenty One Pilots", 'src': "./audio/We Don't Believe What's on TV - Twenty One Pilots.mp3"},
        {'title': 'Beneficios - La Máquina Camaleón', 'src': './audio/Beneficios - La Máquina Camaleón.mp3'},
        {'title': 'San Lucas - Kevin Kaarl', 'src': './audio/San Lucas - Kevin Kaarl.mp3'},
        {'title': 'Cantándote al Oído - KYR4/Luis Branco', 'src': './audio/Cantándote al Oído - KYR4, Luis Branco.mp3'},
        {'title': 'Do I Wanna Know? - Arctic Monkeys', 'src': './audio/Do I Wanna Know - Arctic Monkeys.mp3'},
        {'title': 'Brújula - Siddhartha', 'src': './audio/Brújula - Siddhartha.mp3'},
        {'title': 'Elastic Heart - Sia', 'src': './audio/Elastic Heart - Sia.mp3'},
        {'title': 'Black Out Days - Future Islands Remix - Phantogram/Future Islands', 'src': './audio/Black Out Days (Future Islands Remix) - Phantogram, Future Islands.mp3'},
        {'title': '120 - Bad Bunny', 'src': './audio/120 - Bad Bunny.mp3'},
        {'title': '12 de Julio - Still Anonymous', 'src': './audio/12 de Julio - Still Anonymous.mp3'},
        {'title': 'Beautiful Beat - Nada Surf', 'src': './audio/Beautiful Beat - Nada Surf.mp3'},
        {'title': 'Aprovéchate - Café Tacvba', 'src': './audio/Aprovéchate - Café Tacvba.mp3'},
        {'title': 'Congratulations (feat. Bilal) - Mac Miller/Bilal', 'src': './audio/Congratulations - Mac Miller, Bilal.mp3'},
        {'title': 'Alegrías Computables - Lolabúm', 'src': './audio/Alegrías Computables - Lolabúm.mp3'},
        {'title': 'Ficción - Les Petits Bâtards', 'src': './audio/Ficción - Les Petits Bâtards.mp3'},
        {'title': 'Imagination - Foster The People', 'src': './audio/Imagination - Foster The People.mp3'},
        {'title': 'Arbol Sin Hojas - Dread Mar I', 'src': './audio/Arbol Sin Hojas - Dread Mar I.mp3'},
        {'title': 'Just Kiss Her - Concorde/Clément Froissart', 'src': './audio/Just Kiss Her - Concorde, Clément Froissart.mp3'},
        {'title': 'Cambio de Tonalidad - Da Pawn', 'src': './audio/Cambio de Tonalidad - Da Pawn.mp3'},
        {'title': 'COSAS QUE NO TE DIJE - SAIKO', 'src': './audio/COSAS QUE NO TE DIJE - SAIKO.mp3'},
        {'title': 'Cuentame - Equilivre', 'src': './audio/Cuentame - Equilivre.mp3'},
        {'title': 'Give Me Love - Ed Sheeran', 'src': './audio/Give Me Love - Ed Sheeran.mp3'},
        {'title': 'Desencuentro (feat. Soko) - Residente/Soko', 'src': './audio/Desencuentro - Residente, Soko.mp3'},
        {'title': 'Dias De Sol Nublados - Dread Mar I', 'src': './audio/Dias De Sol Nublados - Dread Mar I.mp3'},
        {'title': 'Go Go Go Go! - Nightcore Version - Felsenstein', 'src': './audio/Go Go Go Go! - Felsenstein.mp3'},
        {'title': 'Lento - Santy-P/Moree Neri', 'src': './audio/Lento - Santy P, Moree Neri.mp3'},
        {'title': 'Leaving On The 5th - Voxhaul Broadcast', 'src': './audio/Leaving On The 5th - Voxhaul Broadcast.mp3'},
        {'title': 'Fall (Latitud 0) - La Máquina Camaleón', 'src': './audio/Fall (Latitud 0) - La Máquina Camaleón.mp3'},
        {'title': 'Runaway - Los Pericos/The Original Wailers', 'src': './audio/Runaway - Los Pericos, The Original, Wailers.mp3'},
        {'title': 'High Enough - RAC Remix - K.Flay/RAC', 'src': './audio/High Enough (RAC Remix) - K.Flay, RAC.mp3'},
        {'title': 'Eres Tú - Matisse/Reik', 'src': './audio/Eres Tú - Matisse, Reik.mp3'},
        {'title': 'Firestone - Kygo/Conrad Sewell', 'src': './audio/Firestone - Kygo, Conrad Sewell.mp3'},
        {'title': 'Fotografía - Jumbo', 'src': './audio/Fotografía - Jumbo.mp3'},
        {'title': 'Fix You - Coldplay', 'src': './audio/Fix You - Coldplay.mp3'},
        {'title': 'Lluvia - Baltazar', 'src': './audio/Lluvia - Baltazar.mp3'},
        {'title': 'Instant Crush (feat. Julian Casablancas) - Daft Punk/Julian Casablancas,', 'src': './audio/Instant Crush - Daft Punk, Julian Casablancas.mp3'},
        {'title': 'Lego House - Ed Sheeran', 'src': './audio/Lego House - Ed Sheeran.mp3'},
        {'title': 'POLARIS - Remix - SAIKO/Quevedo/Feid/Mora', 'src': './audio/POLARIS - SAIKO, Quevedo, Feid, Mora.mp3'},
        {'title': 'Lose Control - Teddy Swims', 'src': './audio/Lose Control - Teddy Swims.mp3'},
        {'title': 'Mercedes - José Madero', 'src': './audio/Mercedes - José Madero.mp3'},
        {'title': 'Hometown - Twenty One Pilots', 'src': './audio/Hometown - Twenty One Pilots.mp3'},
        {'title': 'Ojos Color Sol (feat. Silvio Rodríguez) - Calle 13/Silvio Rodríguez', 'src': './audio/Ojos Color Sol - Calle 13, Silvio Rodríguez.mp3'},
        {'title': 'Lie To Me - Acoustic - 5 Seconds of Summer', 'src': './audio/Lie To Me (Acoustic) - 5 Seconds of Summer.mp3'},
        {'title': 'Manda Una Señal - Maná', 'src': './audio/Manda Una Señal - Maná.mp3'},
        {'title': 'Innerbloom - RÜFÜS DU SOL', 'src': './audio/Innerbloom - RÜFÜS DU SOL.mp3'},
        {'title': 'Loco - Siddhartha/Caloncho', 'src': './audio/Loco - Siddhartha, Caloncho.mp3'},
        {'title': 'Love Language - Crooked Colours', 'src': './audio/Love Language - Crooked Colours.mp3'},
        {'title': 'Respira - Natalia Doco', 'src': './audio/Respira - Natalia Doco.mp3'},
        {'title': 'Losing My Religion - R.E.M.', 'src': './audio/Losing My Religion - R.E.M..mp3'},
        {'title': 'OA - Anuel AA/Quevedo/Maluma/Mambo Kingz/DJ Luian', 'src': './audio/OA - Anuel AA, Quevedo, Maluma, Mambo Kingz, DJ Luian.mp3'},
        {'title': 'Mind If I Stay - Kadebostany', 'src': './audio/Mind If I Stay - Kadebostany.mp3'},
        {'title': 'Que Fluya - Residente/Arcángel', 'src': './audio/Que Fluya - Residente, Arcángel.mp3'},
        {'title': 'Sofia - Clairo', 'src': './audio/Sofia - Clairo.mp3'},
        {'title': 'Somos Instantes - Caloncho', 'src': './audio/Somos Instantes - Caloncho.mp3'},
        {'title': 'New Light - John Mayer', 'src': './audio/New Light - John Mayer.mp3'},
        {'title': 'NYLA - blackbear', 'src': './audio/NYLA - blackbear.mp3'},
        {'title': 'Sal - La Máquina Camaleón', 'src': './audio/Sal - La Máquina Camaleón.mp3'},
        {'title': 'Nothing Breaks Like a Heart (feat. Miley Cyrus) - Mark Ronson/Miley Cyrus', 'src': './audio/Nothing Breaks Like a Heart - Mark Ronson, Miley Cyrus.mp3'},
        {'title': 'Susurros - Neutro Shorty', 'src': './audio/Susurros - Neutro Shorty.mp3'},
        {'title': 'Objects in the Mirror - Mac Miller', 'src': './audio/Objects in the Mirror - Mac Miller.mp3'},
        {'title': 'Siempre me quedará - Bebe', 'src': './audio/Siempre me quedará - Bebe.mp3'},
        {'title': 'Passionfruit - Drake', 'src': './audio/Passionfruit - Drake.mp3'},
        {'title': 'Seguro Te Pierdo - Sergi/KID FLEX', 'src': './audio/Seguro Te Pierdo - Sergi, KID FLEX.mp3'},
        {'title': 'Take Ü There (feat. Kiesza) - Jack Ü/Skrillex/Diplo/Kiesza', 'src': './audio/Take Ü There - Jack Ü, Skrillex, Diplo, Kiesza.mp3'},
        {'title': 'Ser Parte - Siddhartha', 'src': './audio/Ser Parte - Siddhartha.mp3'},
        {'title': 'Safe And Sound - Capital Cities', 'src': './audio/Safe And Sound - Capital Cities.mp3'},
        {'title': 'TUS LÁGRIMAS - Mora/Sech', 'src': './audio/TUS LÁGRIMAS - Mora, Sech.mp3'},
        {'title': 'Something Just Like This - The Chainsmokers/Coldplay', 'src': './audio/Something Just Like This - The Chainsmokers, Coldplay.mp3'},
        {'title': 'Viernes - Molok0', 'src': './audio/Viernes - Molok0.mp3'},
        {'title': 'Skinny Love - Birdy', 'src': './audio/Skinny Love - Birdy.mp3'},
        {'title': 'Volando - Remix - Mora/Bad Bunny/Sech', 'src': './audio/Volando - Mora, Bad Bunny, Sech.mp3'},
        {'title': 'Stay High - Concorde', 'src': './audio/Stay High - Concorde.mp3'},
        {'title': 'Tus Ojos - Reis Belico/Joy Martinez', 'src': './audio/Tus Ojos - Reis Belico, Joy Martinez.mp3'},
        {'title': 'Sweater Weather - The Neighbourhood', 'src': './audio/Sweater Weather - The Neighbourhood.mp3'},
        {'title': "Tell Me Why I'm Waiting - Timmies/Shiloh Dynasty", 'src': "./audio/Tell Me Why I'm Waiting - Timmies, Shiloh Dynasty.mp3"},
        {'title': 'This Modern Love - Bloc Party', 'src': './audio/This Modern Love - Bloc Party.mp3'},
        {'title': 'TIMEZONE - Måneskin', 'src': './audio/TIMEZONE - Måneskin.mp3'},
        {'title': 'Snap Out Of It - Arctic Monkeys', 'src': './audio/Snap Out Of It - Arctic Monkeys.mp3'},
        {'title': 'Waiting For Love - Avicii', 'src': './audio/Waiting For Love - Avicii.mp3'},
        {'title': 'You & Me - Flume Remix - Disclosure/Eliza Doolittle/Flume', 'src': './audio/You & Me (Flume Remix) - Disclosure, Eliza Doolittle, Flume.mp3'},
        {'title': 'TQM - Little Jesus/Elsa y Elmar/Ximena Sariñana', 'src': './audio/TQM - Little Jesus, Elsa y Elmar, Ximena Sariñana.mp3'},
        {'title': 'Una Canción para No Decir Te Quiero - La Maravillosa Orquesta del Alcohol', 'src': './audio/Una Canción para No Decir Te Quiero - La Maravillosa Orquesta del Alcohol.mp3'},
        {'title': 'Únicos - Siddhartha', 'src': './audio/Únicos - Siddhartha.mp3'},
        {'title': 'Æ - Ep. 10: Æ - La Máquina Camaleón', 'src': './audio/Æ - La Máquina Camaleón.mp3'},
        {'title': 'Cuando Me Empieces a Odiar - Los Corrientes', 'src': './audio/Cuando Me Empieces a Odiar - Los Corrientes.mp3'},
        {'title': 'Acurrucar - Ed Maverick', 'src': './audio/Acurrucar - Ed Maverick.mp3'},
        {'title': 'siempreestoypati - Ed Maverick', 'src': './audio/siempreestoypati - Ed Maverick.mp3'},
        {'title': 'Antes de Morirme (feat. ROSALÍA) - C. Tangana/ROSALÍA', 'src': './audio/Antes de Morirme - C. Tangana, ROSALÍA.mp3'},
        {'title': 'Zamba Surreal - Guardarraya', 'src': './audio/Zamba Surreal - Guardarraya.mp3'},
    ];

    var currentSongIndex = 0;
    var isSeeking = false;

    function loadSong(index) {
        var song = playlist[index];
        player.src = song.src;
        songTitle.innerText = song.title;

        // Verificar si el título excede el ancho del contenedor
        if (checkOverflow()) {
            // Aplicar animación si el título excede el ancho del contenedor
            songTitle.style.animation = 'marquee 10s linear infinite';
        } else {
            // No aplicar animación si el título no excede el ancho del contenedor
            songTitle.style.animation = 'none';
        }
        player.onloadedmetadata = function() {
        seekbar.max = player.duration;
        };
    }

    // Función para verificar si el título excede el ancho del contenedor
    function checkOverflow() {
        return songTitle.scrollWidth > songTitle.offsetWidth;
    }

    function playpause() {
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    }

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        player.play();
    }

    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        player.play();
    }

    function togglePlaylistMenu() {
        playlistContainer.classList.toggle("show");
    }

    // Construir dinámicamente la lista de reproducción
    function buildPlaylist() {
        playlistContainer.innerHTML = "";
        playlist.forEach(function(song, index) {
            var listItem = document.createElement("div");
            listItem.textContent = (index + 1) + ". " + song.title;
            listItem.classList.add("playlist-item");
            listItem.addEventListener("click", function() {
                loadSong(index);
                player.play();
                playlistContainer.classList.toggle("show");
            });
            playlistContainer.appendChild(listItem);
        });
    }

    // Mostrar u ocultar el menú de lista de reproducción al hacer clic en el botón de la lista de reproducción
    playlistBtn.addEventListener("click", togglePlaylistMenu);

    playbtn.addEventListener("click", playpause);
    nextbtn.addEventListener("click", playNextSong);
    prevbtn.addEventListener("click", playPrevSong);

    player.onplay = function () {
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
    };

    player.onpause = function () {
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
    };

    // Control de la barra de progreso
    player.onended = function() {
        // Reiniciar la canción o pasar a la siguiente
        playNextSong();
    };

    seekbar.addEventListener("input", function() {
        isSeeking = true;
        player.currentTime = seekbar.value; // Cambiar la posición de reproducción según el control deslizante
    });

    seekbar.addEventListener("change", function() {
        isSeeking = false;
    });

    player.ontimeupdate = function () {
        if (!isSeeking) {
        let ct = player.currentTime;
        let duration = player.duration;
        let prog = Math.floor((ct * 100) / duration);
        progress.style.setProperty("--progress", prog + "%");
        seekbar.value = ct; // Actualizar la posición del control deslizante
        }
        current.innerHTML = timeFormat(player.currentTime);
    };

    function timeFormat(ct) {
        minutes = Math.floor(ct / 60);
        seconds = Math.floor(ct % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    }

    buildPlaylist(); // Construir la lista de reproducción al iniciar
    loadSong(currentSongIndex); // Cargar la primera canción al iniciar
});
