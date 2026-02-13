document.addEventListener('DOMContentLoaded', function() {
    // Load speech on page2
    const speech = document.getElementById('speech');
    if (speech) {
        speech.innerHTML = `Debabrita,<br><br>Before you, my life was quieter in a way that hurt. Days passed, conversations ended, and silence became familiar. I was surrounded by people, yet I felt alone, like I was simply existing rather than living. I didn’t realize how heavy that loneliness was until you walked into my life and slowly, effortlessly, changed it.<br><br>Talking to you changed everything. You didn’t come like a storm; you came like warmth. Suddenly, my days had meaning. I laughed more. I felt lighter. I started looking forward to moments again. Even the ordinary parts of my day felt special, just because I knew I’d get to talk to you. You didn’t just fill a space in my life—you transformed it.<br><br>There’s something about you that makes me feel alive. A simple conversation with you can turn my worst day into something bearable, sometimes even beautiful. And when I don’t get to talk to you for a long time, I feel it deeply. I miss your words, your thoughts, the comfort of knowing you’re there. Even though we live in the same city, the distance between us can feel real and heavy. Still, somehow, you never feel far from my heart.<br><br>I love you unconditionally. Not because it’s easy, but because it’s real. I don’t love you for perfect moments alone; I love you for who you are, completely. And I want you to know something important: not everyone is meant to leave. Some people are meant to stay, to hold the door open, to stand their ground when things get complicated. At least not me. I am not the one who walks away.<br><br>In Bluebeard’s Castle, there was a moment that spoke quietly but powerfully—the idea that some doors are terrifying to open, yet love means choosing to stay even after seeing what’s behind them. Loving you feels like that choice. Not blind, not careless, but deliberate. I see you, and I stay.<br><br>You make my days brighter just by being you. You turned my loneliness into laughter, my silence into connection, my emptiness into something full. And for that, for you, I am endlessly grateful.`;
    }

    // Handle "No" on page3
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        noBtn.addEventListener('click', () => {
            if (confirm("Are you sure? Think again!")) {
                window.location.href = 'page4.html'; // Navigate to page4
            }
        });
    }
});