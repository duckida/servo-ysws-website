<body>
    <a href="https://hackclub.com" target="_blank"><img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club" class="top-logo"></a>
    <div class="centered container">
        <h1>🤖 <span class="blue">Servo</span></h1>
        <h3>Build robots, get parts & upgrades!</h3>
        <div class="button-container">
            <a href=""><button class="rsvp-button"><p>RSVP now!</p></button></a>
            <a href="https://hackclub.enterprise.slack.com/archives/C0ARBM1GSRX"><button class="slack-button"><p>Join #servo</p></button></a>
        </div>
    </div>

    <div class="container">
        <h2>How it works</h2>
        <h3><span class="blue">You:</span> build / design a robot</h3>
        <h3><span class="blue">We:</span> ship you parts & upgrades for it!</h3>
    </div>

    <div class="container">
        <h2>First time?</h2>
        <h3>Get a Servo robot kit & spend time building your first robot!</h3>
        <h3>Design upgrades to get parts & prizes!</h3>
    </div>

    <div class="centered footer">
        <p>Made with ❤️ by <a href="https://github.com/duckida/servo-ysws-website/">@duckida</a> and Hack Club!</p>
    </div>
</body>


<style>
    h1 {
        font-family: "DM Sans";
        font-size: 67px;
    }
    h2 {
        font-family: "DM Sans";
        font-size: 37px;
    }
    h3 {
        font-family: "DM Sans";
        font-size: 22px;
    }
    p {
        font-family: "DM Sans"
    }

    .centered {
        text-align: center;
    }

    .blue {
        color: rgb(67, 129, 255);
    }

    .footer {
        border-radius: 20px;
        background-color: rgb(67, 129, 255);
        color: white;
        margin-top: 6%;
        margin-bottom: 2%;
        margin-left: 20%;
        margin-right: 20%;
        padding: 5px;
    }

    a {
        color: white;
    }

    .rsvp-button {
        border-radius: 30px;
        color: white;
        font-size: 20px;
        background: rgb(67, 129, 255);
        padding-left: 20px;
        padding-right: 20px;
        border: none;
    }

    .slack-button {
        border-radius: 30px;
        color: white;
        font-size: 20px;
        background: #ec3750;
        padding-left: 20px;
        padding-right: 20px;
        border: none;
    }

    .button-container {
        display: flex;
        justify-content: center; /* Centers the buttons horizontally */
        gap: 20px; /* Adds space between the two buttons */
        margin-top: 20px; /* Optional: adds space above the buttons */
    }

    .container {
        padding: 4%;
        margin: 10%;
        margin-top: 4%;
        margin-bottom: 4%;
        border-radius: 40px;
        background-color: white;
    }


    body {
        margin: 0;
        background-color: rgb(67, 129, 255);
        background-image: 
            linear-gradient(rgb(255, 255, 255) 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px);
        background-size: 20px 20px;
        background-attachment: fixed;
    }

    .top-logo{
      position:fixed;
      top:0;
      left:0;
      width:224px; /* reduced to half of previous size */
      height:auto;
      z-index:1000;
    }

</style>