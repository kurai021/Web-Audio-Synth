window.onload = function(){

  //notas mayores y sus frecuencias desde C0 hasta C8
  var notes = {
      'C0': 16.35,
      'C#0': 17.32,
      'Db0': 17.32,
      'D0': 18.35,
      'D#0': 19.45,
      'Eb0': 19.45,
      'E0': 20.60,
      'F0': 21.83,
      'F#0': 23.12,
      'Gb0': 23.12,
      'G0': 24.50,
      'G#0': 25.96,
      'Ab0': 25.96,
      'A0': 27.50,
      'A#0': 29.14,
      'Bb0': 29.14,
      'B0': 30.87,
      'C1': 32.70,
      'C#1': 34.65,
      'Db1': 34.65,
      'D1': 36.71,
      'D#1': 38.89,
      'Eb1': 38.89,
      'E1': 41.20,
      'F1': 43.65,
      'F#1': 46.25,
      'Gb1': 46.25,
      'G1': 49.00,
      'G#1': 51.91,
      'Ab1': 51.91,
      'A1': 55.00,
      'A#1': 58.27,
      'Bb1': 58.27,
      'B1': 61.74,
      'C2': 65.41,
      'C#2': 69.30,
      'Db2': 69.30,
      'D2': 73.42,
      'D#2': 77.78,
      'Eb2': 77.78,
      'E2': 82.41,
      'F2': 87.31,
      'F#2': 92.50,
      'Gb2': 92.50,
      'G2': 98.00,
      'G#2': 103.83,
      'Ab2': 103.83,
      'A2': 110.00,
      'A#2': 116.54,
      'Bb2': 116.54,
      'B2': 123.47,
      'C3': 130.81,
      'C#3': 138.59,
      'Db3': 138.59,
      'D3': 146.83,
      'D#3': 155.56,
      'Eb3': 155.56,
      'E3': 164.81,
      'F3': 174.61,
      'F#3': 185.00,
      'Gb3': 185.00,
      'G3': 196.00,
      'G#3': 207.65,
      'Ab3': 207.65,
      'A3': 220.00,
      'A#3': 233.08,
      'Bb3': 233.08,
      'B3': 246.94,
      'C4': 261.63,
      'C#4': 277.18,
      'Db4': 277.18,
      'D4': 293.66,
      'D#4': 311.13,
      'Eb4': 311.13,
      'E4': 329.63,
      'F4': 349.23,
      'F#4': 369.99,
      'Gb4': 369.99,
      'G4': 392.00,
      'G#4': 415.30,
      'Ab4': 415.30,
      'A4': 440.00,
      'A#4': 466.16,
      'Bb4': 466.16,
      'B4': 493.88,
      'C5': 523.25,
      'C#5': 554.37,
      'Db5': 554.37,
      'D5': 587.33,
      'D#5': 622.25,
      'Eb5': 622.25,
      'E5': 659.26,
      'F5': 698.46,
      'F#5': 739.99,
      'Gb5': 739.99,
      'G5': 783.99,
      'G#5': 830.61,
      'Ab5': 830.61,
      'A5': 880.00,
      'A#5': 932.33,
      'Bb5': 932.33,
      'B5': 987.77,
      'C6': 1046.50,
      'C#6': 1108.73,
      'Db6': 1108.73,
      'D6': 1174.66,
      'D#6': 1244.51,
      'Eb6': 1244.51,
      'E6': 1318.51,
      'F6': 1396.91,
      'F#6': 1479.98,
      'Gb6': 1479.98,
      'G6': 1567.98,
      'G#6': 1661.22,
      'Ab6': 1661.22,
      'A6': 1760.00,
      'A#6': 1864.66,
      'Bb6': 1864.66,
      'B6': 1975.53,
      'C7': 2093.00,
      'C#7': 2217.46,
      'Db7': 2217.46,
      'D7': 2349.32,
      'D#7': 2489.02,
      'Eb7': 2489.02,
      'E7': 2637.02,
      'F7': 2793.83,
      'F#7': 2959.96,
      'Gb7': 2959.96,
      'G7': 3135.96,
      'G#7': 3322.44,
      'Ab7': 3322.44,
      'A7': 3520.00,
      'A#7': 3729.31,
      'Bb7': 3729.31,
      'B7': 3951.07,
      'C8': 4186.01
  };

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext;

  var oscillator1, oscillator2, oscillator3, oscillator4, oscillator5, oscillator6, oscillator7, oscillator8, oscillator9, oscillator10, oscillator11, oscillator12;
  var octave = 5; //inicia el sintetizador usando 5tos
  document.getElementById("octave").innerHTML = octave;

  window.addEventListener("keydown", function(e){
    //las primeras dos opciones aumentan o disminuyen las octavas y corresponden a la tecla + y - del teclado numerico
    if(e.which == '107'){
      octave = octave+1;
      document.getElementById("octave").innerHTML = octave;
    }

    if(e.which == '109'){
      octave = octave-1;
      document.getElementById("octave").innerHTML = octave;
    }

    //utiliza las 12 primeras teclas qwertyuiop etc..., la frecuencia de la nota se basa en las octavas
    //web audio api no permite usar un mismo oscilador varias veces a menos que lo destruyas y vuelvas a crear la instancia
    //usar varios osciladores permite presionar varias teclas a la vez sin que existan conflictos
    if(e.which == '81'){
      oscillator1 = context.createOscillator();
      oscillator1.connect(context.destination);
      oscillator1.frequency.value = notes["C" + octave];
      oscillator1.start(0);
    }

    if(e.which == '87'){
      oscillator2 = context.createOscillator();
      oscillator2.connect(context.destination);
      oscillator2.frequency.value = notes["C#" + octave];
      oscillator2.start(0);
    }

    if(e.which == '69'){
      oscillator3 = context.createOscillator();
      oscillator3.connect(context.destination);
      oscillator3.frequency.value = notes["D" + octave];
      oscillator3.start(0);
    }

    if(e.which == '82'){
      oscillator4 = context.createOscillator();
      oscillator4.connect(context.destination);
      oscillator4.frequency.value = notes["D#" + octave];
      oscillator4.start(0);
    }

    if(e.which == '84'){
      oscillator5 = context.createOscillator();
      oscillator5.connect(context.destination);
      oscillator5.frequency.value = notes["E" + octave];
      oscillator5.start(0);
    }

    if(e.which == '89'){
      oscillator6 = context.createOscillator();
      oscillator6.connect(context.destination);
      oscillator6.frequency.value = notes["F" + octave];
      oscillator6.start(0);
    }

    if(e.which == '85'){
      oscillator7 = context.createOscillator();
      oscillator7.connect(context.destination);
      oscillator7.frequency.value = notes["F#" + octave];
      oscillator7.start(0);
    }

    if(e.which == '73'){
      oscillator8 = context.createOscillator();
      oscillator8.connect(context.destination);
      oscillator8.frequency.value = notes["G" + octave];
      oscillator8.start(0);
    }

    if(e.which == '79'){
      oscillator9 = context.createOscillator();
      oscillator9.connect(context.destination);
      oscillator9.frequency.value = notes["G#" + octave];
      oscillator9.start(0);
    }

    if(e.which == '80'){
      oscillator10 = context.createOscillator();
      oscillator10.connect(context.destination);
      oscillator10.frequency.value = notes["A" + octave];
      oscillator10.start(0);
    }

    if(e.which == '219'){
      oscillator11 = context.createOscillator();
      oscillator11.connect(context.destination);
      oscillator11.frequency.value = notes["A#" + octave];
      oscillator11.start(0);
    }

    if(e.which == '221'){
      oscillator12 = context.createOscillator();
      oscillator12.connect(context.destination);
      oscillator12.frequency.value = notes["B" + octave];
      oscillator12.start(0);
    }

  });

  window.addEventListener("keyup", function(e){

    //al dejar de presionar la tecla el oscilador se detiene y se desconecta para ser recolectado por el garbage collector
    //esto permite volver a crear el mismo oscilador una vez más como se menciona arriba y "reutilizarlo"

    if(e.which == '81'){
      oscillator1.stop(0);
      oscillator1.disconnect();
    }

    if(e.which == '87'){
      oscillator2.stop(0);
      oscillator2.disconnect();
    }

    if(e.which == '69'){
      oscillator3.stop(0);
      oscillator3.disconnect();
    }

    if(e.which == '82'){
      oscillator4.stop(0);
      oscillator4.disconnect();
    }

    if(e.which == '84'){
      oscillator5.stop(0);
      oscillator5.disconnect();
    }

    if(e.which == '89'){
      oscillator6.stop(0);
      oscillator6.disconnect();
    }

    if(e.which == '85'){
      oscillator7.stop(0);
      oscillator7.disconnect();
    }

    if(e.which == '73'){
      oscillator8.stop(0);
      oscillator8.disconnect();
    }

    if(e.which == '79'){
      oscillator9.stop(0);
      oscillator9.disconnect();
    }

    if(e.which == '80'){
      oscillator10.stop(0);
      oscillator10.disconnect();
    }

    if(e.which == '219'){
      oscillator11.stop(0);
      oscillator11.disconnect();
    }

    if(e.which == '221'){
      oscillator12.stop(0);
      oscillator12.disconnect();
    }

  });

}
